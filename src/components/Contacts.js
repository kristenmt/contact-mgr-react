import React, { Component } from "react";

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "jdoe@gmail.com",
                    phone: "222-222-2222"
                },
                {
                    id: 2,
                    name: "Jane Jones",
                    email: "jjones@gmail.com",
                    phone: "444-444-4444"
                },
                {
                    id: 3,
                    name: "Henry Johnson",
                    email: "hjohnson@gmail.com",
                    phone: "111-111-1111"
                }
            ]
        }
    }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact => (
                    <h1>{contact.name}</h1>
                ))}
            </div>
        )
    }
}

export default Contacts;