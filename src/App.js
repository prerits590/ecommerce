
import './App.css';
import Favorites from './components/Favorites';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import NavBar from './components/NavBar';
import NewOnSale from './components/NewOnSale';
import Shopbycat from './components/Shopbycat';
import Summersection from './components/Summer-section';

function App() {
  return (
    <div className="App">
  <NavBar></NavBar>
  <Hero></Hero>
  <Favorites></Favorites>
  <Shopbycat></Shopbycat>
  <Hero2 imageUrl={'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1536/cms/5L3hin6wSdErTuSQlN4y2w/6cc8ec48d8b91ad3d4e8ca8c237d19db/23Q2-Breezer_Point-Site-Secondary_Hero-Mobile-3840x1995-min.jpg'}></Hero2>
  <Summersection h1Tag={'Summer Trips Need Super Packable Shoes'} pTag={'We’ve got your 10,000 steps covered, easy.'} btnText1={'SHOP MEN'} btntext2={'SHOP WOMEN'}></Summersection>
  <NewOnSale></NewOnSale>
  <Hero2 imageUrl={'https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2560/cms/3ayhgnPGPhzCG9BID6wUt6/fd701d4a54945655886613d18e827389/23Q2-SummerLookbook-Secondary-Hero-Desktop-3840________1996-Slider.jpg'}></Hero2>
  <Summersection h1Tag={'Summer Styles'} pTag={'Get a move on (or out) in bouncy shoes made with natural materials.'} btnText1={'SHOP MEN'} btntext2={'SHOP WOMEN'}></Summersection>
  <NewOnSale></NewOnSale>
    </div>
  );
}

export default App;
