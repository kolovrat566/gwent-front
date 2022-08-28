import React from 'react'
import Card from '../Card';

import styles from './Hand.module.scss';

interface IProps {
  cards: any[],
  game: any
}

function Hand({ cards, game }: IProps) {
 console.log(1);
     
  return (
    <div className={styles.hand}>
      {cards.map(item => (
        <Card cardParams={item} game={game}/>
      ))}
    </div>
  )
}

export default Hand;
