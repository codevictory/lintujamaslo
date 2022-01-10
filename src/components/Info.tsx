import { FormattedMessage } from 'react-intl';
import './Info.scss';
import kauppa from '../img/kauppa.jpg';
import livonsaariCaravan from '../img/livonsaariCaravan.jpg';
import seurantalo from '../img/seurantalo.jpg';
import vanhaSalakuljettaja from '../img/vanhaSalakuljettaja.jpg';
import vaihela from '../img/vaihela.jpg';

export const Info = () => {
  return (
    <section className='Info'>
      <div className='Info-container'>
        <h1>
          <FormattedMessage id='main.info' />
        </h1>

        <p>
          <FormattedMessage id='main.info.seurantalo' />
        </p>
        <div className='Info-imageContainer'>
          <img src={seurantalo} />
        </div>

        <h2>
          <FormattedMessage id='main.info.accomodation' />
        </h2>

        <a href='https://oldsmuggler.fi/palvelut/mokit/'>
          <h3>
            <FormattedMessage id='main.info.vanhaSalakuljettaja' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={vanhaSalakuljettaja} />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.vanhaSalakuljettaja.desc' />
        </p>

        <a href='https://vaihela.fi/'>
          <h3>
            <FormattedMessage id='main.info.vaihela' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={vaihela} />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.vaihela.desc' />
        </p>

        <a href='https://www.livonsaarencaravan.fi/mokit'>
          <h3>
            <FormattedMessage id='main.info.livonsaariCaravan' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={livonsaariCaravan} />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.livonsaariCaravan.desc' />
        </p>

        <h2>
          <FormattedMessage id='main.info.services' />
        </h2>
        <a href='https://livonsaarenosuuskauppa.fi/'>
          <h3>
            <FormattedMessage id='main.info.livonsaarenOsuuskauppa' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={kauppa} />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.livonsaarenOsuuskauppa.desc' />
        </p>
      </div>
    </section>
  );
};
