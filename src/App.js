import logo from './logo.svg';
import './App.css';
import { Header } from './Component/Header';
import CarouselComp from './Component/CarouselComp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='CarouselContainer'>
      <CarouselComp/>
      </div>
      
    </div>
    
  );
}

export default App;
