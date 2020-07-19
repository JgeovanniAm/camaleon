import FigureComponent from '../../atoms/figure';
import ButtonComponent from '../../atoms/button';

export default function ButtonNavComponent({ handleStateNav, toggleFunct }) {
  return (
    <>
      <div className="wrapperMenuMobile">
        <ButtonComponent ariaLabel="button menu" variantClass="wrapperMenuMobile__btn" funct={toggleFunct} >
          <FigureComponent url="../assets/icons-mobile/menu.png" variantClass="wrapperMenuMobile__img" altPro="icono menu mobile" />
        </ButtonComponent>
      </div>
      <style jsx>
        {
          `
            .wrapperMenuMobile {
              z-index: ${handleStateNav ? 3 : 2};
            }
          `
        }
      </style>
    </>
  )
}