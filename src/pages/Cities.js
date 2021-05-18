import Cards from "../pagecomponents/Cards";

const Cities = () => {
    return ( 
        <div className="cities">
            <div className="row mb-3 mt-5"><h1>Cities</h1></div>
            <div className="row cities_content justify-content-center">
                <Cards type={"city"}/>
            </div>
        </div>
     );
}
 
export default Cities;