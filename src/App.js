import React, { Component } from 'react';
// import axios from 'axios';
import Header from "./Components/Header";
import Main from "./Components/Main";
// import Form from './Components/Form';
// import DisplayMuseumsList from './Components/DisplayMuseumsList';
// import DisplayMuseumDetails from './Components/DisplayMuseumDetails';
// import CityInfo from './Components/CityInfo';
// import scrollToElement from './Components/scrollToElement';
// import DisplayErrorMessage from './Components/DisplayErrorMessage';

class App extends Component {
  constructor () {
    super();

    this.state = {
      // userInput: '',
      // cityInfo: [],
      museumsData: [],
      museumDetails: [],
      isDesktop: false,
      hasError: false,
    }
  }

  // function for the second API request
  // updateMuseumsData = (lon, lat, key) => {
  //   axios({
  //     url: 'https://api.opentripmap.com/0.1/en/places/radius',
  //     method: 'GET',
  //     responseType: 'JSON',
  //     params: {
  //       radius: 100000,
  //       lon: lon,
  //       lat: lat,
  //       kinds: 'museums',
  //       rate: '3',
  //       format: 'json',
  //       limit: 10,
  //       apikey: key,
  //     }
  //   }).then( (response) => {
  //       const newMuseumsData = [];
  //       // push each data for the museums in the newMuseumsData array
  //       response.data.forEach( obj => {
  //         newMuseumsData.push(obj);
  //       });
  //       // update the museumsData state to newMuseumsData array
  //       this.setState({
  //         museumsData: newMuseumsData,
  //       });   
  //       // if device is desktop
  //       if (this.state.isDesktop) {
  //         // set the height of the .museumsList section to 100vh
  //         this.setContainerHeight('100vh');
  //       } else {
  //         this.setContainerHeight('initial');
  //       }
  //       // scroll to #listContainer when museumsData is present
  //       if (this.state.museumsData) {
  //         scrollToElement('listContainer');
  //       }
  //   }).catch( error => {
  //       // if error exists update hasError state to true
  //       if (error) {
  //         this.setState({
  //           hasError: true,
  //         });
  //       }
  //   });
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

  // componentDidMount() {
  //   // add event listener for window resize
  //   window.addEventListener('resize', this.handleWindowResize);
  //   const screenWidth = window.innerWidth;
  //   // sets isDesktop state to true if screen size is >= 940px
  //   this.setState({
  //     isDesktop: screenWidth >= 940,
  //   });
  // }

  // componentWillUnmount() {
  //   // remove event listener for window resize
  //   window.removeEventListener('resize', this.handleWindowResize);
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
          
        {/* <section className='museumsList wrapper' id='listContainer'>
          {
            // if the museumsData state has data display CityInfo component
            this.state.museumsData.length > 0
            ? <CityInfo city={this.state.cityInfo[0]} country={this.state.cityInfo[1]} /> : null
          }
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