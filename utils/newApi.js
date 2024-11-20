import axios from "axios";
import { news_api } from "../keys";

export async function search({ query }) {
  console.log(query);
  const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${news_api}`;
  const response = await axios.get(url);
  return response.data.articles;
}

export async function trendingFetch() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`;
  const response = await axios.get(url);
  return response.data.articles;
}

export async function exporeFetch() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`;
  const response = await axios.get(url);
  return response.data.articles;
}

export async function searchCategory(query) {
  const url = `https://newsapi.org/v2/top-headlines?category=${query.toLowerCase()}&apiKey=${news_api}`;
  const response = await axios.get(url);

  return response.data.articles;
}

export async function getSources() {
  const url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${news_api}`;
  const response = await axios.get(url);
  return response.data.sources;
}
