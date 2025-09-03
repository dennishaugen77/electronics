import React, { useMemo, useState, useEffect } from 'react'

type CheckboxProps = {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  onChange,
  label,
  className,
}) => {
  const isControlled = useMemo(() => typeof checked === 'boolean', [checked])
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked ?? false)

  useEffect(() => {
    if (isControlled) return
    setInternalChecked(defaultChecked ?? false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultChecked])

  const isOn = isControlled ? (checked as boolean) : internalChecked

  return (
    <label className={`inline-flex items-center cursor-pointer ${className ?? ''}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={(e) => {
          if (!isControlled) setInternalChecked(e.target.checked)
          onChange?.(e.target.checked)
        }}
      />
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded border border-gray-500 bg-white text-black"
      >
        {isOn && (
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
          >
            <path d="M20 6L9 17L4 12" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <p className='ml-3 capitalize'>{label}</p>
    </label>
  )
}


