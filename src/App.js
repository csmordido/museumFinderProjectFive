import React, { Component } from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";

class App extends Component {
  // constructor () {
  //   super();

    // this.state = {
      // userInput: '',
      // cityInfo: [],
      // museumsData: [],
      // museumDetails: [],
      // isDesktop: false,
      // hasError: false,
  //   }
  // }

  // function passed to the DisplayMuseumsList component to update the museumDetails state
  // updateMuseumDetails = (newData) => {
  //   this.setState({
  //     museumDetails: newData,
  //   });
  // }

  // // function passed as props to DisplayErrorMessage to update the hasError state
  // updateHasError = (value) => {
  //   this.setState({
  //     hasError: value,
  //   });
  // }

  render() {
    return (
      <>
        <Header />
        <Main />
          
        {/*
        {
          // map over the museumsDetails array and pass the data to the DisplayMuseumDetails component
          this.state.museumDetails.map( obj => {
            return (
              <DisplayMuseumDetails 
                key={obj.xid}
                imgDetail={obj.preview.source}
                nameDetail={obj.name}
                addressDetail={obj.address}
                urlDetail={obj.url}
                infoDetail={obj.wikipedia_extracts.text}
              />
            )
          })
        }
        {
          this.state.hasError
          ? <DisplayErrorMessage updateErrorState={this.updateHasError} />
          : null
        } */}
      </>
    );
  }
}

export default App;