// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './components/Nav/NavBar'
import { Context } from './Context/Context'
import AppRouters from './router/AppRouters'
import { SidebarProvider } from "@/components/ui/sidebar"

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [comment , SetComment] = useState<any[]>([])
  const [search ,setSearch] = useState<string>('')
  const [channelLogo, setChannelLogo] = useState<string>(""); 
  

  return (
    <Context.Provider value={{comment,SetComment,search ,setSearch,channelLogo, setChannelLogo}}>
      <SidebarProvider>
        <NavBar />
        <div className="h-auto w-full min-w-0 flex flex-row overflow-x-hidden">
          <AppRouters />
        </div>
      </SidebarProvider>
    </Context.Provider>    
  )
}

export default App
