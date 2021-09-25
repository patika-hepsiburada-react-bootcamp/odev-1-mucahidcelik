import axios from "axios";

export default async function getData(userID) {
    let userData = (await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + userID
    )).data;
    let postData = (await axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=" + userID
    )).data;

    return {...userData, posts: postData};
}