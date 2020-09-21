import { createContext } from "react"

function noop(event: React.KeyboardEvent) {}

const Context = createContext({
    api: noop,
})

export default Context