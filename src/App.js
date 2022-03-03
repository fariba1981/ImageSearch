import React from "react";
import './App.css'
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ImagesList from "./components/ImagesList";

class App extends React.Component {

  state = {
    data : {},
  }


  onSearchFormSubmit = async (value) => {
    let result = await axios.get("https://api.unsplash.com/search/photos",{
      headers : {
        Authorization: "Client-ID c7Cv8_cxMjYWB7gCcCH7LwUThYxdfYDSHNLrrBxzv9g"
      },
      params : {
        query : value,
        per_page : 25,
      }
    })
    this.setState ({
      data : result.data
    })
    console.log(result.data)
  }

  render () {
    return (
      <div className="App"> 
        <SearchForm onSearchFormSubmit={this.onSearchFormSubmit}/>
        <ImagesList data={this.state.data}/>
    </div>
    )
  }
}

export default App;