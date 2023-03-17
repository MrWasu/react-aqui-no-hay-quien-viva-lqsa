import React, { useMemo } from 'react'
import { getCharactersByPublisher } from '../helpers/getCharactersByPublisher'
import { CharacterCard } from './CharacterCard'

export const CharacterList = ({ serie }) => {

    const characters = useMemo(() => getCharactersByPublisher( serie ), [ serie ])

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                characters.map(character =>
                    <li key={character.id}>
                        <CharacterCard key={ character.id } { ...character } />
                    </li>)
            }

        </div>
    )
}


