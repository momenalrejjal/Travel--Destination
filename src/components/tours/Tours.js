

function Tours(props) {
    
    return (
        <div>{

            props.info.map(dest => {
                return (

                    <div>

                        <h1>info</h1>

                        <h2>{dest.name}</h2>

                        <img src={dest.image} alt={dest.name} />

                    </div>

                     )
                }
             )
        }</div>
           
            )
}
            export default Tours;