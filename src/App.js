import './App.css'; 
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemLitsContainer';

function App() {
  return (
    <>
        <Navbar />
      <main style={styles.main}>
        <ItemListContainer greeting='El mejor lugar para comprar tus artículos de Nintendo'/>
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