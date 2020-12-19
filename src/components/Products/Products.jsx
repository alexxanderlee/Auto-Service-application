import { Link } from 'react-router-dom';

import React from 'react';
import './Products.sass';
import {connect} from "react-redux";
import {withRouter} from "react-router";



function Products(props){

    const {categoryId} = props.match.params;

    const products =
        (categoryId!=null)?
        props.products.filter(product => Number(product.categoryId) === Number(categoryId)):
        props.products



    return (
        <div className="products">
            {products && products.map(({ id, categoryId, name, price, img }) => {
                return (
                    <Link key={id} className="products_item" to={'/shop/categories/' + categoryId + '/products/' + id}>
                        <img src={process.env.PUBLIC_URL + img} alt="pic" className="products_item-img" />
                        <div className="products_item-name">{name}</div>
                        <div className="products_item-price">от {price} р.</div>
                    </Link>
                );
            })}
        </div>
    );


}


let urlData = withRouter(Products);
export default connect(
    state => ({
        products :  state.products.items.filter(product => product.name.toLowerCase().includes(state.filterProducts.toLowerCase()))

    }),
    urlData
)(Products);