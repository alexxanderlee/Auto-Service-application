import './Catalog.sass';

import { CatalogItem } from '../../components';
import { tirePng, diskPng, accessoriesPng, oilPng, cosmeticsPng, toolsPng } from '../../assets/images';
import { searchSvg } from '../../assets/icons';

const items = [
    {
        id: 1,
        img: tirePng,
        alt: '',
        title: 'Шины',
        text: 'Ключевой элемент, гарантирующий безопасность и комфорт езды.'
    },
    {
        id: 2,
        img: diskPng,
        alt: '',
        title: 'Диски',
        text: 'Литые и  кованные диски, а также штамповки.'
    },
    {
        id: 3,
        img: oilPng,
        alt: '',
        title: 'Масла',
        text: 'Моторное и трансмиссное масла, а также технические жидкости.'
    },
    {
        id: 4,
        img: cosmeticsPng,
        alt: '',
        title: 'Автохимия и косметика',
        text: 'Для ремонта, для салона, для кузова и стекол.'
    },
    {
        id: 5,
        img: accessoriesPng,
        alt: '',
        title: 'Принадлежности для автомобиля',
        text: 'Автолампы, подшипники, ремни и многое другое.'
    },
    {
        id: 6,
        img: toolsPng,
        alt: '',
        title: 'Инструменты',
        text: 'Оборудование для автосервиса и гаража.'
    }
];

function Catalog() {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <h2 className="title">Каталог автозапчастей</h2>
                    <form class="search">
                        <input type="text" className="search_input" placeholder="Поиск" />
                        <button type="submit" className="search_button"><img src={searchSvg} alt="" /></button>
                    </form>
                    <div className="catalog_items">
                        {items.map((item) => <CatalogItem item={item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;