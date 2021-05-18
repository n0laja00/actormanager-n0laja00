import { Card, Button } from 'react-bootstrap';
import Cards from '../pagecomponents/Cards';
const Games = () => {
    return ( 
        <div className="games">
            <div className="row mb-3 mt-5"><h1>Games</h1></div>
            <div className="row games_content justify-content-center">
                <Cards type={"game"}/>
            </div>
        </div>
     );
}
 
export default Games;