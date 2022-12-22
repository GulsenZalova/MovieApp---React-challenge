import { useEffect, useState } from 'react'
import Movie from './components/Movie'
import WishList from './components/WishList'
import './App.css'

function App() {
  const [showBasket,setShowBasket]=useState(false)
  const [movies,setMovies]=useState([])
  const [search,setSearch]=useState("fast")
  const [inputSearch,setİnputSearch]=useState("")
  const [wish,setWish]=useState([
    {
      movieTitle: "",
      img: "",
      year: "",
    },

  ])

  useEffect(()=>{
    load()
  },[search])


  const load=()=>{
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=678bc548`)
    .then(res=>res.json())
    .then(data=>setMovies(data.Search))
  }
  const searchingData=()=>{
    console.log(inputSearch)
      setSearch(inputSearch)
      
  }
  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
            <div className='searchArea'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
             type="text"
             onChange={(e)=>setİnputSearch(e.target.value.trim())}
             />
            <button type='submit' onClick={searchingData}>Search</button>
            </div>
            <div className='wishArea'>
              <button className='wishBtn' onClick={()=>setShowBasket(!showBasket)}>WishList <i className="fa-solid fa-heart"></i> <span>0</span></button>
            </div>
        </div>
      </header>
      <div className='container'>
            <div className='movies'>
                {
                    movies.map((movie) => (

                      <Movie id={movie.imdbID}  movie={movie} wish={wish} setWish={setWish}/>
                    ))
                }
            </div>
        </div>
      <WishList showBasket={showBasket} setShowBasket={setShowBasket} wish={wish} />
    </div>
  )
}

export default App
