import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import Input from "../../components/inputs/Input";
import Button from "../../components/buttons/Button";
import emailjs from "@emailjs/browser";

const Estimate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    // TODO: SETUP EMAILJS HERE
    const getEstimate = (e: React.MouseEvent<HTMLButtonElement>) => {
        const templateParams = {
            name: name,
            email: email,
            phone_number: phone,
            comment: comment,
        };

        alert("Your contact information has been sent!");

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.send(serviceID, templateID, templateParams, publicKey).then(
            function (response: any) {
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error: any) {
                console.log("FAILED...", error);
            }
        );
    };
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };
    return (
        <PageContainer className="bg-gray-100">
            <span className="py-4 text-4xl font-semibold w-full text-center">Get a Free Estimate</span>
            <div className="flex flex-col w-full items-center">
                <Input type="name" placeHolder="Name" onChange={(e) => handleName(e)} />
                <Input type="email" placeHolder="Email" onChange={(e) => handleEmail(e)} />
                <Input type="phone-number" placeHolder="Phone Number" onChange={(e) => handlePhone(e)} />
                <Input className="pb-24" type="comment" placeHolder="Comment" onChange={(e) => handleComment(e)} />
            </div>
            <Button text="Send" onClick={(e) => getEstimate(e)} />
        </PageContainer>
    );
};

export default Estimate;
