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

  // // function to set the #listContainer's height
  // setContainerHeight = (heightValue) => {
  //   document.getElementById('listContainer').style.height = heightValue;
  // }

  // // function to execute when window is resized
  // handleWindowResize = () => {
  //   // sets isDesktop state to true if screen size is >= 940px
  //   this.setState({
  //     isDesktop: window.innerWidth >= 940,
  //   });
  //   // if device is desktop and API request has no error
  //   if (this.state.isDesktop && this.state.museumsData.length > 0) {
  //     // set the height of the .museumsList section to 100vh
  //     this.setContainerHeight('100vh');
  //   } else {
  //     this.setContainerHeight('initial');
  //   }
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
          <ul>
            {
              // map the museumsData array and pass the object properties to the DisplayMuseumsList component
              this.state.museumsData.map( obj => {
                return (
                  <DisplayMuseumsList 
                    key={obj.xid}
                    museumName={obj.name} 
                    museumXid={obj.xid}
                    onDataUpdate={this.updateMuseumDetails}
                  />
                )
              })
            }
          </ul>
        </section>
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