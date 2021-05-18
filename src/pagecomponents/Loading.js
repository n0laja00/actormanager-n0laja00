import React from 'react';
import {Spinner} from 'react-bootstrap';

const Loading = () => {
    return (
        <div className="row justify-content-center mt-5">
           <Spinner className="mt-5" animation="border" role="status" variant="danger" >
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
      );
}
 
export default Loading;
