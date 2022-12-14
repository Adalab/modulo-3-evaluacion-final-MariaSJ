import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
    return (
         <li className="card"> 
            <Link className="card__link" to={`/character/${props.character.id}`}>
                <span className={props.character.status === "Alive" ? "green" : props.character.status === "Dead" ? "red" : "blue"}>{props.character.status}</span>
                <img className="card__img" src={props.character.image} alt={`Foto de ${props.character.name}`} title= {`Foto de ${props.character.name}`}></img>
                <h3 className="card__name">{props.character.name}</h3>
                <p className="card__species">{props.character.species}</p>
            </Link>
        </li>
    );
}

export default CharacterCard;