import Head from 'next/head';
import MainLayout from '../components/templates/main-layout';
import HomeBanner from '../components/organisms/home-hero';

const HomePage = () => (
  <>
    <Head>
      <title>Camaleon film / inicio</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js" async></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js" async></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js" async></script>
    </Head>
    <MainLayout>
      <HomeBanner></HomeBanner>
    </MainLayout>
  </>
)

export default HomePage;
