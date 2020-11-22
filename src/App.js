import logo from './logo.svg';
import './App.css';
import HeaderMain from './components/HeaderMain/HeaderMain';
import WeDo from './components/WeDo/WeDo';
import Project from './components/Project/Project';
import Achievement from './components/Achievement/Achievement';
import GetStartedCTA from './components/GetStartedCTA/GetStartedCTA';
import Footer from './components/Footer/Footer';
import DedicatedTeam from './components/DedicatedTeam/DedicatedTeam';

function App() {
  return (
    <div >
     <HeaderMain/>
     <WeDo/>
     <Project/>
     <Achievement/>
     <DedicatedTeam/>
    <GetStartedCTA/>
    <Footer/>
    </div>
  );
}

export default App;
