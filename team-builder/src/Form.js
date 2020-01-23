import React, { useState } from 'react';

const Form = props => {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: "",

    });

    const handleChange = event => {
        setPerson({
            ...person, [event.target.name] : event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();

    };
    return (
        <div>

        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
            />

            <label htmlFor="role">Role:</label>
            <input
                type="text"
                id="role"
                name="role"
                onChange={handleChange}
            />

            <input type="submit"
                   value="Submit"
            />

        </form>
        </div>
    )
};

export default Form;