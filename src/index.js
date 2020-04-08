import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './Spinner';

//Functional component start
    //const App = () => {
        // Getting current user location
            // window.navigator.geolocation.getCurrentPosition(
            //     position => console.log(position),
            //     err => console.log(err)
            // )

            // As the call happens to geolocation service it takes little time to provide the response, 
            // till then the compiler would have moved to return JSX but it would have nothing to render, 
            // hence functional components can't do anything as it doesn't have anything to share with the user.
            // So we move to class based components 
            // We don't have any way to say functional component of pause its rendering or re-rendering automatically

    //     return (
    //         <div>Latitude: </div>
    //     )
    // }
//Functional component end


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { latitude: null, errorMessage: '' };
        //We can keep the below code in constructor but for better practice keeping it in compoenentDidMount() lifecycle method
        // window.navigator.geolocation.getCurrentPosition(
        //     position => {
        //         this.setState({ latitude: position.coords.latitude });
        //     },
        //     err => {
        //         this.setState({ errorMessage: err.message });
        //     }
        // )
        
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }
    //helper method
    renderContent() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
            }
            if(!this.state.errorMessage && this.state.latitude) {
                // Passing state as props to SeasonsDisplay component
            return <SeasonsDisplay latitude = {this.state.latitude} />
            }
        return <Spinner message = "Please accept the location request"/>
    }
    render() {
        return (
            <div className = "border red">
                {this.renderContent()}
            </div>   
        )
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));