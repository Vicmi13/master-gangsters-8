import React, { Component } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

class ShowInfoCounter extends Component {
  state = {
    peopleArray: [],
    characterSeleted: 0,
  };

  componentDidMount() {
    console.log("this.props didMount", this.props);
    axios
      // regresa una promesa
      .get("https://swapi.dev/api/people")
      .then((resultados) => {
        console.log(resultados.data.results);
        this.setState({ peopleArray: resultados.data.results });
      })
      .catch((error) => console.log("error", error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counterProp !== this.props.counterProp) {
      console.log("this.props componentDidUpdate", this.props.counterProp);
      console.log("this.prevProps ", prevProps.counterProp);
    }
  }

  selectCharacter(index) {
    console.log("index", index);
    this.setState(
      { characterSeleted: index },
      console.log("this.state", this.state)
    );
  }

  render() {
    return (
      <>
        <div>Show counter pasado por props {this.props.counterProp}</div>
        <h3>Lista de personajes</h3>
        {this.state.peopleArray.length === 0 ? (
          <b>Cargando.... </b>
        ) : (
          <ul>
            {this.state.peopleArray.map((value, index) => (
              <li
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => this.selectCharacter(index + 1)}
              >
                {value.name}
              </li>
            ))}
          </ul>
        )}
        {this.state.characterSeleted !== 0 && (
          <CharacterCard id={this.state.characterSeleted} />
        )}
      </>
    );
  }
}

export default ShowInfoCounter;
