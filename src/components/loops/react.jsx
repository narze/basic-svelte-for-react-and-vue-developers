import { useState } from "react"

export default function Component() {
  const todos = [
    { name: "Attend Svelte Meetup", done: true },
    { name: "Buy groceries", done: false },
    { name: "Cook dinner", done: false },
  ]

  return (
    <div className="flex flex-col gap-4 items-center">
      Loops with React

      <ul>
        {todos.map((todo, idx) => (
          <li key={idx} class="flex gap-2 items-center">
            <input type="checkbox" checked={todo.done} className="checkbox" />
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
