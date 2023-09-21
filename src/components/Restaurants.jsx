import React, { useEffect, useState } from 'react'
import Resturant from './Restaurant';
import './index.css'

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState();

    const getRestaurants = async () => {
        try {
            const response = await fetch('https://dcxgxxl3oym6r3wslpzpmrpac40fjebf.lambda-url.us-east-1.on.aws/');
            const data = await response.json();
            localStorage.setItem('activeRestaurants', JSON.stringify(data.data.filter(({ status }) =>  status === 'active')));
            setRestaurants(data.data.filter(({ status }) =>  status === 'active'));
            
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    useEffect(() => {
        const storedRestaurants = localStorage.getItem('activeRestaurants');

        if (storedRestaurants) {
            setRestaurants(JSON.parse(storedRestaurants));
        } else {
            getRestaurants();
        }
    }, [])

    return (
        <div className='restaurants-container' >
        <header className='header-container'>
            <h3>ID</h3>
            <h3>Name</h3>
            <h3>Support Email</h3>
            <h3>Date</h3>
            <h3># of Locations</h3>
        </header>
        <hr/>
            {restaurants && restaurants.map(restaurant => (
                <Resturant key={restaurant.id} data={restaurant} />
            ))}
        </div>
    )
}

export default Restaurants