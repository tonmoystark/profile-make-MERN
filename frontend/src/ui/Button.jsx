

const Button = ({text, variant, onClick, type, classes}) => {

    const buttonVariant =
    variant === "primary" ? "bg-blue-500" :
    variant === "secondary" ? "bg-green-500" :
    variant === "danger" ? "bg-red-500" :
    variant === "general" ? "bg-pink-700" :
    "bg-gray-500"

  return (
    <button type={type} onClick={onClick} className={`${buttonVariant } ${classes}  text-white px-4 py-2 rounded`}>
        {text}
    </button>
  )
}

export default Button