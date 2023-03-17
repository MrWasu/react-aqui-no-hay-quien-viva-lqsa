import { characters } from '../data/characters';

export const getCharactersByPublisher = ( serie ) =>{

    const validSeries = ['Aqui no hay quien viva','La que se avecina'];
    if ( !validSeries.includes( serie ) ) {
        throw new Error(`${ serie } is not a valid serie`);
    }

    return characters.filter( character => character.serie === serie );
}