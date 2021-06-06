import {Form, Col, Button} from 'react-bootstrap';
import React, { useState } from 'react'
import axios from 'axios';


const CreateAssetForm = () => {
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [ruleSet, setRuleSet] = useState("");
    const [description, setDescription] = useState("");
/*
    function handleSubmit(e) {
        e.preventDefault();

        const URL = "http://localhost/actormanager/";
        let status=0;
        fetch(URL + "createAsset.php", {
            method: 'POST',
            header: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: type,
              name: name,
              ruleSet: ruleSet,
              description: description
            })
        })
        .then(res => {
            status = parseInt(res.status);
            return res.json();
        })
        .then((res) => {
            if (status === 200) {
                console.log('win');
            } else {
                alert(res.error);
            }
        }, (error) => {
            alert(error);
        })

    };
*/

function handleSubmit(e) {
    e.preventDefault();
    const URL = "http://localhost/actormanager/";
    const article = JSON.stringify({               
        type: type,
        name: name,
        ruleSet: ruleSet,
        description: description });
    const header = { 
        
    };

    axios.post(URL +"createAsset.php", article, { header })
    .then(response => this.setState({ updatedAt: response.data.updatedAt }))
    .catch((error) => {
        console.error('There was an error!', error);
    });
    setDescription("");
    setName("");
    setRuleSet("");

}




    return (   
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select Asset Type</Form.Label>
                        <Form.Control as="select" defaultValue="Choose..." onChange={e=> setType(e.target.value)}  >
                            <option>Choose...</option>
                            <option value="game">Game</option>
                            <option value="world">World</option>
                            <option value="continent">Continent</option>
                            <option value="nation">Nation</option>
                            <option value="city">City</option>
                            <option value="organisation">Organisation</option>
                            <option value="actor">Actor</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name the {type}</Form.Label>
                    <Form.Control placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
                </Form.Group>
                
                <Form.Group controlId="formGridAddress3" className={` div ${type == "game" ? "game" : "hidden"}`}>
                    <Form.Label>Rule Set for the {type}</Form.Label>
                    <Form.Control placeholder="Rule Set Name" value={ruleSet} onChange={e=>setRuleSet(e.target.value)}/>
                </Form.Group>
               
                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Describe the {type}</Form.Label>
                    <Form.Control placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
                </Form.Group>

                <Form.File id="formcheck-api-regular">
                    <Form.File.Label>Regular file input</Form.File.Label>
                    <Form.File.Input />
                </Form.File>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
        </div>
        
      );
}
 
export default CreateAssetForm;