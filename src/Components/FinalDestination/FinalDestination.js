import React, { useEffect, useState } from 'react';
import rideData from '../Data/Data'
const FinalDestination = () => {
    const [ride, setRide] = useState([])
    useEffect(() => {
        setRide(rideData)
    }, [])
    console.log(ride);
    return (
        <div>
            <div className="col-lg-5 col-md-5 col-sm-12">
                <h1>This is 1st div</h1>
            </div>
            <div className="col-lg-7 col-md-5 col-sm-12">
                <h1>This is 2nd div</h1>
            </div>
        </div>
    );
};

export default FinalDestination;