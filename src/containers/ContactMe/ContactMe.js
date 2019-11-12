import React, { useState } from 'react';

import classes from './ContactMe.module.css';

const ContactMe = props => {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const nameChangeHandler = event => {
        setNameValue(event.target.value);
    };

    const emailChangeHandler = event => {
        setEmailValue(event.target.value);
    };

    const messageChangeHandler = event => {
        setMessageValue(event.target.value);
    };



    const submitHandler = event => {
        event.preventDefault();
        const templateId = 'template_RZ52hWbw';

        sendFeedBack(templateId, {message_html: messageValue, from_name: nameValue, reply_to: emailValue});

        setSuccessMessage(`Thank you, ${nameValue}. Your message has been received!`);

        setMessageValue('');
        setEmailValue('');
        setNameValue('');
    };

    const sendFeedBack = (templateId, variables) => {
        window.emailjs.send('lawangin_gmail', templateId, variables)
            .then(res => {
                console.log('Email successfully sent')
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className={classes.Container}>
                <form className={classes.ContactMeMain} onSubmit={submitHandler}>
                    <h1>Contact Me</h1>
                    <label>Name</label>
                    <input
                        className={classes.inputName}
                        type="text"
                        placeholder="Name"
                        value={nameValue}
                        onChange={event => nameChangeHandler(event)}
                    />
                    <label>Email</label>
                    <input
                        className={classes.inputEmail}
                        type="email"
                        placeholder="E-mail Address"
                        value={emailValue}
                        onChange={event => emailChangeHandler(event)}
                    />
                    <label>Message</label>
                    <textarea
                        className={classes.textArea}
                        placeholder="How can I help you?"
                        value={messageValue}
                        onChange={event => messageChangeHandler(event)}
                    />
                    <button type="submit" className={classes.Button}>SEND</button>
                </form>
                <p>{successMessage}</p>
            </div>
        </>
    );
};



export default ContactMe;