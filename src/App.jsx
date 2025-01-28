import Header from './components/Header';
import Footer from "./components/Footer";
import MainContent from './components/MainContent';
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from './components/JSXRules';
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';
import UserList from './components/UserList';
import CardContainer from './components/CardContainer';
import ConditionalRender from "./components/ConditionalRender";
import EventHandle from './components/EventHandle';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import Toggle from './components/Toggle';
import SideEffects from './components/SideEffects';
const App  = () =>{
  return (
    <>
    {/* <SideEffects/> */}
    {/* <RandomNumberGenerator/> */}
    {/* <Header/> */}
     {/* <MainContent/> */}
     {/* <EventHandle/> */}
     {/* <Greeting/> */}
     {/* <WelcomeMessage/> */}
     <JSXRules message="hello world"/>
    {/*
    <ProductInfo/>
    <UserList/> */}
    {/* <CardContainer/>
    <ConditionalRender cart= {[ "Socks" ,"Bag","Mobile", "pen" , 'Books']}/>
   */}
   {/* <Toggle/> */}
     {/* <Footer/> */}
    </>
  )
}
export default App;
