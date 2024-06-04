import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

import './Contact.css';

export default function Contact() {
    const defaultFormState = {
        name: "",
        email: "",
        message: ""
    }

    const [formState, setFormState] = useState(defaultFormState);


    const updateForm = (e) => {
        console.log(e)
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
    }
    useEffect(() => {
        console.log(formState)
    }, [formState])

    return (
        <div className='contact-scene'>
            <h1 className='title'>Contact</h1>
            <div className='form'>
                <Form>
                    <FormGroup>
                        <Input defaultValue={formState.name} id="name" placeholder="Name" name="name" type="text" onChange={(e) => updateForm(e)} className="input-field" />
                        <Label for="name">Name</Label>
                    </FormGroup>
                    <FormGroup>
                        <Input defaultValue={formState.email} placeholder="example@gmail.com" id="email" type="email" onChange={(e) => updateForm(e)} className="input-field" />
                        <Label for="email">Email</Label>
                    </FormGroup>
                    <FormGroup>
                        <Input defaultValue={formState.message} placeholder="..." type="text" id="message" onChange={(e) => updateForm(e)} className="input-field" />
                        <Label for="message">Message</Label>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}