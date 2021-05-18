import Cards from "../pagecomponents/Cards";

const Nations = () => {
    return ( 
        <div className="Nations">
            <div className="row mb-3 mt-5"><h1>Nations</h1></div>
            <div className="row nations_content justify-content-center">
                <Cards type={"nation"}/>
            </div>
        </div>
     );
}
 
export default Nations;