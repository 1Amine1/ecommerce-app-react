// API calls for FE

export const createPaymentIntent = async (total) => {
    const BASE_URL = 'https://us-central1-amzon-react-clone.cloudfunctions.net/api'
    // 'http://localhost:5001/amzon-react-clone/us-central1/api'

    const response = await fetch(`${BASE_URL}/payment/create?total=${total * 100}`, {
        method: "POST",
    }).then(res => res.json());

    return response;
}