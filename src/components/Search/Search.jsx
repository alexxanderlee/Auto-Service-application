import './Search.sass';

import { searchSvg } from '../../assets/icons';
import {Link} from "react-router-dom";
import React,{Component} from "react";





class Search extends Component {


    handleChange = () =>  {

    }

    render(){
        return (
            <form className="search">
                <Link className="search_item" to={'/shop/categories/'}>
                    <input type="text" className="search_input" placeholder="Поиск по товарам"  onChange={this.handleChange}/>
                </Link>
                <button type="submit" className="search_button"><img src={searchSvg} alt="" /></button>
            </form>
        );
    }



}

export default Search;