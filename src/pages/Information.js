import InformationText from "../pagecomponents/InformationText"
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Loading from "../pagecomponents/Loading";
import { Button } from 'react-bootstrap';


const Information = () => {
    const params = useParams();
    const type = params.type;
    const id = params.id;

    const [item, setItem] = useState([]);
    const  [isLoaded, setIsLoaded] = useState(false);
    const URL = "http://localhost/actormanager/";
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(URL + "getInformation.php?type="+type+"&id="+id)
        .then (res=>res.json())
        .then(
            (result) => {
                setItem(result);
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
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "type": type,
              "id": id
              
            })
            
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then(
            (res) => {
            if (status === 200) {
            console.log("del");
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
            <div>
                {item.map(item=>(
                    <div className="mt-2">
                        <h1>{item.name}</h1>
                        <p className="mt-5 col-5">{item.description}</p>
                        <Button onClick={e => del(id, type)} variant="warning">Delete</Button>
                    </div>
                ))}
                
            </div>
        );
    }
}
 
export default Information;