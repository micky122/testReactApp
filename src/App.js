import { useState, useEffect } from 'react';

// Import Components
import { InputText, InputPassword, InputSelect } from './components/Input';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [type, setType] = useState(false);
  // const [accounts, setAccounts] = useState([
  //   // {label:'', type:'Local', login:'', password:'', showPwd:false}
  // ]);
  const [accounts, setAccounts] = useState(() => {
    const saved = localStorage.getItem('accounts');
    return saved ? JSON.parse(saved) : [];
  });
  const [label, setLabel] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState(""); 
  const [showPwd, setShowPwd] = useState(false);
  // const [errors, setErrors] = useState({});

  const HandleAddAccount = () => {
 
    // const newErrors = {};

    // if (label.trim() === '') {newErrors.label = "Label is required."; setErrors(newErrors)}
    // else if (login.trim() === '') {newErrors.login = "Login is required."; setErrors(newErrors)}
    // else if (type === false && pwd === '') {newErrors.password = "Password is required for Local accounts.";setErrors(newErrors)}
    // else {
    // if (Object.keys(newErrors).length > 0) {
    //   console.log(Object.keys(newErrors).length)
    //   console.log("Validation failed", newErrors); // 👈 Test this
    //   setErrors(newErrors);
    //   return;
    // }
    // setErrors({});
    const newAccount = {
      label,
      type: 'Local',
      login,
      password: pwd,
      showPwd
    };
    
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    setLabel('');  // Clear the input field
    setLogin('');  // Clear the input field
    setPwd('');    // Clear the input field
    setShowPwd(false);    // Clear the input field

  };
  useEffect(() => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);
  
  useEffect(() => {
    // Save to localStorage every time accounts change
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }, [accounts]);

  const handleDeleteAccount = (index) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      setAccounts((prevAccounts) => [
        ...prevAccounts.slice(0, index),
        ...prevAccounts.slice(index + 1),
      ]);
    }
  };

  const handlePwdToggle = (index) => {
    const newAccounts = [...accounts];
    newAccounts[index].showPwd = !newAccounts[index].showPwd;
    setAccounts(newAccounts);
  }

  const handleInputChange = (e, index) => {
    const newAccounts = [...accounts];
    newAccounts[index].password = e.target.value;
    setAccounts(newAccounts);
  }

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
                <InputText label="Label" 
                  // className={`form-control ${errors.label ? 'is-invalid' : ''}`}
                  className="form-control"
                  onChange={(e)=>{
                  const newAccounts = [...accounts];
                  newAccounts[idx].label = e.target.value;
                  setAccounts(newAccounts);
                }} value={account.label} />
              </div>
              <div className="col-md-3">
                <InputSelect label="Record Type" 
                  className="form-control"
                  onChange={(e)=>{
                    const newAccounts = [...accounts];
                    setType(!type);
                    newAccounts[idx].type = e.target.value;
                    setAccounts(newAccounts);
                }} value={account.type}  options={['Local', 'External']} />
              </div>
              <div className={account.type==='Local' ? 'col-md-3' : 'col-md-6'}>
                <InputText label="Login" 
                  // className={`form-control ${errors.login ? 'is-invalid' : ''}`}
                  className="form-control"
                  value={account.login} onChange={(e)=>{
                  const newAccounts = [...accounts];
                  newAccounts[idx].login = e.target.value;
                  setAccounts(newAccounts);
                }}/>
              </div>
              {account.type ==='Local' ? (
                <div className="col-md-3">
                  <InputPassword label="Password" value={account.password}
                    // className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    className="form-control"
                      type={account.showPwd ? 'text' : 'password'}
                     onChange={(e) => handleInputChange(e, idx)}>
                    <Button className="btn btn-primary mt-3 trash-button icon" 
                      style={{zIndex:"100", position:"absolute", top:'13%', right:"0px"
                      }}
                      onClick={()=>handlePwdToggle(idx)}>
                      <FontAwesomeIcon icon={account.showPwd?faEyeSlash:faEye} />
                    </Button>
                  </InputPassword>

                </div>
              ) : (
                null
              )}
              <div className="col-md-1">
                <Button
                  style={{marginTop:"43%"}}
                  className="btn btn-danger trash-button"
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
