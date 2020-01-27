import React, { useState } from "react";


const Contact = () => {
    const [details, setdetails] = useState(
        {
            fullName: '',
            email: '',
            phone: ''
        }
    )
    const [errors, setErrors] = useState({});
    const [isValid, setValid] = useState(false);

    const handleChange = event => {
        let { name, value } = event.target;
        console.log(value, name, event.target);
        event.preventDefault();
        setdetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));

    }
    const formIsValid = _ => {
        const { fullName, email, phone } = details;
        const phonePa = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        const emailPa = /\S+@\S+\.\S+/;
        const errors = {};
        if (!fullName) errors.fullName = "Full Name is required";
        if (!email.match(emailPa)) errors.email = "Email is not Valid";
        if (!phone.match(phonePa)) errors.phone = "Phone number is not valid";
        setErrors(errors);
        return Object.keys(errors).length === 0
    }
    const handleClick = event => {
        event.preventDefault();
        formIsValid();
        let isValid = formIsValid();
        if (!isValid) return;
        setValid(true);
        console.log("function succed")
    }
    const sendMail = async () => {
        console.log(details);
        try {
            window.Email.send({
                Host: "smtp.elasticemail.com",
                Username: "adi.cohen.cv@gmail.com",
                Password: "d6d3143e-4ec7-4e1d-8e08-2770c9299183",
                SecureToken: "8c1dd572-f773-4ce5-97fa-e396a960de80",
                To: 'adi.cohen.cv@gmail.com',
                From: 'adi.cohen.cv@gmail.com',
                Subject: "Contact Me",
                Body: `From ${details.fullName},  Phone: ${details.phone},  Email ${details.email}`
            }).then(
                message => console.log(message, 'mail has been sent')
            );
        } catch (e) {
            console.log("Error:" + e);
        }
    }

    React.useEffect(() => {
        console.log(details);
        sendMail(details);
    }, [isValid])


    return (
        <div className="contact" id="contact">
            <div className="logo"></div>
            <div className="contact-title">
                <h6>PLEASE LEAVE YOUR DETAILS BELOW AND WE’LL CONTACT YOU</h6>
            </div>
            <div className="fields">
                <form onSubmit={handleClick}>
                    <div className="input-field"><label>Full Name:</label>
                        <input
                            name="fullName"
                            placeholder="Full Name"
                            onChange={handleChange}
                            value={details.fullName}
                        />
                        <div className="text-danger">{errors.fullName}</div></div>
                    <div className="input-field"><label>Email:</label> <input name="email" value={details.email} onChange={handleChange} placeholder="Email" /><div className="text-danger">{errors.email}</div></div>
                    <div className="input-field"><label>Phone:</label> <input name="phone" value={details.phone} onChange={handleChange} placeholder="Phone Number" /><div className="text-danger">{errors.phone}</div></div>
                    <div>
                        <input type="submit" className="btn-dark button" value="Submit" />
                    </div>
                </form>
            </div>
        </div>

    )

}

export default Contact;