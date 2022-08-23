import React from 'react'
import Card from '../Card';

import styles from './Hand.module.scss';

interface IProps {
  cards: any[]
}

function Hand({ cards }: IProps) {
  return (
    <div className={styles.hand}>
      {cards.map(item => (
        <Card item={item}></Card>
      ))}
    </div>
  )
}

export default Hand;
