import Header from './components/Header';
import Footer from "./components/Footer";
import MainContent from './components/MainContent';
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from './components/JSXRules';
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';
import UserList from './components/UserList';
import CardContainer from './components/CardContainer';
const App  = () =>{
  return (
    <>
    <Header/>
    <MainContent/>
    <WelcomeMessage/>
    <JSXRules/>
    <Greeting/>
    <ProductInfo/>
    <UserList/>
    <CardContainer/>
    <Footer/>
    </>
  )
}
export default App;
