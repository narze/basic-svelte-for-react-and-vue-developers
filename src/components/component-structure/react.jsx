import { useEffect } from "react"

import "../../styles/react.css"

export default function Component() {
  // Lifecycle hook
  useEffect(() => {
    console.log("Hello from React!")
  }, [])

  return <p>Hello, world!</p>
}
