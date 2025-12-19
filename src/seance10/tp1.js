import { useState } from "react";

export default function Connexion (){
    const database = [ 
  { username: "user1", password: "pass1" }, 
  { username: "user2", password: "pass2" } 
]; 
    const errors = {  
  uname: "Votre identifiant est incorrect.",  
  upass: "Votre mot de passe est incorrect."  
};
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [messageErreur,setMessageErreur] = useState("")
    const [messageErreur2,setMessageErreur2] = useState("")
    const [isLogged,setIsLogged] = useState(false)

    function handleSubmit(event){
        event.preventDefault();
        const userName = database.find((el) => el.username === user);
        // if (!userName) {
        //     setMessageErreur(errors.uname);
        // }else{
        //     setMessageErreur(""); 
        //     if (userName.password !== password) {
        //         setMessageErreur2(errors.upass);
        //     } else {
        //         setMessageErreur2("");
        //         setIsLogged(true);
        //     }  
        // }  
        if (!userName) {
            setMessageErreur(errors.uname);
            return
        }  
        if(userName.password !== password){
            setMessageErreur2(errors.upass)
            return
        }
        setMessageErreur("")
        setMessageErreur2("")
        setIsLogged(true)

    }
    function logout(){
        setIsLogged(false)
        setUser("")
        setPassword('')
    }
    return(
        <div className="app">
            {isLogged ? 
            <div>
                <h1 className="title">Accuei</h1>
                <p>Bonjour {user}</p>
                <input type="submit" onClick={logout} value="logout"/>
            </div>
            : 
            <div>
                <h1 className="title">Connexion</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Lidentifiant<br></br>
                            <input type="text" value={user} onChange={(event)=>setUser(event.target.value)} />
                            <p style={{color:"red"}}>{messageErreur}</p>
                        </label>
                        <label>
                            Mot de passe<br></br>
                            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                            <p style={{color:"red"}}>{messageErreur2}</p>

                        </label>
                        <input type="submit" value="Se connecter"/>
                    </form>
            </div>
            }
        </div>
        
    );
}