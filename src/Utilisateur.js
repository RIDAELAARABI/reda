import Anonymous from './Anonymous'; 
import Connecte from './connect'; 
 
function Utilisateur(props) { 
  const isLoggedIn = props.isLoggedIn; 
  if (isLoggedIn) { 
    return <Connecte />; 
  } 
  return <Anonymous />; 
} 
export default Utilisateur; 