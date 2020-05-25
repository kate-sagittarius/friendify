import axios from 'axios';

const apiURL = 'https://jsonplaceholder.typicode.com';

export async function getUsers() {
    const response = await axios.get(`${apiURL}/users`);
    return response.data;
}

export async function getPosts(page: number) {
    const response = await axios.get(`${apiURL}/posts?_page=${page}&_limit=10`);
    return response.data;
}