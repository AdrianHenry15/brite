import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

const useFileUpload = () => {
    const [photo, setPhoto] = useState(null);

    const handleFileUpload = (e: any) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("photo", file);

        axios
            .post("/upload", formData)
            .then((response) => {
                setPhoto(response.data.photo);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (!photo) return;

        const data = new FormData();
        data.append("photo", photo);

        axios
            .post("/store", data)
            .then((response) => {
                console.log("Photo stored successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }, [photo]);

    return (
        <div>
            <h1>Upload a photo</h1>
            <input type="file" onChange={handleFileUpload} />
            <button type="submit">Upload</button>
        </div>
    );
};

export default useFileUpload;
