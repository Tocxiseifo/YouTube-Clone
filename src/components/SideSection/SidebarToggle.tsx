import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"

export function SidebarToggle() {
  const { open, setOpen } = useSidebar()
  return (
    <button
      className="p-2 "
      onClick={() => setOpen(open)}
    >
      <Menu className="w-6 h-6" />
    </button>
  )
}
