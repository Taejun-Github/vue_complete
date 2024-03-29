import axios from 'axios';

// 1. HTTP Request & REsponse와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리한다.

async function fetchNewsList() {
    try {
        const reseponse = await axios.get(`${config.baseUrl}news/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}
async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
        console.log(error);
    }
}
async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (error) {
        console.log(error);
    }

}
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }

}
async function fetchUserInfo(username) {
    try {
        return await axios.get(`${config.baseUrl}user/${username}.json`);
    } catch (error) {
        console.log(error);
    }

}

async function fetchCommentItem(id) {
    try {
        return await axios.get(`${config.baseUrl}item/${id}.json`);
    } catch (error) {
        console.log(error);
    }

}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}
