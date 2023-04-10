import logo from './components/login';
import './App.css';
import {Image};

function App() {
  return (
    <div className="App">
      <login/>
      <header className="App-header">
        <image style={styles.imagemReact} source={require('../../my-app/public/logo192.png')} />
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  imagemReact:{
    backgroundColor: 'black'
  }
});
export default App;
