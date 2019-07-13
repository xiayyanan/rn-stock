import axios from 'axios'
const api = axios.create();
// api.defaults.baseURL = 'http://localhost:3000';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default api