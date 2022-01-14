import React, { Component } from 'react';

//Layout
import HomeLayout from "../layouts/Homepage.layout";
import {Route} from "react-router-dom";

function HomeLayoutHoc({component:Component, ...rest}) {
    return (
        <>
           
                <Route
                    {...rest}
                    component={(props)=>(
                        <HomeLayout>
                            <Component {...props}/>
                            {/* this is to add children componens */}
                        </HomeLayout>
                    )}
                    />
    
        </>
    );
}

export default HomeLayoutHoc;
