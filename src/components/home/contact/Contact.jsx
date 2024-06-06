import React, { useRef, useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

export default function Contact() {
    const formSparkUrl = 'https://submit-form.com/o9VErebzy';
    const recaptchaKey = '6LcTUfEpAAAAABK05iPz9JJblMdvYOZ_egE-0Op7';
    const recaptchaRef = useRef(null);
    const ref = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const initialFormState = {
        name: '',
        email: '',
        message: '',
    }
    const [message, setMessage] = useState();
    const [formState, setFormState] = useState(initialFormState);

    const updateForm = (e) => {
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

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const validateForm = () => {
        if (formState.name === '' || formState.email === '' || formState.message === '' || recaptchaToken === '') {
            return false;
        }
        return true;
    }

    const submitForm = async () => {
        if (!validateForm()) {
            if (recaptchaToken === '') {
                setMessage({
                    message: "You must complete ReCAPTCHA before submitting.",
                    class: "bg-warning"
                })  
                return;
            }
            setMessage({
                message: "You must fill out all fields prior to submitting.",
                class: "bg-warning"
            })
            return;
        }

        if (!validateEmail(formState.email)) {
            setMessage({
                message: "You must provide a valid email before submitting.",
                class: "bg-warning"
            })
            return;
        }

        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken,
        };
        
        try {
            await axios.post(formSparkUrl, payload);
            setFormState(initialFormState);
            recaptchaRef.current.reset();
            setMessage({
                message: "Success! I will get back to you shortly!",
                class: "bg-success"
            })
        } catch (error) {
            setMessage({
                message: "There was an sending your message. :(",
                class: "bg-danger"
            })
        }
        
    }

    const updateRecaptchaToken = (token) => {   
        setRecaptchaToken(token);
    }

    return (
        <div className='contact-scene'>
            <div className='contact-section'>
                <h1 className='title'>Contact Me</h1>
                { message && (
                    <div style={{
                        width: "76%",
                        minHeight: "30px",
                        maxHeight: "60px",
                        textAlign: "center",
                        textWrap: "wrap",
                        color: "white",
                        margin: "auto",
                        borderRadius: "5px",
                        marginBottom: "10px"
                    }} className={message.class}>
                        {message.message}
                    </div>
                )}
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
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <ReCAPTCHA 
                            ref={recaptchaRef}
                            sitekey={recaptchaKey}  
                            onChange={updateRecaptchaToken}  
                        />
                    </div>
                    <div style={{
                        width: "70%",
                        paddingBottom: "20px",
                        marginTop: "5px"
                    }}>
                        <Button color='success' block={true} onClick={() => {submitForm()}}>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}