import './CatalogItem.sass';

function CatalogItem({ item }) {
    const { id, img, alt, title, text } = item;

    return (
        <div key={id} className="catalog_item">
            <img src={img} alt={alt} className="catalog_item-img" />
            <div className="catalog_item-title">{title}</div>
            <div className="catalog_item-text">{text}</div>
        </div>
    );
}

export default CatalogItem;