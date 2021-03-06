import React from'react';
import classNames from'classnames';
import { getVideoSearch } from'../actions';
import { connect } from'react-redux';
import '../styles/Search.css';


const Search = (props) => {

    const { isHome, getVideoSearch } = props;

    const inputStyle = classNames('input', {
        isHome
    });

    const handleInput = (event) => {
        getVideoSearch(event.target.value);       
    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>

            <input 
                className={inputStyle} 
                type="text" 
                placeholder="Buscar..."
                onKeyUp={handleInput}
            />

        </section>
    )
};

const mapStateToProps = state => {
    return {
        searchResult: state.searchResult,
    }
}

const mapDispatchToProps = {
    getVideoSearch,
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
