import axios from 'axios';
const url = "/api/book";

export default class API {
    static async getAllbook() {
        const res = await axios.get(url);
        return res.data;
    }

    static async getbookById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    static async addbook(book) {
        const res = await axios.post(url, book);
        return res.data;
    }

    static async updatebook(id, book) {
        const res = await axios.patch(`${url}/${id}`, book);
        return res.data;
    }

    static async deletebook(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }



}