import React, { useState } from 'react';

const Form = props => {
    //set the state
    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: "",

    });

    //Handle the form change event
    const handleChange = event => {
        setPerson({
            ...person, [event.target.name] : event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newPerson =  {
            ...person, id: Date.now()
        }

    };

    const addMember = member => {
        setPerson({...person, member})
    };
    return (
        <div>

        <form onSubmit={handleSubmit} >
            {/*Name of Professional*/}
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                placeholder="Enter a Name"
                id="name"
                name="name"
                onChange={handleChange}
                value={person.name}
            />

            <label htmlFor="email">Email:</label>
            {/*Email of Professional*/}
            <input
                type="email"
                placeholder="Enter an Email"
                id="email"
                name="email"
                onChange={handleChange}
                value={person.email}
            />



            <label htmlFor="role">Role:</label>
            {/*Role of Professional*/}
            <select onChange={handleChange}>
                <option value="Engineer">Engineer</option>
                <option value="Developer">Developer</option>
                <option value="Contributor">Contributor</option>
                <option value="Consultant">Consultant</option>
                <option value="Student">Student</option>

            </select>




            {/*Submit the data*/}
            <input
                onClick={addMember}
                type="submit"
                value="Submit"
            />

        </form>
        </div>
    )
};

export default Form;