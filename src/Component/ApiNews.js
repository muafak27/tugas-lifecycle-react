import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL
const newsApi = process.env.REACT_APP_APIKEY
 
export const getNews = async () => {
    const news = await axios.get(
        `${baseUrl}/us${newsApi}`
        )
    return news.data.articles
}

export const searchNews = async (q) => {
    const search = await axios.get(
        `${baseUrl}/${q}${newsApi}`)
        return search.data.articles
}