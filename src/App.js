import logo from './logo.svg';
import './App.css';
import Button from './nlineCSS';
import Button1 from './modulecss';
import Button2 from './buttonCRS';
import Utilisateur from './Utilisateur';
import listItems from './map';
import Nameform from './seance10/NameForm';
import NameForm2 from './seance10/NameForm2';
import TextArea from './seance10/TextArea';
import Select from './seance10/Select';
import RadioGroup from './seance10/radio';
import CheckBoxGroup from './seance10/checkbox';
import Connexion from './seance10/tp1';
import Inscription from './seance10/tp2';
import Header from './tp1s9/header';
import Body from './tp1s9/body';
import Listproduit from './tp1s9/Listproduit';
import Footer from './tp1s9/footer';
import Gessnumber from './gessNumber';

function App() {
  const radios = [ 
  { value : 1, text : "radio1" }, 
  { value : 2, text : "radio2" }, 
  { value : 3, text : "radio3", checked : true }, 
  { value : 4, text : "radio4" } 
  ];
  const checkboxes = [ 
  { value : 1, text : "check1" }, 
  { value : 2, text : "check2", checked : true }, 
  { value : 3, text : "check3", checked : true }, 
  { value : 4, text : "check4" } 
  ];
  return (
    <>
    {/* <Button/>
    <Button1/>
    <Button2>Nom Du Button</Button2>
    <Utilisateur isLoggedIn={true}/>
    <ul>{listItems}</ul>
    <Nameform/>
    <NameForm2/>
    <TextArea cols={40} rows={10} value="Tapez votre texte ici" /> <br></br>
    <Select  defaultValue={2} options={["Element1", "Element2", "Element3", "Element4","Element5"]} /> 
    <RadioGroup radios={radios} name="group1" />
    <CheckBoxGroup checkboxes={checkboxes} /> */}

    {/* <Connexion/> */}

    {/* <Inscription/> */}

    {/* <Header/>
    <Body/>
    <Listproduit/>
    <Footer/> */}

    <Gessnumber/>
    </>
  );
}

export default App;
