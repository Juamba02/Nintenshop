import './App.css'; 
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
        <Navbar />
      <main style={styles.main}>
        <ItemListContainer />
      </main>
    </>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default App;