import { Container } from 'react-bootstrap';
import { Outlet, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Tips from "./components/Tips";
import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";


const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  {/* <Route path="/login" element={<LoginScreen />} />
                  <Route path="/signup" element={<SignupScreen />} /> */}
                  <Route path="/tips" element={<Tips />} />
                  {/* <Route path="/florum" element={<Forum />} /> */}
                  {/* <Route path="/planner" element={<Planner />} /> */}
                  {/* <Route path="/search" element={<PlantSearch search={search}/>} /> */}
                  {/* <Route path="/dashboard" element={<UserDashboard/>} /> */}
                  {/* <Route path="/timeline" element={<TimelineContainer/>} /> */}
                </Routes>
      <Container className='my-2'>
        <Outlet />
        
      </Container>
    </>
  );
};

export default App;
