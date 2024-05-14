import React, { useEffect , useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import pizzas from '../pizzadata';
import Pizza from '../components/Pizza'; // Assurez-vous d'importer le composant Pizza s'il n'est pas déjà importé
import getAllPizzas from '../actions/pizzaActions';

export default function Homescreen() {

const dispatch = useDispatch()
    useEffect (()=>{
dispatch(getAllPizzas())
    },[])
  return (
    <div>
        <div className="row">
            {pizzas.map(pizza => (
                <div className='col-md-4' >
                    <div>
                        <Pizza pizza={pizza} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
