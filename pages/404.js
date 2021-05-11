import Header from '../components/Header';
import Footer from '../components/Footer';
import * as S from '../styles/NotFound';
import Lottie from 'react-lottie';
import animationData from '../public/404.json';

function NotFound() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <Header />
      <S.Main>
        <div className="container">
          <Lottie
            options={defaultOptions}
            width="100"
            height="100"
          />
          <h1>Não foi possível encontrar essa página!</h1>
        </div>
      </S.Main>
      <Footer />
    </>
  )
}

export default NotFound