import { createContext } from "react";

interface Context {
    open?: boolean
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comment: any[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SetComment: React.Dispatch<React.SetStateAction<any[]>>
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<Context | null>(null)