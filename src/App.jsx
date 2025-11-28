import './App.css'
import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'
import ProductionHouse from './components/ProductionHouse.jsx'
import GenreMovieList from './components/GenreMovieList.jsx'
function App() {

  return (
    <div className="">
      <Header />
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
