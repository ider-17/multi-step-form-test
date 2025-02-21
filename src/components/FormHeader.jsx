export function FormHeader({ title, description }) {
    return (
        <div>
            <img src="logo.svg" />
            <h1>{title}</h1>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}