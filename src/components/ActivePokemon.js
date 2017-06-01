import React from 'react';
import _  from 'lodash';
import { Image } from 'semantic-ui-react';

class ActivePokemon extends React.Component {
  render(){
    if(!this.props.pokemon){
      return <div></div>
    }
    const { name, sprites, abilities } = this.props.pokemon;
    return (
      <div>
        {name}
        {Object.keys(sprites).map((sprite, index) => {
          if(sprites){
            return <Image src={sprites[sprite]} key={index}/>
          }
        })}
        <ul>
          {abilities.map((ability, index) => {
            return (
              <li key={index}>{ability.ability.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }

}

export default ActivePokemon;
