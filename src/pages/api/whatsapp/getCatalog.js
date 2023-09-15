import axios from "axios";

export default async function handler(req, res) {
    // define the access token
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

    // define the get all products endpoint
    const endpoint = `https://graph.facebook.com/v12.0/me/products?access_token=${accessToken}`;

    try {
        // make a GET request to the get all products endpoint
        const response = await axios.get(endpoint);

        // return a success response with the list of products
        return res.status(200).json({ products: response.data.data });
    } catch (error) {
        // return an error response with the error message
        return res.status(500).json({ error: error.message });
    }
}