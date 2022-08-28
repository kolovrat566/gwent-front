import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

import Hand from '../../components/Hand';
import PlayingField from '../../components/PlayingField';
import { fields, createField } from '../../helper';

function GameTable() {
  const [game, setGame] = useState(createField());
  const addCard = (item: any,  property: any) => {
    setGame((game: any) => ({
      fields: [...game.fields.map((element: any, index: number) => (
        property.type === element.type && property.value === element.value ?
          { ...element, cards: [...game.fields[index].cards, item.cardParams]} :
          element
        )
      )
    ],
      hand: game.hand.filter((element: any) => {
        return element.id !== item.cardParams.id
      }),
    }))    
  }

  // console.log(game);
  
  
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {fields.map((item, idx) => (
          <PlayingField
            property={item}
            addCard={addCard}
            hand={game.hand}
            game={game}
            fieldIdx={idx}
          />
        ))}
        <Hand cards={game.hand} game={game}/>
      </DndProvider>
    </div>
  )
}

export default GameTable;
