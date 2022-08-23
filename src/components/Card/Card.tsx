import type { CSSProperties } from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'

const knightStyle: CSSProperties = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
  width: '100px',
  height: '100px',
  border: '1px solid black',
}

const Card = ({ item }: any) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'card',
      item: {id: item},
      collect: (monitor) => {
        // console.log('card', monitor);
        
        return ({
          isDragging: !!monitor.isDragging(),
        })
      },
    }),
    [],
  )

  // console.log(drag);
  

  return (
    <>
      <DragPreviewImage connect={preview} src={''} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          // opacity: isDragging ? 0.5 : 1,
          display: isDragging ? 'none' : 'flex',
        }}
      >
        {/* <img src={image} alt='' width={100} height={100} /> */}
        {item}
        ♘
      </div>
    </>
  )
}

export default Card;
