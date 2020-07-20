import styles from './styles.module.scss';
import Lazyload from 'react-lazyload';

export default function ProjectComponent({ bg, children }) {
  return (
    <>
      <div className={styles.projectItem}>
        <Lazyload>
          <div className='projectItem-bg'>
          </div>
        </Lazyload>
        <div className={styles.projectItem__item}>
          {children}
        </div>
      </div>
      <style jsx>
        {
          `
          .projectItem-bg {
            background: url(${bg}) center center;
            background-size: cover;
            height: 170px;
          }

          @media (min-width: 768px ) {
            .projectItem-bg {
              height: 250px;
            }
          }

          @media (min-width: 990px ) {
            .projectItem-bg {
              height: 300px;
            }
          }
      `
        }
      </style>
    </>
  )
}