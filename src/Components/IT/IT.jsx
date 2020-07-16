import React from 'react';

import Card from 'react-bootstrap/Card'

import cProgramming from '../../Images/SL C.svg'
import SoftwareTesting from '../../Images/SL testing.svg'

function IT(props) {
    return (
        <div>
            <div className="HomeContainer">
              <Card>
                <Card.Img src={cProgramming} />
              </Card>
              <Card>
                <Card.Img src={SoftwareTesting} />
              </Card>
            </div>
            
        </div>
    );
}

export default IT;