import "../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import React, { Component } from 'react';
import logo from './logo.svg';
import TitlebarGridList from './container/TitlebarGridList';
import { Provider } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
          <Provider>
            <div className="App">
            <TitlebarGridList />
            </div>
          </Provider>
    );
  }
}

export default App;
