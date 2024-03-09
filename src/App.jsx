import {Navbar,Business,Hero,Testimonials,Payments} from './components/index.js'
import Paddinglayout from './components/Paddinglayout.jsx'
import './App.css'

function App() {

  return (
    <div className='max-w-[1280px] mx-auto overflow-hidden'>
        <Paddinglayout padding="p-5">
            <Navbar/>
            <Hero/>
            <Business/>
            <Payments/>
            <Testimonials/>
        </Paddinglayout>
    </div>
  )
}

export default App
