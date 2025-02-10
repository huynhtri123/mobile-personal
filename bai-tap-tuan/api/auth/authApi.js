import axiosClient from '../axiosClient';

const authApi = {
    signin(signinRequest) {
        const url = '/v1/auth/signin';
        return axiosClient.post(url, signinRequest);
    },
};

export default authApi;
