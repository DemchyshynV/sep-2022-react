const Character = ({character}) => {
    const {id, name, status, species, image} = character;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};
