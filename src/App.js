import logo from './logo.svg';
import './App.css';
import WelcomeWithProps from './components/WelcomeWithProps';
import './components/atoms/buttons.css';
import Button from './components/atoms/Button';
import './components/atoms/input.css';
import Input from './components/atoms/Input';
// function add():
//   print (5+6)

//   function add():
//   return 5+6

//   function add (a,b):
//   print(a+b)

//   function add(a,b):
//   return a+b

//   add(5,6)

//   sum = add(5,6)

// Component is a function it always have a return type of html or JAX tag,
//  with parameter or without parameter (parameter is called props in react)
// Component with props and component without props

function App() {
  return (
    <>
    <br/>
    <br/>
    <br/>
    {/* <input className='form-input' placeholder='Enter your name'/> */}
    <Input label="First Name:" 
      error="Please fill this"
      placeholder='Enter your name' />
    {/* <button className='btn btn-primary btn-sm btn-disabled' >Primary Button</button> */}
    <Button variant='secondar' size='sm'>Submit</Button>
    <Button variant='danger' size='sm' >Submit</Button>
      {/* <WelcomeWithProps welcomeMessage="WelcometoOurClass" number="10" /> */}
    </>
  );
}

export default App;
