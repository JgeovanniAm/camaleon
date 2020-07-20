import TitleComponent from "../../atoms/title";
import ServiceComponent from "../../molecules/services-components";

export default function ServicesSection() {
  const servicesContent = [
    {
      service: 'Fotografia',
      bg: '../assets/services/fotografia.jpg'
    },
    {
      service: 'Filmacion Aerea',
      bg: 'https://iberfdrone.es/wp-content/uploads/2019/10/habilitacion-5-a-15-1024x614.jpg'
    },
    {
      service: 'Motion Graphics',
      bg: '../assets/services/motion-g.jpg'
    },
    
    {
      service: 'Live Streaming',
      bg: '../assets/services/live.jpg'
    },
    {
      service: 'Produccion Audiovisual',
      bg: '../assets/services/audiovisual.jpg'
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
            background: url("../assets/services/bg1.jpeg");
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            height: 50vh;
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
