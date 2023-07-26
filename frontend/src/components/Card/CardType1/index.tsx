import { FC } from 'react'
import styles from './cardType1.module.scss'

interface CardType1Props {
  image: string
}

const CardType1: FC<CardType1Props> = ({ image }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.box}>
        <h6>Low Price</h6>
        <h4>High Coziness</h4>
        <p>UPTO 50% OFF</p>
        <h5>Explore Items</h5>
      </div>
    </div>
  )
}

export default CardType1