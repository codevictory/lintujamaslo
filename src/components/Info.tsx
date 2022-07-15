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
        <h2 id='location'>
          <FormattedMessage id='main.info.location' />
        </h2>
        <p>
          <FormattedMessage id='main.info.location.desc' />
        </p>
        <div className='Info-imageContainer'>
          <img src={seurantalo} alt='seurantalo' />
        </div>
        <h2 id='dresscode'>
          <FormattedMessage id='main.info.dresscode' />
        </h2>
        <p>
          <FormattedMessage id='main.info.dresscode.desc' />
        </p>
        <h2 id='gifts'>
          <FormattedMessage id='main.info.gifts' />
        </h2>
        <p>
          <FormattedMessage id='main.info.gifts.desc' />
        </p>
        <p>IBAN: FI59 5316 0820 0613 54</p>
        <h2 id='accomodation'>
          <FormattedMessage id='main.info.accomodation' />
        </h2>
        <a href='https://oldsmuggler.fi/palvelut/mokit/'>
          <h3>
            <FormattedMessage id='main.info.vanhaSalakuljettaja' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={vanhaSalakuljettaja} alt='vanhaSalakuljettaja' />
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
            <img src={vaihela} alt='vaihela' />
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
            <img src={livonsaariCaravan} alt='livonsaariCaravan' />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.livonsaariCaravan.desc' />
        </p>
        <h2 id='services'>
          <FormattedMessage id='main.info.services' />
        </h2>
        <a href='https://livonsaarenosuuskauppa.fi/'>
          <h3>
            <FormattedMessage id='main.info.livonsaarenOsuuskauppa' />
          </h3>
          <div className='Info-imageContainer'>
            <img src={kauppa} alt='kauppa' />
          </div>
        </a>
        <p>
          <FormattedMessage id='main.info.livonsaarenOsuuskauppa.desc' />
        </p>
      </div>
    </section>
  );
};
