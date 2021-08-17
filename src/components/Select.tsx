import React, { useState } from 'react'

interface SelectProps {
  values: {
    label: string
    value: string
  }[]
  onChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({values, onChange}) => {
  const [value, setValue] = useState<number | string>(values[0].value)
  // useEffect(() => {
    
  // }, [value])
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    // <select value={values[0].value} onChange={e => onChange && onChange(e.target.value)}>
    <select value={value} onChange={onSelectChange}>
      {values.map((value, i) =>
        <option key={i} value={value.value}>{value.label}</option>
      )}
    </select>
  )
}

export default Select
