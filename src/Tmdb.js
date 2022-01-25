/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-anonymous-default-export */
const API_KEY = '81b233a2ffd3f6f1c733339be17f9f0e';
const API_BASE = 'https://api.themoviedb.org/3';

/* 
-originais da netflix
-recomendados (trending)
-em alta (top reated)
-ação
-comédia
-terror
-romance
-documentários
*/

const basicFecth = async (endpoint) => {
    return (await fetch(`${API_BASE}${endpoint}`)).json();
  };

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Originals',
                title: 'Originais da Netflix',
                items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'recomendado para você',
                items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'em alta',
                items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items:await basicFecth(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'comédia',
                items:await basicFecth(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'terror',
                items:await basicFecth(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items:await basicFecth(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items:await basicFecth(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
        if (movieId) {
            // eslint-disable-next-line default-case
            switch (type) {
                case 'movie':
                    info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
                case 'tv': ;
                    info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                    break;
            }
        }
        return info;
    },
}