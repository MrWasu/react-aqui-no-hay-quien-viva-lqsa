import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; 
import { useForm } from '../hooks/useForm';
import { CharacterCard } from '../components/CharacterCard';
import { getCharacterByName } from '../helpers/getCharacterByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation(); 

  const { q = '' } = queryString.parse( location.search );
  const characters = getCharacterByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && characters.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1 className='my-5'>Search</h1> 
      <hr />

      <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Busca un personaje"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Busqueda
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />
            
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Busca un personaje
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No existe un personaje con: <b>{ q }</b>
            </div>

            {
              characters.map( character => (
                <CharacterCard key={ character.id } {...character } />
              ))
            }

          </div>
      </div>
      
    </>
  )
}


