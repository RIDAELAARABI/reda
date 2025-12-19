import Produit from './produit';
const products = [
    {   
        titre : "Fancy Product",
        oprix : "",
        nprix : "$80.00"
    }
    ,
    {   
        titre:"Special Item",
        oprix : "$20.00",
        nprix : "$18.00"
    }
    ,
    {   
        titre:"Sale Item",
        oprix : "$50.00",
        nprix : "$25.00"

    }
    ,
    {   
        titre:"Popular Item",
        oprix : "",
        nprix : "$40.00"
    }
]
export default function Listproduit(){
    return(
        <div className="Listproduit">
            {
            products.map((elem)=><Produit titre={elem.titre} oprix={elem.oprix} nprix={elem.nprix}/>)
            }
        </div>
    );
}