import React, { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

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
        <div style={{
            backgroundColor: "#E7E7E7",
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column"
        }}>
            <h1 style={{
                paddingTop: "50px",
                textAlign: "center",
            }}>Contact</h1>

            <Form>
                <FormGroup floating>
                    <Input defaultValue={formState.name} id="name" placeholder="Name" name="name" type="text" onChange={(e) => updateForm(e)}/>
                    <Label for="name">Name</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input defaultValue={formState.email} placeholder="example@gmail.com" id="email" type="email" onChange={(e) => updateForm(e)}/>
                    <Label for="email">Email</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input defaultValue={formState.message} placeholder="..." type="text" id="message" onChange={(e) => updateForm(e)}/>
                    <Label for="message">Message</Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    <Label for="exampleEmail">
                        Email
                    </Label>
                </FormGroup>
                {' '}
            </Form>

        </div>
    )
}