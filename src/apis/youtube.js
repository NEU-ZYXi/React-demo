import axios from 'axios';

const KEY = 'AIzaSyAAHoeKetBNXTJxLTxgGw0yrT1X_CKam2s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
