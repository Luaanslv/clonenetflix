import React, { useEffect, useState } from "react";
import './App.css';
import MovieRow from './components/MovieRow'
import Tmdb from "./Tmdb";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blaHeader, setBlaHeader] = useState(false);

  useEffect(() => { 
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando um filme em destaque
      let originals = list.filter(i=> i.slug === 'Originals');
      const randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlaHeader(true);
      } else {
        setBlaHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  return (
    <div className="page">

      <Header bla={blaHeader}/>
      
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
       }
      
      <section className="lists">
        {movieList.map((item,key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Feito por Luan.
        <br/>Direitos de imagens para Netflix.<br/>
        Dados pegos do site Themoviedb.org.
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading" />
        </div>
      }
    </div>
  );
}