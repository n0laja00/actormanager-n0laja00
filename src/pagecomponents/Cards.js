import React, {useState, useEffect} from 'react'
import uuid from 'react-uuid';
import { Card, Button } from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import Loading from './Loading';

const Cards = ({type}) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState('');
    const URL="http://localhost/actormanager/";
    const [test, setTest] = useState("test")


    const  [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch(URL + "getAll.php?type="+type)
        .then(
            response => response.json()
        ).then (
            (result) => {
                setCards(result);
                setIsLoaded(true);
            }, (error) => {
                setError(error);
                setIsLoaded(false);
            }
        );
    }, []);

    function del(id, type){
    
        let status=0;
        fetch(URL + "del.php", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: type,
              id: id
              
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
            if (status === 200) {
            const newCards = cards.filter((item) => item.id !==id);
            setCards(newCards); 
            } else {
            alert(res.error);
            }
            }, (error) => {
            alert(error);
            }
        )
        };

    if(!isLoaded){
        return(<Loading/>)
    } else {  
        return ( 
            <>
                {cards.map(item=> (
                        <Card key={uuid()} style={{ width: '18rem' }} className="col-4 m-1 GameCard_height">
                            <Card.Img variant="top" src="http://www.clker.com/cliparts/E/1/G/s/n/x/ten-sided-dice-md.png" />
                            <Card.Body>
                                <Card.Title className="gameCard_title">{item.name}</Card.Title>
                                <div className={"gameCard_ruleSet" + ` div ${item.ruleSet ? "" : "hidden"}`}>{item.ruleSet}</div>
                                <hr />
                                <Card.Text className={"mt-1 text"}>
                                    {item.description}
                                </Card.Text>
                                <div className="row">
                                    <Route>
                                        <Link to={"/information/"+`${type}`+`/`+`${item.id}`} className="navbar_link">Select</Link>
                                    </Route>
                                    <Button onClick={e => del(item.id, type)} variant="warning">Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                ))}
            </>
        );
    }
}
 
export default Cards;