import React, { Component } from 'react';

class Student extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name'></input>

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email'></input>
                </form>
            </div>
        );
    }
}

export default Student;