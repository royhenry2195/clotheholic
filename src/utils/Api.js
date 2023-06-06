// api.js

import { getToken } from "./tokenUtils";

// Function to make a GET request


export const get = async (url) => {
    try {
        const token = getToken();
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                "authorization": token ? token : ''
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Request failed.');
    } catch (error) {
        console.error(error);
        throw new Error('Request failed.');
    }
};

// Function to make a POST request
export const post = async (url, body) => {
    try {
        const token = getToken();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": token ? token : ''
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Request failed.');
    } catch (error) {
        console.error(error);
        throw new Error('Request failed.');
    }
};


//function to delete item
export const deleteApi = async (url) => {
    try {
        const token = getToken();
        const response = await fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                "authorization": token ? token : ''
            },
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Request failed.');
    } catch (error) {
        console.error(error);
        throw new Error('Request failed.');
    }
};

  // Other API functions...
