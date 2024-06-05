import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const formSparkUrl = 'https://submit-form.com/o9VErebzy';
    const recaptchaKey = '6LcTUfEpAAAAABK05iPz9JJblMdvYOZ_egE-0Op7';
    const recaptchaRef = useRef(null);
    const ref = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        error: '' // Current Error Message of Form.
    });

    const updateForm = (e) => {
        console.log(e)
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        });
        
        if (e.target.id === 'message') {
            adjustTextareaHeight();
        }
    }

    const adjustTextareaHeight = () => {
        if (ref.current) {
            ref.current.style.height = 'auto';
            ref.current.style.height = `${ref.current.scrollHeight}px`;
        }
    };
    const validateForm = () => {
        if (formState.name === '' || formState.email === '' || formState.message === '') {
            return false;
        }
        return true;
    }

    const submitForm = () => {
        console.log(formState);

        if (!validateForm()) {
            return;
        }
        fetch(formSparkUrl).then((response) => {
            if (response.status === 200) {
                setFormState({
                    name: '',
                    email: '',
                    message: '',
                    error: ''
                });
            }
        });
    }

    const updateRecaptchaToken = (token) => {   
        setRecaptchaToken(token);
    }

    return (
        <div className='contact-scene'>
            <div className='contact-section'>
                <h1 className='title'>Contact Me</h1>
                <div className='form'>
                    <Form className='form'>
                        <FormGroup floating>
                            <Input 
                                    value={formState.name}
                                    placeholder='Name' 
                                    type='text' 
                                    id='name' 
                                    onChange={(e) => updateForm(e)} 
                                    className='input-field'
                            />                            
                            <Label for='name'>Name</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input 
                                    value={formState.email}
                                    placeholder='example@gmail.com' 
                                    type='email' 
                                    id='email' 
                                    onChange={(e) => updateForm(e)} 
                                    className='input-field' 
                                    
                            />                            
                            <Label for='email' title='Email'>Email</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input 
                                value={formState.message}
                                placeholder='...' 
                                type='textarea' 
                                id='message' 
                                onChange={(e) => updateForm(e)} 
                                className='input-field resizeable' 
                                innerRef={ref}
                            />
                            <Label for='message'>Message</Label>
                        </FormGroup>
                    </Form>
                    <div style={{
                        width: "70%",
                        paddingBottom: "20px"
                    }}>
                        <ReCAPTCHA 
                            ref={recaptchaRef}
                            sitekey={recaptchaKey}  
                            onChange={updateRecaptchaToken}  
                        />
                        <Button color='success' block={true} onClick={() => {submitForm()}}>Submit</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}