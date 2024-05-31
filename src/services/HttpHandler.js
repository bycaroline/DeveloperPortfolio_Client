// export const sendRequest = async (url, method = 'GET', body = null, headers = {}) => {
//     try {
//         const config = {
//             method: method,
//             headers: {
//                 'Content-Type': 'application/json',
//                 ...headers
//             }
//         };

//         if (body) {
//             config.body = JSON.stringify(body);
//         }

//         const response = await fetch(url, config);

//         if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(errorResponse.message || 'Something went wrong!');
//         }

//         const responseData = await response.json();
//         return responseData;
//     } catch (error) {
//         throw error;
//     }
// };

export const sendRequest = async (url, method = 'GET', body = null, headers = {}) => {
    try {
        const config = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        };

        if (body) {
            config.body = JSON.stringify(body); // Ensure body is correctly stringified
        }

        const response = await fetch(url, config);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || 'Something went wrong!');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
};


