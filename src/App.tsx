import { useState } from 'react'
import './App.css'
import NavBar from './components/Nav/NavBar'
import { Context } from './Context/Context'
import AppRouters from './router/AppRouters'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from './components/SideSection/SideSection'

function App() {
    const [open , setOpen] = useState<boolean>(() =>{
      return localStorage.getItem('sidebarOpen') === 'true' ? true : false
    })
  return (
    <Context.Provider value={{open , setOpen}}>
      <SidebarProvider>
        <NavBar />
        <div className="min-h-screen w-full flex flex-row overflow-x-hidden ">
          <div className='fixed top-0 '>
            <AppSidebar />
          </div>
          <AppRouters />
        </div>
      </SidebarProvider>
    </Context.Provider>    
  )
}

export default App
