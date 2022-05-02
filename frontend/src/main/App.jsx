import React from 'react';
import Menu from '../Menu/Menu';
import Routes from '../routes/routes'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Importing toastify module
import {toast} from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
// toast-configuration method,
 // it is compulsory method.
 toast.configure({
       autoClose: 500
 })

class App extends React.Component {
 render() {
  return(
   <div className='container' >
          <Menu/>
          <Routes/>
   </div>
  );
 }
}
export default App