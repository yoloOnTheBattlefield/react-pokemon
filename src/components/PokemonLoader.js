import React from 'react';
import { Loader} from 'semantic-ui-react';

const PokemonLoader = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Loader
        active
        inline='centered'
        content='Loading pokemons'
        size='large'
      />
    </div>
  )
}

export default PokemonLoader;
