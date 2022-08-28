import React from 'react';
import cx from 'classnames';
import { useDrop } from 'react-dnd';

import Cards from '../Card'

import styles from './PlayingField.module.scss';

interface IProps {
  property: {
    type: string,
    value: string,
  }
  addCard: any,
}

const handleCanDrop = (hand: any, property: any, item: any) => {
  console.log(hand, property, item);
   
  return (
    (hand.includes(item.cardParams.id)) &&
    (property.type === item.cardParams.side) &&
    (property.value === item.cardParams.position)
  )
}

function PlayingField({ property, addCard, game, fieldIdx }: any) {
  const hand = game.hand.map((item: any) => item.id)
  const [ { canDrop }, drop] = useDrop(
    () => ({
      accept: 'card',
      canDrop: (item) => handleCanDrop(hand, property, item),
      drop: (item: any) => {
        addCard(item, property)        
      },
      collect: (monitor) => {        
        return ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    },
    }),
    [game],
  );

  console.log(game.fields);
  
  
  return (
    <div
      ref={drop}
      data-testid={`${property.type}, ${property.value}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div className={styles.fieldContainer}>
        <div className={styles.specialField}>{property.value}</div>
        <div className={cx(styles.mainField, { [styles.isCanDrop]: canDrop } )}>
          {game.fields[fieldIdx].cards.map((item: any) => (
            <Cards cardParams={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlayingField;
