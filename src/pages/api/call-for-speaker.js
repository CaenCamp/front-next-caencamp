import axios from 'axios';

const submitPaper = async paper => {
    const submitedPaperResponse = await axios({
        url: `/papers`,
        method: 'post',
        baseURL: process.env.API_URL,
        headers: {
            authorization: `Bearer ${process.env.API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        data: paper,
    });

    if (submitedPaperResponse.status !== 200) {
        throw new Error(
            `Problème lors de la soumission de votre proposition avec un code ${submitedPaperResponse.status}. Vous pouvez contacter les administrateurs du site (contact@coding.caen.camp).`,
        );
    }

    return submitedPaperResponse.data;
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const submitedPaper = await submitPaper(req.body);
            res.status(200).json(submitedPaper);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(404);
    }
}
