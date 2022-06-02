import React, { Component } from 'react';
import CreateUser from '../CreateUser';
import GoogleAuth from './GoogleAuth';
import ProductComp from './ProductComp';
import Carousel from './subComp/Carousel';

class Home extends Component {
    render() {
        return (
            <>
             {/* <Carousel/>  */}
             {/* <ProductComp/> */}
             {/* <GoogleAuth/> */}
             <CreateUser/>
            </>
        );
    }
}

export default Home;