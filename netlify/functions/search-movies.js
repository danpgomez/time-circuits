/**
 * Netlify Serverless Function: TMDb Movie Search Proxy
 *
 * This function keeps your TMDb API key secure by running on the server
 * instead of exposing it in client-side JavaScript.
 *
 * How it works:
 * 1. Your React app calls this function at /.netlify/functions/search-movies
 * 2. This function fetches data from TMDb using your secret API key
 * 3. Results are returned to your React app
 * 4. API key never reaches the browser!
 */

export async function handler(event, context) {
  // Only allow POST requests for better security
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed. Use POST.' })
    };
  }

  try {
    // Extract the search query from the request body
    const { query } = JSON.parse(event.body);

    // Validate that a query was provided
    if (!query || query.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Query parameter is required' })
      };
    }

    // Get API key from environment variables (server-side only!)
    // This is set in Netlify's dashboard under Environment Variables
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
      console.error('TMDB_API_KEY environment variable is not set');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }

    // Build the TMDb API URL
    const tmdbUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${apiKey}`;

    // Fetch data from TMDb
    const response = await fetch(tmdbUrl);

    // Check if TMDb request was successful
    if (!response.ok) {
      console.error('TMDb API error:', response.status, response.statusText);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Failed to fetch from TMDb',
          details: response.statusText
        })
      };
    }

    // Parse the response
    const data = await response.json();

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // Allow your frontend to access this (CORS)
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    // Handle any errors (parsing, network, etc.)
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    };
  }
}
