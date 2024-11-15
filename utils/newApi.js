import axios from "axios";
import { news_api } from "../keys";

export async function search({query}){
    const url =`https://newsapi.org/v2/everything?q=Apple&from=2024-11-14&sortBy=publishedAt&apiKey=${news_api}`;
    const response = await axios.get(url);
    return response.data.articles;
}

export async function trendingFetch() {
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`;
    const response = await axios.get(url);
    return response.data.articles;
}
