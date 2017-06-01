import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import _ from 'lodash';

import ActivePokemon from './components/ActivePokemon';
import PokemonList from './components/PokemonList';
import PokemonLoader from './components/PokemonLoader';

import { create } from 'apisauce';
import './index.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      activePokemon: undefined
    }

  }

  getPokemons(number){
    const api = create({
      baseURL: 'http://pokeapi.co/api/v2/'
    });
    const pokemonIds = [1,2,3,4,5,6,7,8,9,10];

    pokemonIds.forEach(pokemon => {
      api.get(`pokemon/${pokemon}`)
      .then(data => this.setState({
        pokemons: this.state.pokemons.concat(data.data)
      }))
    });
  }

  handleClick(pokemon){
    this.setState({
      activePokemon: pokemon
    });
  }


  componentDidMount(){
    this.getPokemons(10);
  }

  render() {
    const { activePokemon, pokemons } = this.state;

    if(!pokemons || pokemons.length < 5){
      return <PokemonLoader />
    }

    return (
      <Container className="App">
        <Header as='h2' textAlign='center'>
          {activePokemon ? `Active Pokemon Is ${_.capitalize(activePokemon.name)}` : 'Select a pokemon to start' }
        </Header>
        <Grid.Row>
          <Grid.Column width={4}>
            <PokemonList
              pokemons={pokemons}
              handleClick={(item) => this.handleClick(item)}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <ActivePokemon pokemon={activePokemon} />
          </Grid.Column>
        </Grid.Row>
      </Container>
    );
  }
}

export default App;
