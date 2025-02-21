import { useRef, useState } from "react";
import { InputFeild } from "./InputFeild"
import { ContinueButton } from "./ContinueButton";

export const ProfileInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors, prevStep }) => {

    const imageRef = useRef();

    const [preview, setPreview] = useState('');

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const imageHandler = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.files[0] }))
        setPreview(window.URL.createObjectURL(event.target.files[0]))
    }

    const uploadImage = () => {
        imageRef.current.click()
    }

    const handleNext = (event) => {
        event.preventDefault();

        nextStep();
    }

    return (
        <form onSubmit={handleNext} className="mt-7">

            <InputFeild type="date" required label='Date' name="date" onChange={onChange} error={formErrors['date']} />

            <div className="mt-7 h-[180px] w-full bg-gray-100 rounded-lg flex justify-center items-center cursor-pointer text-center " onClick={uploadImage}>
                {preview ? <img className="h-full w-full object-cover" src={preview} /> : "Add image"}
            </div>

            <input className="hidden" type="file" ref={imageRef} onChange={imageHandler} name="profileImage" />

            <ContinueButton nextStep={handleNext} prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}