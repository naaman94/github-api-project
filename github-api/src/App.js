import React from 'react';
import SearchResults from './components/SearchResults';
import Navbar from './components/Navbar';
import axios from 'axios';

class App extends React.Component {
  state = {
    items: [],
    status: "Input the Username for Github"
  }

  result = (search) => {
    axios.get(`http://api.github.com/users/${search}/repos`)
      .then(response => {
        this.setState({ items: response.data, status: "" })

      })
      .catch(error => {
        console.log("eroooor", error)
        this.setState({ items: [], status: "User name is not found" })
      })
    console.log('this.state.items', this.state.status);
    // this.state.items.message ? this.setState({ status: "no data" }) : this.setState({ status: "there is no data" })
  }

  reload = () => {
    window.location.reload();
  }

  render() {
    const { reload, result } = this
    const { items } = this.state
    return (
      <>
        <Navbar reload={reload} result={result} />
        <br></br>
        <SearchResults items={items} />
        <h1 align="center" >{this.state.status}</h1>
      </>
    );
  }
}

export default App;


