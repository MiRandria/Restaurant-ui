import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

export function Login() {

    const navigate = useNavigate();
    
      return (
        <>
        <form>
        <div>
          <label>
            <input type="text" name="text" placeholder='Identifiant' className='text'/>
          </label>
        </div>
        <div>
          <label>
            <input type="password" name="password" placeholder='Mode de passe' className='text'/>
          </label>
        </div>
        <div>
          <input type="submit" value="CONNEXION" className='btn' onClick={()=>navigate("/order")}/>
        </div>
      </form>
      </>
      )
    }