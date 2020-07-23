import TitleComponent from "../../atoms/title";
import ServiceComponent from "../../molecules/services-components";

export default function ServicesSection() {
  const servicesContent = [
    {
      service: 'Producción audiovisual',
      bg: '../assets/services/audiovisual.jpg'
    },
    {
      service: 'Filmación Aérea',
      bg: 'https://iberfdrone.es/wp-content/uploads/2019/10/habilitacion-5-a-15-1024x614.jpg'
    },
    {
      service: 'Live Streaming',
      bg: '../assets/services/live.jpg'
    },
    {
      service: 'Fotografía',
      bg: '../assets/services/fotografia.jpg'
    },
    {
      service: 'Motion Graphics',
      bg: '../assets/services/motion-g.jpg'
    }
  ]
  return (
    <section id="services">
      <div className="wrapper-titleServices">
        <TitleComponent Tag="h2" variantClass="sectionServiceTitle"> SERVICIOS </TitleComponent>
      </div>
      {
        servicesContent.map((item, i) => <ServiceComponent key={i} service={item} />)
      }
      <style jsx>
        {`
          .wrapper-titleServices {
            background: url("../assets/services/bg.jpg") center center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 50vh;
            background-attachment: fixed;
            position: relative;
          }


          @media (min-width: 768px) {
            .wrapper-titleServices {
              height: 65vh;
            }
          }

          @media (min-width: 990px) {
            .wrapper-titleServices {
              height: 100vh;
            }
          }
        `}
      </style>
    </section>
  )
}
