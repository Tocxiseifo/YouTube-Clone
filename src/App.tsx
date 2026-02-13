// import { useState } from 'react'
import './App.css'
import NavBar from './components/Nav/NavBar'
import { Context } from './Context/Context'
import AppRouters from './router/AppRouters'
import { SidebarProvider } from "@/components/ui/sidebar"

function App() {
    // const [open , setOpen] = useState<boolean>(() =>{
    //   return localStorage.getItem('sidebarOpen') === 'true' ? true : false
    // })
  return (
    <Context.Provider value={{title: "YouTube Clone"}}>
      <SidebarProvider>
        <NavBar />
        <div className="min-h-screen w-full flex flex-row overflow-x-hidden ">
          <AppRouters />
        </div>
      </SidebarProvider>
    </Context.Provider>    
  )
}

export default App
