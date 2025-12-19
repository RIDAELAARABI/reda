import { createGlobalStyle } from "styled-components";
const Gstyle = createGlobalStyle`
.titre{
color : #212529 ;
font-size : 20px;
font-weight : bold ;
}
.button1{
border:1px solid #212529;
border-radius :6px;
padding : 7px;
color:#212529;
margin-left : 60px;
}
.product{
border : 1px solid gray;
border-radius:5px;
position : relative;
}
.Listproduit{
display : flex ;
gap : 40px;
padding : 40px;
justify-content:center;
padding-top:30px

}
span{
color:  #212529;
}
.elems{
display : flex;
flex-direction:column;
align-items:center;

}
.sale{
color : white;
background-color : black;
position : absolute ;
top : 10px ;
right: 10px;
padding: 0px 8px;
border : 1px solid black;
border-radius: 5px;
}
.nsale{
    display: none;
}
`
export default function Produit(props){
    return(
        <>
        <Gstyle/>
        <div className="product">
            <img width="220px" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"/>
            <span className={props.titre=="Fancy Product" || props.titre=="Popular Item" ? "nsale":"sale"}>sale</span>
            <div className="elems">
                <h2 className="titre">{props.titre}</h2>
                <p><s>{props.oprix}</s> <span>{props.nprix}</span></p>
                <button className="button1">add to card</button>
            </div>
        </div>
        </>   
    );
}