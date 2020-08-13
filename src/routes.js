import React from 'react'
import Home from './pages/home/index'
import History from './pages/History/index'
import CreatPost from './pages/CreatePost/index'
import Photos from './pages/photos/index'
import {Route, BrowserRouter} from 'react-router-dom'

const Routes=()=>{
    return(
        <BrowserRouter>
            <Route component={Home} path='/' exact />
             <Route component={CreatPost} path='/createPost' exact />
            <Route component={Photos} path='/photos' exact /> 
            <Route component={History} path='/historia' exact />
        </BrowserRouter>
    )
}

export default Routes