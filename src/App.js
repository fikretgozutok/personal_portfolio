import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    document.title = "Person Name";
  }, []);

  return (
    <div>
      <p>Demo</p>
    </div>
  );
}

export default App;
