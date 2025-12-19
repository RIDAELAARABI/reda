import { createGlobalStyle } from "styled-components";
const Gstyle = createGlobalStyle`
.fot{
text-align : center ;
background-color : #212529 ; 
height:50px;

}
h3{
color : #bec0c2ff;
font-size:15px;
padding-top:10px;
}
`
export default function Footer(){
    return(
        <>
        <Gstyle/>
        <div className="fot">
            <h3>Copyright &copy; Your Website 2022</h3>
        </div>
        </>
        
    );
}