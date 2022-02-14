//const data = require("./data/db.json");
//import data from "./data/db.json";


function toursInfo(props){

        props.data.map(data =>{
return (
        <>
            <div>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.info}</p>
            <img src={data.image}/>
            <p>{data.price}</p>
            </div>
        </>
        )
    })
}
export default toursInfo;