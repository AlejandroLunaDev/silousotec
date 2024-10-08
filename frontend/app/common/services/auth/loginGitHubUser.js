import { getBaseUrl } from "../../helper/envHelper";

const BASE_URL = getBaseUrl();
export const loginGitHubUser = async () => {

    window.location.href = `${BASE_URL}/api/sessions/github`;
}

export const loginGitHubUserCallback = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/sessions/github/callback`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

