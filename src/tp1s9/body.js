import { createGlobalStyle } from "styled-components";
const Gstyle = createGlobalStyle`
h1{
font-size : 50px ;
color : white ;
}
.boody{
text-align : center ;
background-color : #212529 ; 
height:200px;
padding-top : 50px
}
p{
color : gray;
}
`

export default function Body(){
    return(
        <>
        <Gstyle/>
        <div className="boody">
            <h1>Shop in style</h1>
            <p>With this shop hompeage template</p>
        </div>
        </>
    );
}
