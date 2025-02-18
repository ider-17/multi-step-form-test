'use client'

import { FormHeader } from "@/components/FormHeader";
import { UserInfoStep } from "@/components/UserInfoStep";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })

  const steps = [UserInfoStep];
  const Components = steps[currentStep];
  const nextStep = (event) => {
    event.preventDefault()
    setCurrentStep((prev) => prev + 1)
  }

  return (
    <main className="w-[480px] h-[655px] p-8 bg-white">
      <FormHeader />

      <form className="mt-7">
        <Components
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          currentStep={currentStep}
          nextStep={nextStep} />
      </form>

    </main>
  );
}