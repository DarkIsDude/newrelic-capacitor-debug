import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation('user');

  const languageSwitch = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {t('forms.userPreferenceShowstopper.fields.newsletter.company')}
        </p>
        <button
          className="App-link"
          onClick={languageSwitch}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
