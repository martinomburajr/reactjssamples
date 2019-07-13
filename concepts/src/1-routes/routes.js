import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import HomeComponent from "../home/App"

const Routes = () => {
  const someVariable = true
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/nested">Nested Component</Link>
      <Link to="/props">Props Component</Link>
      
      <Switch>
        <Route path="/" exact component={HomeComponent}></Route>
        <Route path="/home" component={HomeComponent}></Route>
        <Route path="/test" component={TestComponent}></Route>
        <Route path="/nested" component={NestedComponent}></Route>
        <Route path="/props" render={props => <PropsComponent {...props} extra={someVariable} />} />
      </Switch> 
    </Router>
  )
}

const NestedComponent = ({match}) => {
  console.log(match)
  console.log("hello")
  return (
      <Router>
      <h1>This is a nested component</h1>
      <Link to={match.url + "/nest1"}>Nest 1</Link>
      <Link to={match.url + "/nest2"}>Nest 2</Link>
        <Route path= {match.url + "/nest1"} component={Nest1Component}></Route>
        <Route path={match.url + "/nest2"} component={Nest2Component}></Route>
      </Router>
  )
}

const Nest1Component = ({match}) =>  <h1>Nest1 Component</h1>

const Nest2Component = () => <h1>Nest2 Component</h1>

const TestComponent = ({match}) => {
  console.log(match)
  return (
    <h1>This is a test component</h1>
  )
}

const PropsComponent = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Here are the props: </h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default Routes