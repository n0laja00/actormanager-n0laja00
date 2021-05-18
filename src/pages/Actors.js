import Cards from "../pagecomponents/Cards";

const Actors = () => {
    return ( 
        <div className="actors">
            <div className="row mb-3 mt-5"><h1>Actors</h1></div>
            <div className="row actors_content justify-content-center">
                <Cards type={"actor"}/>
            </div>
        </div>
     );
}
 
export default Actors;