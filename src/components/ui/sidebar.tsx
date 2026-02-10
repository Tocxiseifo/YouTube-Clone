import * as React from "react"

type SidebarContextType = {
  open: boolean
  setOpen: (open: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | null>(null)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true) // Desktop open by default
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider.")
  return context
}
