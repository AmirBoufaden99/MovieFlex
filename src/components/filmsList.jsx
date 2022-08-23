import { useState, useEffect } from "react";
import React from "react";
import "../styles/filmsList.css";
import FilmCard from "../components/filmCard";

export default function FilmsList() {
  const [filmList, setFilm] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6ff9be19b5msh5a334f57d8fede9p116cb8jsn56e3044403f7",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://online-movie-database.p.rapidapi.com/title/find?q=the%20hunger%20games",
      options
    )
      .then((response) => response.json())
      .then((response) => setFilm(response.results))

      .catch((err) => console.error(err));
  }, [filmList]);

  return (
    <div className="cardsContainer">
      {filmList.map((film, index) => {
        return (
          <FilmCard
            key={index}
            link={film.image && film.image.url }
            title={film.title}
            desc="In the fictitious city of Kaza, a warrior tribe is imprisoned, enslaved & tortured by a ruthless authoritarian Shudh Singh. Shamshera is the a legend for his tribe who relentlessly fights fo"
            overTitle="Overview :"
            overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
          />
        );
      })}

      {/* <Card
        link="https://allmoviesflix.com/wp-content/uploads/2022/08/House-of-the-dragon-season-1-200x300.jpg"
        title="House of Dragons"
        desc="The story of the House Targaryen set 200 years before the events of Game of Thrones (2011)."
        overTitle="Overview :"
        overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria.“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
      />
      <Card
        link="https://allmoviesflix.com/wp-content/uploads/2022/07/ShamShera-2022-Hindi-HDRip-Full-Movie-200x300.jpg"
        title="Shamshera"
        desc="In the fictitious city of Kaza, a warrior tribe is imprisoned, enslaved & tortured by a ruthless authoritarian Shudh Singh. Shamshera is the a legend for his tribe who relentlessly fights fo"
        overTitle="Overview :"
        overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
      />
      <Card
        link="https://allmoviesflix.com/wp-content/uploads/2022/08/She-Hulk-season-1-200x300.jpeg"
        title="She Hulk"
        desc="Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk."
        overTitle="Overview :"
        overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
      />
      <Card
        link="https://allmoviesflix.com/wp-content/uploads/2022/08/She-Hulk-season-1-200x300.jpeg"
        title="She Hulk"
        desc="Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk."
        overTitle="Overview :"
        overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
      />
      <Card
        link="https://allmoviesflix.com/wp-content/uploads/2022/08/She-Hulk-season-1-200x300.jpeg"
        title="She Hulk"
        desc="Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered Hulk."
        overTitle="Overview :"
        overDesc="“House of The Dragon Season 1 in Hindi” – The Series Is A Prequel To HBO’s Record-Breaking Juggernaut “Game Of Thrones” (2011–2019) And Is Based On George R. R. Martin’s 2018 Novel “Fire & Blood”. Set 200 Years Before The Events Of ‘Game Of Thrones’, The Series Chronicles The Rise And The Downfall Of The Targaryens, Who Are The Only Family Of Dragonlords To Survive The Doom Of Valyria."
      /> */}
    </div>
  );
}
