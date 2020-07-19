import TitleComponent from '../../atoms/title';
import VimeoComponent from '../../molecules/vimeo-showreel';

export default function ShowReelComponent() {
  return (
    <section className="u-container">
      <TitleComponent Tag="h2" variantClass="u-titlePrimary">SHOWREEL</TitleComponent>
      <VimeoComponent></VimeoComponent>
    </section>
  )
}