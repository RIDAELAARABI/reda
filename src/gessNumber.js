import React from "react";
export default class Gessnumber extends React.Component{
    constructor(props){
        super(props)
        this.state = {message:"" , number:null , valeur : Math.floor(Math.random()*10)+1 , gagner : false , count : 0 }
    }
    jouer(){
        if(this.state.number == this.state.valeur){
            this.setState({message : "vous avez trouver le nbr cacher " , gagner : true , count : this.state.count +1})
            
        }else if(this.state.number < this.state.valeur){
            this.setState({message : "ziiiiid mazal chwiya" , count : this.state.count +1})
        }else{
            this.setState({message : "n9s mazal chwiya" , count : this.state.count +1})
        }
    }
    rejouer(){
        this.setState({message:"" , number:null , valeur : Math.floor(Math.random()*10)+1 , gagner : false , count : 0 })
    }
    render(){
        return(
            <>
                {!this.state.gagner && <><input type="text" onChange={(e)=>this.setState({number : e.target.value})}/>
                <p>nbr essais : {this.state.count}</p></>}
                <p>{this.state.message}</p>
                {this.state.gagner ? <button onClick={()=>this.rejouer()}>rejouer</button>: <button onClick={()=>this.jouer()}>jouer</button>}
            </>
        );
    }
}