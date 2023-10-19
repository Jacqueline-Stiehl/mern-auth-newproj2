import { Container } from 'react-bootstrap';
import { Outlet, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Tips from "./components/Tips";
import HomeScreen from "./screens/HomeScreen";
import { ChakraProvider } from '@chakra-ui/react'
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";


const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <ToastContainer />
      
      <Container className='my-2'>
        <Outlet />
        
      </Container>
    </ChakraProvider>
  );
};

export default App;
