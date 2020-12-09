import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Categories.sass';

function Categories() {
    const categories = useSelector((state) => state.categories.items);

    return (
        <div className="categories">
            {categories && categories.map(({ id, img, name, descr, url }) => {
                return (
                    <Link key={id} className="categories_item" to={'/shop/categories/' + id}>
                        <img src={process.env.PUBLIC_URL + img} alt="pic" className="categories_item-img" />
                        <div className="categories_item-title">{name}</div>
                        <div className="categories_item-text">{descr}</div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Categories;