import { useEffect } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from "./config/firebase";

function App() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    const getMovies = async () => {

    }
  },[]);
  
  return (
    <div className="App">
      <Auth/>
    </div>
  );
}

export default App;
