import { ContinueButton } from "./ContinueButton";
import { InputFeild } from "./InputFeild";

export const ContactInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors, prevStep }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.email) {
            setFormErrors((prev) => ({ ...prev, email: "Hooson baina" }))
        }

        if (!formValues.phoneNumber) {
            setFormErrors((prev) => ({ ...prev, phoneNumber: "Hooson baina" }))
        }

        if (!formValues.password) {
            setFormErrors((prev) => ({ ...prev, password: "Hooson baina" }))
        }
        if (!formValues.confirmPassword) {
            setFormErrors((prev) => ({ ...prev, confirmPassword: "Hooson baina" }))
        }

        if (!formValues.email || !formValues.phoneNumber || !formValues.password || !formValues.confirmPassword) {
            return;
        }

        nextStep();
    }

    return (
        <form onSubmit={handleNext} className="mt-7">

            <InputFeild required label='Email' name="email" onChange={onChange} placeholder={'Email...'} error={formErrors['email']} />

            <InputFeild required label='Phone number' name="phoneNumber" onChange={onChange} placeholder={'Phone number...'} error={formErrors['phoneNumber']} />

            <InputFeild required label='Password' name="password" onChange={onChange} placeholder={'Password...'} error={formErrors['password']} />

            <InputFeild required label='Confirm password' name="confirmPassword" onChange={onChange} placeholder={'Confirm password...'} error={formErrors['confirmPassword']} />

            <ContinueButton nextStep={handleNext} prevStep={prevStep} currentStep={currentStep} />
        </form>
    )
}