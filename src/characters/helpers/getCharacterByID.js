import { characters } from '../data/characters';

export const getCharacterByID = ( id ) => {

 return characters.find ( character => character.id === id );
}

