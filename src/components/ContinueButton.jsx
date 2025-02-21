export const ContinueButton = ({ nextStep, currentStep, prevStep }) => {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center gap-2 bottom-7 mt-[120px]">
            {currentStep != 0 && <button className="border border-black py-2 rounded-lg px-5" type="button" onClick={prevStep}>Back</button>}

            <button className="bg-black text-white py-2 rounded-lg px-24 " type="submit">Continue<span>{currentStep}/3</span></button>
        </div>
    )
}