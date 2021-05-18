import Cards from "../pagecomponents/Cards";

const Organisations = () => {
    return ( 
        <div className="organisations">
            <div className="row mb-3 mt-5"><h1>Organisations</h1></div>
            <div className="row organisations_content justify-content-center">
                <Cards type={"organisation"}/>
            </div>
        </div>
     );
}
 
export default Organisations;