import React, { useEffect , useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Pizza from '../components/Pizza'; 
import getAllPizzas  from '../actions/pizzaActions';

export default function Homescreen() {

const dispatch = useDispatch()

const pizzasstate =useSelector (state=>state.getAllPizzasReducers )

const { pizzas, error, loading } = pizzasstate;

useEffect(() => {
    dispatch(getAllPizzas());
}, []);

return (
    <div>
        <div className="row">
            {loading ? (
                <h1>Loading</h1>
            ) : error ? (
                <h1>Something went wrong</h1>
            ) : (
                <div>{pizzas &&  pizzas.map((pizza) => (
                        <div className='col-md-4' key={pizza.id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

}