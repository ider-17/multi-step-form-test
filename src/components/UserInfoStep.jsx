import { ContinueButton } from "./ContinueButton"

export const UserInfoStep = ({ formValues, setFormValues, nextStep, currentStep, formErrors, setFormErrors }) => {

    const onChange = (event) => {
        setFormValues((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleNext = (event) => {
        event.preventDefault();

        if (setFormValues.firstName) {
            setFormErrors((prev) => ({ ...prev, firstName: "Hooson baina" }))
        }

        if (setFormValues.lastName) {
            setFormErrors((prev) => ({ ...prev, lastName: "Hooson baina" }))
        }

        console.log(formErrors);

        // nextStep();
    }


    return (
        <>
            <div className="space-y-2">
                <label>
                    First name<span className="text-red-700">*</span>
                </label>
                <br />
                <input onChange={onChange} name="firstName" placeholder="First name..." className="border" />

                {formErrors.firstName && <p className="text-red-600">{formErrors.firstName}</p>}
            </div>

            <div className="space-y-2">
                <label>
                    Last name<span className="text-red-700">*</span>
                </label>
                <br />
                <input onChange={onChange} name="lastName" placeholder="Last name..." className="border" />

                {formErrors.lastName && <p className="text-red-600">{formErrors.lastName}</p>}
            </div>

            <ContinueButton nextStep={nextStep} currentStep={currentStep} />
        </>
    )
}