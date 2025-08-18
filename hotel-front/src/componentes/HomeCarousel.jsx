import { Carousel } from 'react-bootstrap';
import styles from '../styles/HomeCarousel.module.css';

function HomeCarousel() {
  return (
    <div className={styles.carousel}>
      <Carousel fade controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/home1.jpg"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/home2.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/home/home3.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
