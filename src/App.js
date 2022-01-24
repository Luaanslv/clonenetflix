import React, {useEffect, useState} from "react";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";
import './App.css';
import FeaturedMovie from "./components/FeaturedMovie";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => { 
    const LoadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    LoadAll();
  }, []);
  return (
    <div className="page">
      
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
       }
      
      <section className="lists">
        {movieList.map((item,key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
    </section>
    </div>
  );
}