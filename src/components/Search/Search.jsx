import './Search.sass';

import { searchSvg } from '../../assets/icons';

function Search() {
    return (
        <form className="search">
            <input type="text" className="search_input" placeholder="Поиск по товарам" />
            <button type="submit" className="search_button"><img src={searchSvg} alt="" /></button>
        </form>
    );
}

export default Search;