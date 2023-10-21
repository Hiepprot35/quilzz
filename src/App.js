import logo from './logo.svg';
import './App.css';
import { useEffect, useState,useRef } from 'react';
import AddTerm from './component/addTerm/addTerm';
import InputForm from './component/forminput/inputForm';
function App() {
  const [countNumber, setCountNumber] = useState([2])
  const addComponent = () => {
    setCountNumber([...countNumber, countNumber[countNumber.length - 1] + 1]);
  }
  useEffect(() => {
    console.log(countNumber)
  }, [countNumber])
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };
  return (
    <div className="App">
      <div className='header_addTerm'>

        <InputForm
          name={"title"}
          label={"Nhập tiêu đề"}
        />
      
        <div className='music_play'>
 
          <audio controls ref={audioRef} >
            <source src='././chvtx.mp3' type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <AddTerm count={1}></AddTerm>
      {
        countNumber.map((e, i) => {
          return (
            <div key={i}>

              <AddTerm count={e} />
            </div>
          )
        })
      }
        <div>
          
          <button onClick={addComponent}>Tạo</button>
        </div>
    </div>
    
  );
}

export default App;
