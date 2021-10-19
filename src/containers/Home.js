import React, { useState, useEffect} from 'react';
import {connect} from "react-redux"; 
import Header from  "../components/Header";
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../custom_hooks/useInitialState';
import "../styles/Home.css";
import "../styles/Header.css";
import "../styles/Search.css";
import "../styles/Categories.css";
import "../styles/Carousel.css";
import "../styles/CarouselItem.css";
import "../styles/media.css";


const Home =({myList, trends, originals, searchResult}) => {
    
    return  (
        <>
            <Header />
            <Search isHome />
            
            { 
                Object.keys(searchResult).length > 0 && 
                    (
                        <Categories title="Resultados de la busqueda...">
                            <Carousel>
                                {searchResult.map(item =>
                                    <CarouselItem 
                                    key={item.id} 
                                    {...item}
                                    />
                                )}
                            </Carousel>
                        </Categories>
                    )                        
            }

            {myList?.length> 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {myList?.map(item =>
                        <CarouselItem 
                        key={item.id} 
                        {...item} 
                        isList 
                        />
                    )}
                        
                    </Carousel>
                </Categories>
            }
            
            <Categories title="Tendencias">
                <Carousel>
                    {trends?.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                    
                </Carousel>
            </Categories>

            <Categories title="Orginales de Platzi Video">
                <Carousel>
                    {originals?.map(item =>
                        <CarouselItem key={item.id} {...item} />
                        )}
                    <CarouselItem />
                    
                </Carousel>
            </Categories>

        </>
    )
    
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        searchResult: state.searchResult,
    };
};

export default connect (mapStateToProps, null) (Home);