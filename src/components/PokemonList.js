import React from 'react';
import _ from 'lodash'
import { List, Image } from 'semantic-ui-react';

const PokemonList = (props) => (
  <List>
    {
      props.pokemons.map((pokemon, index) => {
        return (
          <List.Item key={index} >
            <Image avatar src={pokemon.sprites.front_default}/>
            <List.Content>
              <List.Header
                as='a'
                onClick={() => props.handleClick(pokemon)}
              >
                {_.capitalize(pokemon.name)}
              </List.Header>
            </List.Content>
          </List.Item>
        )
      })
    }
  </List>
)

export default PokemonList;
