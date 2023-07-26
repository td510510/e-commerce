import Image from "next/image"
import SearchIcon from '../../../public/icons/search.svg'
import HeartIcon from '../../../public/icons/heart.svg'
import UserIcon from '../../../public/icons/user.svg'
import ShoppingCartIcon from '../../../public/icons/shopping-cart.svg'
import styles from './header.module.scss'

const Header = () => {
  const catagories = ['Shop', 'Men', 'Women', 'Combos', 'Joggers']
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image src='/images/logo.png' width={91} height={45} alt="Logo" />
        <ul className={styles.menu}>
          {
            catagories.map(item => (
              <li key={item} data-title={item}>{item}</li>
            ))
          }
        </ul>
        <div className={styles.search}>
          <div className={styles.icon}><SearchIcon /></div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}><HeartIcon /></div>
          <div className={styles.icon}><UserIcon /></div>
          <div className={styles.icon}><ShoppingCartIcon /></div>
        </div>
      </nav>
    </header>
  )
}

export default Header