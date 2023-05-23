import './App.css';
import {getMovieList, searchMovie} from './api';
import { useEffect, useState } from 'react';
import star from './img/rate.png';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <h3 className="Movie-title">{movie.title}</h3>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="poster" className="Movie-image" />
          <p className="Movie-rate">
            <img src={star} alt="" className="Movie-rate-star"/> {movie.vote_average}
          </p>
          <p className="Movie-release">{movie.release_date}</p>
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length > 3) {
      const hasil = await searchMovie(q);
      setPopularMovies(hasil.results)
      console.log({hasil: hasil})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Header-logotext">Netplik</h1>
      </header>
      <section className="Movie">
        <div className="Movie-wrap">
          <h1 className="Movie-heading">Pura2 Nye Netplik</h1> 
          <p className='Movie-text'>Senggol Dong gess,.... tapi minta tolong jangan keseringan pake searching yagesyak, kasian API gua</p>
        </div>
          <input 
            className="Movie-search" 
            placeholder="Infonya Masse ?"
            onChange={({target}) => search(target.value)}
            />
          <div className="Movie-container">
            <PopularMovieList />
          </div>
      </section>
    </div>
  );
}

export default App;
