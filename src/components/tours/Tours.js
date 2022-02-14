// const data = require("./data/db.json");
// //import data from "./data/db.json";


function toursInfo(props){
console.log(props.info);
return (

        props.info.map(dest =>{
return (
        <>
        
            
        <h1>info</h1>
            { 
            <div>
            
            <p>{dest.name}</p>
            
            <img src={dest.image}/>
            
            </div> }
            </>
        )
       
        
    })
   )
}
export default toursInfo;