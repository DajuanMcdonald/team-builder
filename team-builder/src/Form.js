import React, { useState } from 'react';

const Form = props => {

    return (
        <div>

        <form action="">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
            />

            <label htmlFor="role">Role:</label>
            <input
                type="text"
                id="role"
                name="role"
            />

        </form>
        </div>
    )
};

export default Form;