import React from 'react';
import { useDrag, useDrop } from 'react-dnd'

import styles from './PlayingField.module.scss';

interface IProps {
  property: {
    type: string,
    value: string,
  }
  addCard: any,
}

function PlayingField({ property, addCard, onDrop }: any) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'card',
      canDrop: () => true,
      drop: onDrop,
      collect: (monitor) => {
        return ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    },
    }),
    [],
  );  
  
  return (
    <div
      ref={drop}
      role="Space"
      data-testid={`Field`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div className={styles.fieldContainer}>
        <div className={styles.specialField}>{property.value}</div>
        <div className={styles.mainField}></div>
      </div>
    </div>
  )
}

export default PlayingField;
