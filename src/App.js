import './App.css'; 
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/categories/:id' element={<ItemListContainer />}/>
              <Route path='/product/:id'/>
              <Route path='/cart'/>
            </Routes>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;