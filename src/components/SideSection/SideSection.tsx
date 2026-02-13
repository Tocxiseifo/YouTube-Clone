import { useSidebar } from "@/components/ui/sidebar"
import { Home, Video, Settings, Clock } from "lucide-react" // أي icons

export function AppSidebar() {
  const { open , setOpen } = useSidebar()

  const navItems = [
    { label: "Home", icon: Home },
    { label: "Shorts", icon: Video },
    { label: "Subscriptions", icon: Clock },
  ]

  const libraryItems = [
    { label: "Library", icon: Video },
    { label: "History", icon: Clock },
    { label: "Watch Later", icon: Clock },
  ]

  return (
    <aside
      className={`bg-main-backGround border-r  border-main-backGround dark:border-gray-800
       h-screen w-48 p-4 flex flex-col pt-35  transition-transform duration-300 text-white
        ${open ? "translate-x-0 hidden" : "-translate-x-full flex"} md:translate-x-0 fixed md:static`}
    >
      {/* Header / Logo
      <div className="mb-6">
        <h1 className="text-xl font-bold">YouTube Clone</h1>
      </div> */}

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center cursor-pointer gap-3 p-2 hover:bg-white/30 duration-300 transition-all hover:duration-300 rounded-md "
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Divider */}
      <hr className="my-4 border-gray-200 dark:border-gray-800" />

      {/* Library */}
      <nav className="flex flex-col gap-2 cursor-pointer">
        {libraryItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 p-2 hover:bg-white/30 duration-300 transition-all hover:duration-300 rounded-md "
          >
            <item.icon className="w-5 h-5 " />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer / Settings */}
      <div className="mt-auto">
        <button className="flex items-center gap-3 p-2 hover:bg-white/30 duration-300 transition-all hover:duration-300 rounded-md ">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  )
}
