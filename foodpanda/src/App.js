import './App.css';
import Router from './config/router';
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
            <Router />
          </header>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
