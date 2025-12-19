import { createGlobalStyle } from "styled-components";
const Gstyle = createGlobalStyle`
.naav{
display: flex;
flex-direction : row;
justify-content: space-between;
height : 50px;
background-color : #dce1e6ff;

}
.lnaav{
display: flex;
flex-direction : row;
margin-left : 60px;
}
ul{
display: flex;
flex-direction : row;
gap:10px;
list-style-type : none ;
align-items : center;
margin : 5px
}
button{
margin: 10px;
margin-right : 60px ; 
border : 1px solid gray ;
border-radius : 2px;
}
h2{
margin : 5px;
color : #595f64ff;
}
`

export default function Header(){
    return(
       <>
        <Gstyle/>
        <div className="naav">
            <div className="lnaav">
                <h2>Start Bootstrap</h2>
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li> <select style={{border : "none" , backgroundColor :"#dce1e6ff "}} >
                        <option value="Shop">Shop</option>
                        </select></li>
                </ul>
            </div>
            <div><button><i class="bi bi-cart-fill"></i> Cart <i class="bi bi-0-circle-fill"></i></button></div>
        </div>
       </>
    );
}