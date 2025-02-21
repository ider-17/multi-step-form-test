import { useState } from "react";
import { InputFeild } from "./InputFeild"

export const ProfileInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors, prevStep }) => {

    const imageRef = useRef();

    const [url, setUrl] = useState('');

    const onChange = (event) => {
        setUrl(window.URL.createObjectURL(event.target.files[0]))
    }

    // const onChange = (event) => {
    //     setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    //     setFormErrors((prev) => ({ ...prev, [event.target.name]: '' }))
    // }

    const uploadImage = () => {
        
    }

    const handleNext = (event) => {
        event.preventDefault();

        // nextStep();
    }

    return (
        <form onSubmit={handleNext} className="mt-7">

            <InputFeild type="date" required label='Date' name="date" onChange={onChange} error={formErrors['date']} />

            {url && <img className="h-40 w-full object-cover" src={url} />}

            <div onClick={uploadImage}>Add image</div>

            <input className="hidden" type="file" ref={imageRef} />

            {/* <InputFeild type="file" required label='Profile image' name="profileImage" onChange={onChange} error={formErrors['profileImage']} /> */}

        </form>
    )
}