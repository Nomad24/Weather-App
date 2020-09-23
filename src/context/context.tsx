import { createContext, MouseEvent, ChangeEvent} from "react"

function noop(event: MouseEvent<HTMLButtonElement>) {}
function noop1(event: ChangeEvent<HTMLInputElement>) {}

const Context = createContext({
    api: noop,
    handleInputChange: noop1
})

export default Context