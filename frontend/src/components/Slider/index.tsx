'use client'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.scss'
import Button from "../Button";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.content}>
          <h5>T-shirt / Tops</h5>
          <h3>Summer Value <br />Pack</h3>
          <h5>cool / colorful / comfy</h5>
          <Button content="Shop Now" bgColor='white' type="default" />
        </div>
        <Slider {...settings} className='slide'>
          <div className={styles.slideItem}>
            <Image src="/images/product-slide-1.jpg" width={2880} height={1432} alt="img 1" placeholder="blur" blurDataURL="/images/blur.png" />
          </div>
          <div className={styles.slideItem}>
            <Image src="/images/product-slide-2.jpg" width={2880} height={1432} alt="img 2" placeholder="blur" blurDataURL="/images/blur.png" />
          </div>
          <div className={styles.slideItem}>
            <Image src="/images/product-slide-3.jpg" width={2880} height={1432} alt="img 3" placeholder="blur" blurDataURL="/images/blur.png" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Slide