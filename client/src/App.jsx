import Footer from "./components/Footer"
import AddEmojisPage from "./pages/AddEmojisPage.jsx"
import Emojis from "./pages/Emojis"
import EmojisPage from "./pages/EmojisPage"
import { Route, Routes } from 'react-router-dom'





function App() {



  return (
    <>

      <Routes>
        {/* Layout wrapper */}
       
          <Route path="/" element={<EmojisPage />} />
          <Route path="add_emojims" element={<AddEmojisPage />} />
          <Route path="emojis" element={<Emojis/>} />
    
      </Routes>
      <Footer />
   </>
  )
}

export default App
