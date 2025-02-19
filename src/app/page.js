'use client'

import { ContactInfoStep } from "@/components/ContactInfoStep";
import { FormHeader } from "@/components/FormHeader";
import { UserInfoStep } from "@/components/UserInfoStep";
import { useEffect, useState } from "react";

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

  const steps = [UserInfoStep, ContactInfoStep];
  const Components = steps[currentStep];

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  }

  const nextStep = (event) => {
    setCurrentStep((prev) => prev + 1);

    window.localStorage.setItem('multi-step-form', JSON.stringify({ formValues, currentStep: currentStep + 1 }))
  }

  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem('multi-step-form'))

    if (!localStorage) return;

    setFormValues(localStorage.formValues)
    setCurrentStep(localStorage.currentStep)

  }, [])

  return (
    <main className="w-[480px] h-[655px] p-8 bg-white">
      <FormHeader />

      <div className="mt-7">
        <Components
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep} />
      </div>

    </main>
  );
}