import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from "./redux/store/configureStore";
import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div >
              <Main/>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
