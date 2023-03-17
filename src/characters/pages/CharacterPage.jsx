import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getCharacterByID } from "../helpers/getCharacterByID";

export const CharacterPage = () => {

  const { id } = useParams();

  const character =  useMemo(() => getCharacterByID( id ), [ id ]);

  const navigate = useNavigate();
  
  const onNavigateBack = () => navigate(-1);

  if (!character) {
    <Navigate to='/marvel' />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`./public/assets/characters/${id}.jpg`}
          alt={character.personaje}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 mt-5">
        <h3>{character.personaje}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Serie: </b> {character.serie} </li>
          <li className="list-group-item"> <b>Actor/Actriz</b> {character.actor_actriz} </li>
          <li className="list-group-item"> <b>Alter ego:</b> {character.alter_ego} </li>
        </ul>

        <h5 className="mt-3"> Convivientes </h5>
        <p>{character.convivientes}</p>

        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Regresar
        </button>

      </div>

    </div>
  )
}


