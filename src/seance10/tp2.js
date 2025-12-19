import { useState } from "react";

export default function Inscription (){
     const [identifiant,setIdentifiant]=useState("")
     const [password,setPassword] = useState("")
     const [dateNaissance,setDateNaissance] = useState('')
     const [ville,setVille] = useState('')
     const [genre,setGenre] = useState('')
     const [loisirs,setLoisir] = useState([])
     const [photo,setPhoto] = useState(null)
     const [affichage,setAffichage] = useState('')

     const villes = [
            {
                value: "Casablanca",
                text: "Casablanca",
            },
            {
                value: "Agadir",
                text: "Agadir",
            },
            {
                value: "Mrraksh",
                text: "Mrraksh",
            }
    ];
    function handlerSubmit(event){
        event.preventDefault()
        setAffichage(`je suis ${identifiant} né le ${dateNaissance} à ${ville} et mes loisires sont : ${loisirs}`)

    }
    function loisir(param){
        if (loisirs.includes(param)){
            let array = loisirs.filter((elem)=>elem !== param)
            setLoisir(array)
        }else{
            let array = [...loisirs , param]
            setLoisir(array)
        }
        
    }

    return(
        <div>
            <h1>inscription</h1>
            <form onSubmit={handlerSubmit}>
                <label>L'identifiant <br></br>
                    <input type="text" value={identifiant} onChange={(e)=>setIdentifiant(e.target.value)}/>
                </label><br></br>
                <label>Mot de passe<br></br>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label><br></br>
                <label>date de naissance<br></br>
                    <input type="date" value={dateNaissance} onChange={(e)=>setDateNaissance(e.target.value)}/>
                </label><br></br>
                <label>ville
                    <select onChange={(e)=>setVille(e.target.value)}>
                        {villes.map((elem , index)=><option key={index+1} value={elem.value}>{elem.text}</option>)}
                    </select>
                </label><br></br>
                <label>genre
                    <input type="radio" value="homme" name="genre" onChange={(e)=>setGenre(e.target.value)}/>Homme
                    <input type="radio" value="femme" name="genre" onChange={(e)=>setGenre(e.target.value)}/>Femme
                </label><br></br>
                <label>Loisirs
                    <input type="checkbox" value="Sport" onChange={(e)=>loisir(e.target.value)}/> Sport
                    <input type="checkbox" value="Lecture" onChange={(e)=>loisir(e.target.value)}/> Lecture
                    <input type="checkbox" value="Musique" onChange={(e)=>loisir(e.target.value)}/> Musique
                </label><br></br>
                <label>photo
                    <input type="file" accept="image/*" onchange={(e)=>setPhoto(e.target.files[0])}/>
                </label><br></br>
                <input type="submit" value="S'inscrire"/>
            </form>
            <h2>{affichage}</h2>
        </div>
    );

}