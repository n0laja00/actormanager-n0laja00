import Cards from "../pagecomponents/Cards";

const Continents = () => {
    return ( 
        <div className="continents">
            <div className="row mb-3 mt-5"><h1>Continents</h1></div>
            <div className="row continents_content justify-content-center">
                <Cards type={"continent"}/>
            </div>
        </div>
     );
}
 
export default Continents;