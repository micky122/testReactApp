import { useState, useEffect } from 'react';

// Import Components
import { InputText, InputPassword, InputSelect } from './components/Input';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [type, setType] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [label, setLabel] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState("");

  const handleLabelChange = (e) => {
    setLabel(e.target.value);  
    console.log(label);
  };

  const handleLoginChange = (e) => {
    setLogin(e.target.value);  
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);  
  };

  const handleTypeChange = () => {
    setType(!type);
  };

  const HandleAddAccount = () => {
    
    const newAccount = {
      label,
      type: 'Local',
      login,
      password: pwd,
    };

    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setLabel('');  // Clear the input field
    setLogin('');  // Clear the input field
    setPwd('');    // Clear the input field
  };

  useEffect(() => {
    // Log the accounts whenever they change
    console.log(accounts);
  }, [accounts]);

  const handleDeleteAccount = (index) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      setAccounts((prevAccounts) => [
        ...prevAccounts.slice(0, index),
        ...prevAccounts.slice(index + 1),
      ]);
    }
  };

  return (
    <div className="App container">
      <h1 style={{ display: 'inline-block' }}>Учетные записи</h1>
      <Button className="btn btn-success" onClick={HandleAddAccount}>
        +
      </Button>
      <div className="item-display mt-3">
        {accounts.length>0?accounts.map((account, idx) => {
          return (
            <div className="row" key={idx}>
              <div className="col-md-2">
                <InputText label="Label" onChange={(e)=>{
                         const newAccounts = [...accounts];
                         newAccounts[idx].label = e.target.value;
                         setAccounts(newAccounts);
                }} value={account.label} />
              </div>
              <div className="col-md-3">
                <InputSelect label="Record Type" onChange={(e)=>{
                         const newAccounts = [...accounts];
                         newAccounts[idx].type = e.target.value;
                         setAccounts(newAccounts);
                }} value={account.type}  options={['Local', 'External']} />
              </div>
              <div className={!type ? 'col-md-3' : 'col-md-6'}>
                <InputText label="Login" value={account.login} onChange={(e)=>{
                  console.log(e.target.value);
                  const newAccounts = [...accounts];
                  newAccounts[idx].label = e.target.value;
                  setAccounts(newAccounts);
                }}/>
              </div>
              {!type ? (
                <div className="col-md-3">
                  <InputPassword label="Password" value={account.password} onChange={(e)=>{
                           const newAccounts = [...accounts];
                           newAccounts[idx].password = e.target.value;
                           setAccounts(newAccounts);
                  }}/>
                </div>
              ) : (
                <></>
              )}
              <div className="col-md-1">
                <Button
                  className="btn btn-danger mt-3 trash-button"
                  style={{ display: 'inlineFlex' }}
                  onClick={() => handleDeleteAccount(idx)}  // Pass index to delete
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </div>
            </div>
          );
        }):(<p>No accounts available.</p>)}
      </div>
    </div>
  );
}

export default App;
