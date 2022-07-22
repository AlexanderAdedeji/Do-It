import { ToastContainer } from 'react-toastify';

import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import styles from './styles/modules/app.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container">
      <PageTitle />
      <div className={styles.app__wrapper}>
        <AppHeader/>
        <AppContent/>
      </div>

      <ToastContainer/>
    </div>
  );
}

export default App;
