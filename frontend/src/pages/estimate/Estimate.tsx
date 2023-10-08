import React from "react";
import PageContainer from "../../components/PageContainer";
import Input from "../../components/inputs/Input";
import Button from "../../components/buttons/Button";

const Estimate = () => {
    return (
        <PageContainer className="bg-gray-100">
            <span className="py-4 text-4xl font-semibold w-full text-center">Get a Free Estimate</span>
            <div className="flex flex-col w-full items-center">
                <Input type="name" placeHolder="Name" onChange={() => {}} />
                <Input type="email" placeHolder="Email" onChange={() => {}} />
                <Input type="phone-number" placeHolder="Phone Number" onChange={() => {}} />
                <Input type="comment" placeHolder="Comment" onChange={() => {}} />
            </div>
            <Button text="Send" onClick={() => {}} />
        </PageContainer>
    );
};

export default Estimate;
