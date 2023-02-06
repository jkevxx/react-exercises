import { useEffect, useState } from "react";
import { getCharacters, getCharacterById } from "./api/character";

const ApiRickAndMorty = () => {
  const [character, setCharacter] = useState({});
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    //getCharacters().then(setCharacters); // 1st way

    // 2nd way
    getCharacters().then((data) => {
      setCharacters(data);
    });

    // getCharacters().then((data) => {
    //   setCharacters(data.results);
    // });

    return () => {};
  }, []);

  // console.log(character?.results);
  console.log(characters);

  const showInformation = (id) => {
    // console.log(id);
    getCharacterById(id).then((data) => {
      setCharacter(data);
    });
  };

  return (
    <>
      {/* {
        <ul>
          {characters?.map((item) => (
            <li key={item.id} onClick={() => showInformation(item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      } */}
      {
        <ul>
          {characters?.results?.map(
            (
              item // 1st way
            ) => (
              <li key={item.id} onClick={() => showInformation(item.id)}>
                {item.name}
              </li>
            )
          )}
        </ul>
      }
      {character && (
        <div>
          <p>{character.name}</p>
          <p>{character.status}</p>
          <img src={character.image} alt=""></img>
        </div>
      )}
    </>
  );
};

export default ApiRickAndMorty;

/*
source: https://youtu.be/2Lmz87uYBsw
 */
