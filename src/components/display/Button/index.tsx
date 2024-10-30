
type ButtonProps = {
    label: string
    bgColor: string
    onClick?: () => void
    type?: string
    size?: string
}
const Button = ({ label, bgColor, onClick, size }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${bgColor} text-white  rounded-md  ${size === 'small' ? "max-w-max p-2" : "w-full py-3 px-4"}`}>{label}</button>
    )
}

export default Button