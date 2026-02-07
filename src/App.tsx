import './App.css'
import NavBar from './components/Nav/NavBar'
import AppRouters from './router/AppRouters'

function App() {

  return (
    <div className="min-h-screen w-full ">
      <NavBar />
      <AppRouters />
    </div>
  )
}

export default App