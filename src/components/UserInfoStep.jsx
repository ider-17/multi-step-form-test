import { ContinueButton } from "./ContinueButton"
import { InputFeild } from "./InputFeild"

export const UserInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (!formValues.firstName) {
            setFormErrors((prev) => ({ ...prev, firstName: "Hooson baina" }))
        }

        if (!formValues.lastName) {
            setFormErrors((prev) => ({ ...prev, lastName: "Hooson baina" }))
        }

        if (!formValues.firstName || !formValues.lastName) {
            return;
        }

        nextStep();
    }


    return (
        <form className="mt-7" onSubmit={handleNext}>

            <InputFeild required label='First name' name="firstName" onChange={onChange} placeholder={'First name...'} error={formErrors['firstName']} value={formValues.firstName} />

            <InputFeild required label='Last name' name="lastName" onChange={onChange} placeholder={'Last name...'} error={formErrors['lastName']} value={formValues.lastName} />

            <ContinueButton nextStep={handleNext} currentStep={currentStep} />
        </form>
    )
}