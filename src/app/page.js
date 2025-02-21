'use client'

import { ContactInfoStep } from "@/components/ContactInfoStep";
import { FormHeader } from "@/components/FormHeader";
import { ProfileInfoStep } from "@/components/ProfileInfoStep";
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
    confirmPassword: "",
    date: "",
    profileImage: ""
  })

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
    profileImage: ""
  })

  const steps = [UserInfoStep, ContactInfoStep, ProfileInfoStep];
  const Components = steps[currentStep];

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  }

  const nextStep = () => {
    if (currentStep == steps.length - 1) return;
    setCurrentStep((prev) => prev + 1);

    window.localStorage.setItem('multi-step-form', JSON.stringify({ formValues, currentStep: currentStep + 1 }))
  }

  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem('multi-step-form'))

    if (!localStorage) return;

    setFormValues(localStorage.formValues)
    setCurrentStep(localStorage.currentStep)

  }, [])

  const isEqual = currentStep == steps.length

  return (
    <main className={`relative w-[480px] h-[655px] p-8 bg-white rounded-xl p-8 ${isEqual && "h-fit"}`}>
      <FormHeader title={isEqual ? "You're All Set 🔥" : "Join Us! 😎"} description={isEqual ? "We have received your submission. Thank you!" : "Please provide all current information accurately."} />

      {currentStep < steps.length && <Components
        formValues={formValues}
        setFormValues={setFormValues}
        formErrors={formErrors}
        setFormErrors={setFormErrors}
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep} />}

    </main>
  );
}