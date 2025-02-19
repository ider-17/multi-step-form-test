export const ContinueButton = ({ nextStep, currentStep, prevStep }) => {
    return (
        <div className="flex justify-center gap-2">
            {currentStep != 0 && <button type="button" onClick={prevStep}>Back</button>}

            <button type="submit">Continue<span>{currentStep}/3</span></button>
        </div>
    )
}