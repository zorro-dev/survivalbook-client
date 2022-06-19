import {$host} from "./index";

export const fetchArticle = async (id) => {
    const {data} = await $host.post(`api/article/${id}`)
    return data;
}
