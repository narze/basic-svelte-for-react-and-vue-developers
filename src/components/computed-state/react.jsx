import { useState, useMemo } from "react"

export default function Component() {
  const [count, setCount] = useState(0)

  const countDoubled = useMemo(() => count * 2, [count])

  // const [countDoudle, setCountDoubled] = useState(0)
  // useEffect(() => { setCountDoubled(count * 2}, [count])

  return (
    <div className="flex flex-col gap-4">
      Compute with React: {count} x 2 = {countDoubled}

      <button onClick={() => setCount(count + 1)} className="btn">
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
