import React, {Component} from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
    state = {
        minLen: 5,
        str: []
    };

    inputChangeHandler = (event) => {
        this.setState({str: event.target.value.split("")});
    };

    onClickHandler = (event, index) => {
        const newString = [...this.state.str];
        newString.splice(index, 1);
        this.setState({str: newString});
    };

    printCharacters = () => {
        const strArr = [...this.state.str];
        return strArr.map((letter, index) => <CharComponent
            key={index}
            index={index}
            letter={letter}
            onClick={(event) => this.onClickHandler(event, index)}
        />)
    };

    render() {
        const characters = this.printCharacters();

        return (
            <div className="App">
                <input
                    type="text"
                    onChange={(event) => this.inputChangeHandler(event)}
                    value={this.state.str.join("")}
                />
                <p>Minimum Length: {this.state.minLen}</p>
                <p>Current Length: {this.state.str.length}</p>
                <ValidationComponent
                    minLen={this.state.minLen}
                    strLen={this.state.str.length}
                />
                {characters}
            </div>
        );
    }
}

export default App;
