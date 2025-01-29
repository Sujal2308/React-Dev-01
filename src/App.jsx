import { createContext } from 'react';
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
import Refs from './components/Refs';
import Test from './components/Test';

//! using contextApi to bypass prop drilling
export const Data = createContext();
export const Data2 = createContext();
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
      {/* <Data.Provider value={"Sujal"}>
        <Data2.Provider value={21}>
        <JSXRules />
        </Data2.Provider>
     </Data.Provider> */}
    
    {/*
    <ProductInfo/>
    <UserList/> */}
    {/* <CardContainer/>
    <ConditionalRender cart= {[ "Socks" ,"Bag","Mobile", "pen" , 'Books']}/>
   */}
   {/* <Toggle/> */}
     {/* <Footer/> */}
     {/* <Refs/> */}
     <Test/>
    </>
  )
}
export default App;
