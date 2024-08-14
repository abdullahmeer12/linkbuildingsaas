import axios from 'axios';

const params = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_APP_KEY}`,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const {data} = await axios.get(process.env.NEXT_PUBLIC_DEV_URL + url, params);
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};
