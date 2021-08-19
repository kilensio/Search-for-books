import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

interface SelectProps {
  values: {
    label: string
    value: string
  }[]
  onChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({values, onChange}) => {
  const [value, setValue] = useState<number | string>(values[0].value)
  const history = useHistory()

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
    history.push('/')
    onChange(e.target.value)
  }

  return (
    <select value={value} onChange={onSelectChange}>
      {values.map((value, i) =>
        <option key={i} value={value.value}>{value.label}</option>
      )}
    </select>
  )
}

export default Select
