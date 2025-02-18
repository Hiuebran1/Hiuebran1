import logo from './logo.svg';
import './App.css';
import DTFunCmop from './component/DTFunCmop';
import DTFunCmop1 from './component/DTFunComp1';
import DTCLassComp from './component/DTClassComp';

function DTApp() {
  const user= {
    fullname:'do dung',
    age:20,
    phone:'1234568790'
  }
  return (
    <div className="container border mt-3">
      <h1>
        demo component - props - state <hr/>
        
      </h1>
      <div className='alert alert-danger'>
        <DTFunCmop name="do dung" address='25 vu ngoc phan' company="devmaster"/>
        <hr/>
        <DTFunCmop name="duc huy" address='k23cnt1' company="fit-ntu"/>
      </div>
      <div className='alert-alert-info'>
        <DTFunCmop1 renderinfo={user}/>
      
      </div> 
        <DTCLassComp/>
        <DTCLassComp rendername='k23cnt1' renderusers = {user}/>
    </div>   
      
    
        );
      }

export default DTApp;
      