import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AqnhqvPage, LqsaPage, SearchPage, CharacterPage} from '../pages/index';


const CharactersRoutes = () => {

    return (
        <>
            <Navbar />

            <div className='container'>

                <Routes>

                    <Route path="lqsa" element={<LqsaPage />} />
                    <Route path="aqnhqv" element={<AqnhqvPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="character/:id" element={<CharacterPage />} />

                    <Route path="/" element={<Navigate to="/aqnhqv" />} />

                </Routes>
            </div>

        </>

    )
}

export default CharactersRoutes;
