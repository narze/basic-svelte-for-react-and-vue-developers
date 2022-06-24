import { useState, useMemo } from "react"

export default function Component() {
  const [value, setValue] = useState("Hello")

  function onChange(e) {
    setValue(e.currentTarget.value)
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      Data binding with React

      <input
        type="text"
        className="input input-bordered"
        value={value}
        onChange={onChange}
      ></input>

      Value: {value}
    </div>
  )
}
