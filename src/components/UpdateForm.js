import React, { useState } from 'react';
import { sendRequest } from '../services/HttpHandler';

function UpdateForm({ field, endpoint, fetchData }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendRequest(
                `http://localhost:8080/about/${endpoint}`,
                'PUT',
                JSON.stringify(inputValue),
                { 'Content-Type': 'application/json' }
            );
            fetchData(); // Fetch updated data after the update
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={`Enter new ${field}`}
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default UpdateForm