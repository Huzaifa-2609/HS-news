import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=6;
  
  state={
    progress:0
  };
  setLoader= (load)=>{
    this.setState({
      progress:load,
    })
  }
  render() {
    return (
      <div>
        <Router>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar title={"HS-News"} />
        <Routes>
      <Route exact path="/science" element={<News key={"science"} setLoader={this.setLoader} pageSize={this.pageSize} category={"science"}/>}/>
      <Route exact path="/" element={<News key={"general"} setLoader={this.setLoader} pageSize={this.pageSize} category={"general"}/>}/>
      <Route exact path="/business" element={<News key={"business"}  setLoader={this.setLoader}pageSize={this.pageSize} category={"business"}/>}/>
      <Route exact path="/entertainment" element={<News key={"entertainment"} setLoader={this.setLoader} pageSize={this.pageSize} category={"entertainment"}/>}/>
      <Route exact path="/general" element={<News key={"general"} setLoader={this.setLoader} pageSize={this.pageSize} category={"general"}/>}/>
      <Route exact path="/health" element={<News key={"health"} setLoader={this.setLoader} pageSize={this.pageSize} category={"health"}/>}/>
      <Route exact path="/sports" element={<News key={"sports"} setLoader={this.setLoader} pageSize={this.pageSize} category={"sports"}/>}/>
      <Route exact path="/technology" element={<News key={"technology"} setLoader={this.setLoader} pageSize={this.pageSize} category={"technology"}/>}/>
      </Routes>
      </Router>
      </div>
    )
  }
}
