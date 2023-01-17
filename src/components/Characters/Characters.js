import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            image:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        }
    ]
    return (
        <div>
            {
                characters.map(character=><Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export {Characters};
