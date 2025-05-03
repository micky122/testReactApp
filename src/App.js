import { useState } from 'react';

// Import Components
import {InputText, InputPassword, InputSelect} from './components/Input';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [type, setType] = useState(false);
  const [ccounts, setCcounts] = useState(0);
  const [label, setLabel] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState("");
  const onAddBtnClick = () => {

  };

  const onChange = () => {
    setType(!type);
  }
  const onDelClick = () => {
    if(window.confirm("Aur u sure?")){
      alert("success");
    } else return;
  }
  return (
    <div className="App container">
      <h1 style={{display:'inline-block'}}>Учетные записи</h1>
      <Button className="btn btn-success">+</Button>
      <div className='item-display mt-3'>
        <div className='row'>
          <div className='col-md-2'>
            <InputText label="Label"/>
          </div>
          <div className='col-md-3'>
            <InputSelect onChange={onChange} label="Record Type"/>
          </div>
          <div className={!type?'col-md-3':'col-md-6'}>
            <InputText label="Login"/>
          </div>
          {!type?(
            <div className='col-md-3'>
              <InputPassword label="Password"/>
            </div>
          ):(
            <></>
          )}
          <div className='col-md-1'>
          <Button className="btn btn-danger mt-3 trash-button" style={{display:"inlineFlex"}} onClick={onDelClick}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
