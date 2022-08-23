import React, { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

import Hand from '../../components/Hand';
import PlayingField from '../../components/PlayingField';

const feilds = [
  {
    type: 'enemy',
    value: 'siege'
  },
  {
    type: 'enemy',
    value: 'range'
  },
  {
    type: 'enemy',
    value: 'melee'
  },
  {
    type: 'ally',
    value: 'melee'
  },
  {
    type: 'ally',
    value: 'range'
  },
  {
    type: 'ally',
    value: 'siege'
  },
];

function GameTable() {
  const [cards, setCards] = useState<any>([])
  // console.log(cards);

  const addCard = (item: any, q :any, property: any) => {
    console.log(item, q, property);
    
    setCards((state: any) => [...state, 1])
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
      const { name } = item
      console.log(item);
      
      // setDroppedBoxNames(
      //   update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      // )
      // setDustbins(
      //   update(dustbins, {
      //     [index]: {
      //       lastDroppedItem: {
      //         $set: item,
      //       },
      //     },
      //   }),
      // )
    },
    [],
  )
  
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        {feilds.map((item, idx) => (
          <PlayingField
            property={item}
            addCard={addCard}
            onDrop={(item: any) => handleDrop(idx, item)}
          />
        ))}
        <Hand cards={[1,2,3,4,5]} />
      </DndProvider>
    </div>
  )
}

export default GameTable;
