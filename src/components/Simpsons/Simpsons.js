import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name:'Homer',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id:2,
            name:'Marge',
            surname:'Simpson',
            image:'https://citaty.info/files/characters/760.png'
        },
        {
            id:3,
            name:'Bart',
            surname:'Simpson',
            image:'https://klike.net/uploads/posts/2021-08/1628055381_1.jpg'
        },

    ]
    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};
