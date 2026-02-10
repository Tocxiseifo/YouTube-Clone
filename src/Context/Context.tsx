import { createContext } from "react";

interface Context {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<Context | null>(null)