import { useState, useEffect } from "react";
import React from "react";
import "../styles/filmsList.css";
import FilmCard from "../components/filmCard";
import axios from 'axios'

export default function FilmsList() {
  const [filmList, setFilm] = useState([]);

  //USING Axios

  const url = 'http://omdbapi.com/?s=marvel&apikey=339b64b7'

  const getAllFilms = async () => {
    await axios.get(url)
    .then ((response) => {
      console.log(response.data.Search)
      const allFilm = response.data.Search
      setFilm(allFilm)
    })
  }

  //Method using Fetch
  // 1ST api : Rapid API
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "6ff9be19b5msh5a334f57d8fede9p116cb8jsn56e3044403f7",
  //     "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  //   },
  // };

  // useEffect(() => {
  //   fetch(
  //     "https://online-movie-database.p.rapidapi.com/title/find?q=the%20hunger%20games",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setFilm(response.results))

  //     .catch((err) => console.error(err));
  // }, [filmList]);

  // 2nd API : OmdbAPI

  // const getMovieRequest = async () => {
  //   const url = "http://omdbapi.com/?s=marvel&apikey=339b64b7";
  //   const response = await fetch(url);
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  //   setFilm(responseJson.Search);
  // };

  useEffect(() => {
    getAllFilms();
  }, []);

  
  return (
    <div className="cardsContainer">
      {filmList.map((film, index) => {
        return (
          <FilmCard
            key={index}
            link={film.Poster}
            title={film.Title}
            desc="In the fictitious city of Kaza, a warrior tribe is imprisoned, enslaved & tortured by a ruthless authoritarian Shudh Singh. Shamshera is the a legend for his tribe who relentlessly fights fo"
            overTitle="Overview :"
            overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
          />
        );
      })}
    </div>
  );
}
