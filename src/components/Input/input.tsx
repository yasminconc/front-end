import { useState, InputHTMLAttributes, forwardRef } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  name?: string
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ name, label, type = 'text', error = '', ...props }, ref) {
    const [isPasswordVisible, setPasswordVisible] = useState(false)

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type

    return (
      <div className="relative">
        {label && (
          <label htmlFor={name} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 pr-10"
            type={inputType}
            ref={ref}
            name={name}
            id={name} 
            {...props}
          />

          {type === 'password' && (
            <button
              type="button"
              onClick={() => setPasswordVisible((prev) => !prev)}
              className="absolute right-10 top-3 text-gray-500"
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>

        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
