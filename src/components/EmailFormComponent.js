import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';
import {useMediaQuery} from "react-responsive";

const EmailFormComponent = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showEmailError, setShowEmailError] = useState(false);
    const [showNameError, setShowNameError] = useState(false);


    const shortScreen = useMediaQuery({
        query: '(max-height: 780px)'
    });

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name);
        console.log(email);

        let error = false;


        if(!name){
            setShowNameError(true);
            error = true;
        }
        else{
            setShowNameError(false);
        }

        if(!validateEmail(email)){
            setShowEmailError(true);
            error = true;
        }
        else{
            setShowEmailError(false);
        }

        if(error) return;

        const serviceId = 'service_lcrj0jr';
        const templateId = 'template_5zg08m8';
        const publicKey = 'NWe0KMZNmjsbYt6o-';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Eli',
            message: message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setName("");
                setEmail("");
                setMessage("");
                setShowEmailError(false);
                setShowNameError(false);
            })
            .catch((error) => {
                console.error("error sending email: ", error)
            });
    }

    return(
        <form onSubmit={handleSubmit} className="emailForm">
            <input className="form-field name" type="text"
                   placeholder="Your Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
            {showNameError && <span className="error-message">Don't be shy, what's your name?</span>}
            <input className="form-field" type="text"
                   placeholder="Your Email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            {showEmailError && <span className="error-message">Must be a valid email address</span>}
            <textarea
                className="form-field textarea"
                rows={shortScreen ? 6 : 10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <div className="btn-gradient">
                <button className="send-btn" type="submit">Send Email</button>
            </div>

        </form>
    );
}

export default EmailFormComponent;