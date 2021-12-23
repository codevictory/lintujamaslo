import { useRecoilState } from 'recoil';
import { currentLanguage } from '../atoms/language';
import './LanguagePicker.scss';

export const LanguagePicker = () => {
  const [lang, setLang] = useRecoilState(currentLanguage);

  return (
    <h1 className='LanguagePicker'>
      <button onClick={(e) => setLang('fi')}>fi</button> |{' '}
      <button onClick={(e) => setLang('sk')}>sk</button> |{' '}
      <button onClick={(e) => setLang('en')}>en</button>
    </h1>
  );
};
