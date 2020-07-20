import Lazyload from 'react-lazyload';
import TitleComponent from '../../atoms/title';

export default function ServiceComponent({ service }) {
  return (
    <>
        <div className="servicesBg">
          <TitleComponent Tag="h3" variantClass="serviceItem-title">{service.service}</TitleComponent>
        </div>
      <style jsx>
        {`
          .servicesBg {
            background: url(${service.bg}) center center;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-size: cover;
            height: 60vh;
            position: relative;
            width: 100%;
          }
          @media (min-width: 990px) {
            .servicesBg {
              height: 100vh;
            }
          }
        `}
      </style>
    </>
  )
}