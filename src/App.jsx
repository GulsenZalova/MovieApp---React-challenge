import { useEffect, useState } from 'react'
import Movie from './components/Movie'
import WishList from './components/WishList'
import './App.css'

function App() {
  const [showBasket,setShowBasket]=useState(false)
  const[isLoading,setİsloading]=useState(false)
  const [movies,setMovies]=useState([])
  const [search,setSearch]=useState("fast")
  const [inputSearch,setİnputSearch]=useState("")
  const [wish,setWish]=useState([])

  useEffect(()=>{
    load()
  },[search])


  const load=()=>{
    setİsloading(true)
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=678bc548`)
    .then(res=>res.json())
    .then(data=>{
      setMovies(data.Search)
      setİsloading(false)
    })
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
              <button className='wishBtn' onClick={()=>setShowBasket(!showBasket)}>WishList <i className="fa-solid fa-heart"></i> <span>{wish.length}</span></button>
            </div>
        </div>
      </header>
      <div className='container'>
      {
        isLoading ? (
          <div className="loader"></div>
        ):
        (
          <div className='movies'>
          {  movies&&(
               movies.map((movie) => (

                <Movie id={movie.imdbID}  movie={movie} wish={wish} setWish={setWish}/>
              ))
          ) ||(
            <div className='error'><h1>Data Not Found</h1></div>
          )
             
          }
      </div>
        )
      }

        </div>
       {
        showBasket &&(
          <WishList showBasket={showBasket} setShowBasket={setShowBasket} wish={wish} setWish={setWish}/>
        )
       }
    </div>
  )
}

export default App
