import TitleComponent from "../../atoms/title";
import ServiceComponent from "../../molecules/services-components";

export default function ServicesSection() {
  const servicesContent = [
    {
      service: 'Producción audiovisual',
      bg: '../assets/services/produccion.jpg'
    },
    {
      service: 'Filmación Aérea',
      bg: '../assets/services/aerea.jpg'
    },
    {
      service: 'Live Streaming',
      bg: '../assets/services/live-streaming.jpg'
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
            background: url("../assets/services/servicios.jpg") center center;
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
