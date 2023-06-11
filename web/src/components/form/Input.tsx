import { useFormContext } from 'react-hook-form'
import { IconType } from 'react-icons'
import { ZodSchema, z } from 'zod'

interface InputProps {
  id: string
  formData: ZodSchema
  label: string
  icon: IconType
  error?: string
  type?: 'text' | 'password'
}

export function Input({
  id,
  formData,
  icon: Icon,
  label,
  error,
  type = 'text',
}: InputProps) {
  type FormData = z.infer<typeof formData>
  const { register } = useFormContext<FormData>()

  const borderStyle = error ? 'border-red-500' : 'border-primary-color'

  return (
    <div className="mt-3 grid space-y-1">
      <label htmlFor={id} className="text-xs text-gray-600">
        {label}
      </label>
      <div
        className={`h-10 flex items-center pl-3 gap-3 rounded overflow-hidden border ${borderStyle}`}
      >
        <Icon size={20} fontWeight={100} />
        <input
          {...register(id)}
          id={id}
          name={id}
          type={type}
          className="w-full h-full peer border-0 outline-0 text-base text-gray-800 leading-relaxed bg-transparent"
        />
      </div>
      {error && (
        <small className="text-xs text-red-500">{error.toString()}</small>
      )}
    </div>
  )
}
