/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './home.css';
import delivery from '../../delivery.jpg';
import {  useNavigate } from 'react-router-dom'
import { Meals } from '../mealsList/Meals';

export function Home() {
  const navigate = useNavigate();
  return (
    <>
        <button onClick={()=>navigate("/login")}>
            Se connecter
        </button>
        <div className='container'>
          <div className='col1'>
            <h1>Faites vos commandes</h1><br/>
            <h2>Avec une livraison rapide</h2>
          </div>
          <div className='col2'>
            <img src={delivery} />
          </div>
        </div>
        <Meals/>
    </>
  )
}

