import type { CSSProperties } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'

const knightStyle: CSSProperties = {
  fontSize: 14,
  fontWeight: 'bold',
  cursor: 'move',
  width: '100px',
  height: '100px',
  border: '1px solid black',
  flexDirection: 'column',
}

const Card = ({ cardParams, game }: any) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'card',
      item: {cardParams},
      collect: (monitor) => {        
        return ({
          isDragging: !!monitor.isDragging(),
        })
      },
    }),
    [game],
  )  

  return (
    <>
      <DragPreviewImage connect={preview} src={''} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          display: isDragging ? 'none' : 'flex',
        }}
      >
        <div>{cardParams.id}</div>
        <div>{cardParams.side}</div>
        <div>{cardParams.position}</div>
        ♘
      </div>
    </>
  )
}

export default Card;
