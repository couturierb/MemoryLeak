import axios from 'axios';

const proxyUrl = 'http://localhost:9999/';
const url = proxyUrl + 'https://api.igdb.com/v4/';
const authUrl = 'https://id.twitch.tv/oauth2/token';
var token;

function getToken() {
    return axios
        .post(authUrl, null, {
            params: {
                client_id: import.meta.env.VITE_IGDB_CLIENT_ID,
                client_secret: import.meta.env.VITE_IGDB_CLIENT_SECRET,
                grant_type: 'client_credentials'
            }
        })
        .then((res) => res.data.access_token);
}

async function search(name) {
    if (!token) {
        token = await getToken();
    }

    return axios
        .post(url + 'games', `fields name; search "${name}";`, {
            headers: {
                'Client-ID': import.meta.env.VITE_IGDB_CLIENT_ID,
                'Authorization': 'Bearer ' + token
            }
        })
        .then((res) => res.data);
}

export default { search };
