import axios from "axios";

export const getQuoteAuthor = async () => {
  const result = await axios.get(
    "https://strangerthings-quotes.vercel.app/api/quotes/"
  );
  return result.data;
};

