import './Search.sass';

import { searchSvg } from '../../assets/icons';
import {Link} from "react-router-dom";
import React,{Component} from "react";
import {connect} from "react-redux";





class Search extends Component {


    findProducts (){
        this.props.onFindProducts(this.searchInput.value)
    }

    render(){
        console.log(this.props.products)
        return (
            <form className="search">
                <Link className="search_item" to={'/shop/categories/'}>
                    <input type="text" className="search_input" placeholder="Поиск по товарам"
                           ref={(input) => {this.searchInput = input}}
                           onChange={this.findProducts.bind(this)}/>
                </Link>
                <button type="submit" className="search_button"><img src={searchSvg} alt="" /></button>
            </form>
        );
    }



}

export default connect(
    state => ({
        products: state.products
    }),
    dispatch => ({
        onFindProducts: (name) => {
            dispatch({type: 'FIND_PRODUCTS',payload: name})
        }
    })
) (Search);