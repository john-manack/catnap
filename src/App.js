import { Provider } from 'react-redux';
import { store } from './redux/store';
import Updater from './components/Updater';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h3>Cattitude 🐈</h3>
        </header>
      </div>
      <Updater/>
    </Provider>
  );
}

export default App;
