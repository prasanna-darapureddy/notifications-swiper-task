import './App.css';
import SwiperPage from './components/Swiper/Swiper';
import Notification from './components/Notifications/Notification';
import Validation from './components/Validations/Validation';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Route path={'/validation'} element={<Validation />} />
      <Route path={'/swiper'} element={<SwiperPage />} />
      <Route path={'/notifications'} element={<Notification />} />
    </BrowserRouter>
  );
}

export default App;
