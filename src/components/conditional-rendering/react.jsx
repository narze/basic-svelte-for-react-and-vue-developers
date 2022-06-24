import { useState } from "react"

export default function Component() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-4 items-center">
      Conditional Rendering with React

      <button onClick={() => setCount(count + 1)} className="btn">
        +1
      </button>

      {count % 2 === 0 ? (
        <div>{count} is even</div>
      ) : (
        <div>{count} is odd</div>
      )}
    </div>
  )
}
