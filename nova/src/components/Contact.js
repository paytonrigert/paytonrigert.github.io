import React from 'react';
import './Css/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact py-5">
            <div className="container">
                <h3>Contact</h3>
                <div className="row">
                    <div className="col-md-6">
                        <p>Email: </p>
                        
                    </div>
                    <div className="col-md-6">
                        <a
                            href="https://www.linkedin.com/in/payton-rigert/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Visit LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
