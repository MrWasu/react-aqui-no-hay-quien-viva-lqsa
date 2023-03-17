import { Link } from 'react-router-dom';

const ConvivientesbyCharacter = ({ alter_ego, convivientes }) => (alter_ego === convivientes) ? <></> : <p> {convivientes}</p>;

export const CharacterCard = ({ id, personaje, serie, alter_ego, actor_actriz, convivientes }) => {

    const characterImageUrl = `./public/assets/characters/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={characterImageUrl} className="card-img" alt={personaje} />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{personaje}</h5>
                            <p className="card-text">
                                <small className="text-muted">{actor_actriz}</small>
                            </p>
                           


                            <Link to={`/character/${id}`}>
                                Más..
                            </Link>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
