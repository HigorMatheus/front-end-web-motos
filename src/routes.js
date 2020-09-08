import React from 'react'
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'
import Home from './pages/home/index'
import History from './pages/History/index'
import CreatPost from './pages/CreatePost/index'
import Photos from './pages/photos/index'
import Photo from './pages/photo/index'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import{ isAuthenticated} from './services/auth'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );


const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
              
                <Route component={Home} path='/' exact />
                <PrivateRoute component={CreatPost} path='/createPost' exact />
                <Route component={Photos} path='/photos' exact /> 
                <Route component={Photo} path='/photos/:id' exact /> 
                <Route component={History} path='/historia' exact />
                <Route component={SignIn} path='/login' exact />
                <Route component={SignUp} path='/cadastro' exact />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes