import { useState } from "react"

import "../../styles/react.css"

export default function Component() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      Count with React: {count}

      <button onClick={() => setCount(count + 1)}
        className="btn">
        +1
      </button>

      <button className="btn" onClick={() => setCount(count - 1)}>
        -1
      </button>

      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}
