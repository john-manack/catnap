import { Provider } from 'react-redux';
import { store } from './redux/store';
import Updater from './components/Updater';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Updater/>
    </Provider>
  );
}

export default App;
