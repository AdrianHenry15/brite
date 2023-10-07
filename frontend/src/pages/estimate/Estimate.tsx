import React from "react";
import PageContainer from "../../components/PageContainer";
import Input from "../../components/inputs/Input";
import Button from "../../components/buttons/Button";

const Estimate = () => {
    return (
        <PageContainer>
            <span className="py-4 text-4xl font-semibold w-full text-center">Get a Free Estimate</span>
            <div className="flex flex-col ">
                <Input type="name" placeHolder="Name" onChange={() => {}} />
                <Input type="email" placeHolder="Email" onChange={() => {}} />
                <Input type="phone-number" placeHolder="Phone Number" onChange={() => {}} />
                <Input type="comment" placeHolder="Comment" onChange={() => {}} />
            </div>
            <Button path={""} text={""} onClick={() => {}} />
        </PageContainer>
    );
};

export default Estimate;
