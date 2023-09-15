import axios from "axios";

export default async function handler(req, res) {
    // get the phone number from the request body
    const { phone } = req.query;

    // check if the phone number is valid
    // if (!phone || !phone.match(/^\+\d{10,15}$/)) {
    //     return res.status(400).json({ error: "Invalid phone number" });
    // }

    // define the message template name
    const templateName = "hello_world";

    // define the message parameters
    const parameters = [
        {
            type: "text",
            text: "Hola soy Karu, Bienvenido a mi tienda de whatsapp",
        },
    ];

    // define the recipient phone number
    const recipient = {
        whatsapp_id: "+5491158928151",
    };

    // define the access token
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;

    // define the send message endpoint
    const endpoint = `https://graph.facebook.com/v17.0/114643441721705/messages`;

    // define the request body

    const body =  { 
        messaging_product: "whatsapp",
        to: "+541126228699",
        type:"text",
        text:{
            body: "HOLA HOLA"
        }
    }

    // const body = {
    //     recipient,
    //     message: {
    //         name: templateName,
    //         language_policy: "deterministic",
    //         parameters,
    //     },
    //     messaging_type: "MESSAGE_TAG",
    //     tag: "ACCOUNT_UPDATE",
    //     headers: {"Authorization" : `Bearer ${accessToken}`}
    // };

    try {
        // make a POST request to the send message endpoint
        const response = await axios.post(endpoint, body, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }});
        // return a success response with the message id
        return res.status(200).json({ message_id: response.data.message_id });
    } catch (error) {
        console.log(error)
        // return an error response with the error message
        return res.status(500).json({ error: error.message });
    }
}