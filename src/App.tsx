// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import UserComponent from './components/UserComponent';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserComponent/>
      </div>
    </Provider>
  );
};

export default App;
