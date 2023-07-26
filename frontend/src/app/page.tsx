import CardType1 from '@/components/Card/CardType1'
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className={styles.saleOffContainer}>
        <div className={styles.section}>
          <CardType1 image='/images/product-slide-2.jpg' />
          <CardType1 image='/images/product-slide-3.jpg' />
        </div>
      </div>
    </>
  )
}
