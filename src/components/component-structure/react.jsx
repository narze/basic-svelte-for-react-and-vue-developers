import { useEffect } from "react"

import "../../styles/react.css"

export default function Component() {
  useEffect(() => {
    console.log("Hello from React!")
  }, [])

  return <h1>Hello, world!</h1>
}
