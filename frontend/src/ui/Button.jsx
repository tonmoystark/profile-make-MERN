import React from 'react'

const Button = ({text, variant, onClick}) => {

    const buttonVariant =
    variant === "primary" ? "bg-blue-500" :
    variant === "secondary" ? "bg-green-500" :
    variant === "danger" ? "bg-red-500" :
    "bg-gray-500"

  return (
    <button onClick={onClick} className={`${buttonVariant} text-white px-4 py-2 rounded`}>
        {text}
    </button>
  )
}

export default Button