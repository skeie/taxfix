const url = 'https://txf-ecb.glitch.me/rates';

function setHeaders(method, body) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    return {
        method,
        headers,
        body,
    };
}

export async function get() {
    const response = await fetch(url, setHeaders('GET'));
    return _handleResponse(response);
}

const _handleResponse = async response => {
    if (response.status === 201 || response.status === 204) return;

    const responseJson = await response.json();

    if (response.status >= 400) {
        const msg = responseJson.msg || responseJson.message;
        throw {
            message: msg,
        };
    }

    return responseJson;
};
