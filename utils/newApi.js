import axios from "axios";
import { news_api } from "../keys";

export async function search({query}){
    const url =`https://newsapi.org/v2/everything?q=Apple&sortBy=publishedAt&apiKey=${news_api}`;
    const response = await axios.get(url);
    return response.data.articles;
}

export async function trendingFetch() {
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`;
    const response = await axios.get(url);
    return response.data.articles;
}
export async function exporeFetch(){
    const url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=7b163a8f92a842c9946c2f09d981e573`;
    const response = await axios.get(url);
    return response.data.articles;
}
