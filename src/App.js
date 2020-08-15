import React, {useState} from 'react';
import Modal from './components/Modall';

function App() {
  const[isModalVisible, setIsModallVisible ] = useState(false)
  return (
    <div className="" id="">
      <button onClick={()=>{setIsModallVisible(true)}}>Open</button>
      {isModalVisible? (
            <Modal onClose={()=>setIsModallVisible(false)}>
                <h1>deu certo tamo junto 2</h1> 
            </Modal>
      ): null}
    </div>
  );
}
export default App;