import Cards from "../pagecomponents/Cards";


const Worlds = () => {
    return ( 
        <div className="worlds">
            <div className="row mb-3 mt-5"><h1>Worlds</h1></div>
            <div className="row worlds_content justify-content-center">
                <Cards type={"world"}/>
            </div>
        </div>
     );
}
 
export default Worlds;