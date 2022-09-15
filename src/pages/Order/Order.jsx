import { React , useEffect , useState} from 'react'
import Table from 'react-bootstrap/Table';
import './order.css'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';


export function Order() {
  const navigate = useNavigate();

  const [data,setData] = useState([]);

	useEffect(() => {
		const promise = axios.get("http://localhost:8080/orders/");
		promise.then((res) => {
			setData(res.data);
			console.log(res.data);
		})
		.catch((err)=> {
			console.log(err);
		})

  return (
    <>
    <button onClick={()=>navigate("/")}>
            Se déconnecter
        </button>
    <Table>
    <thead>
		  <tr>
			<th>Nom</th>
			<th>Prenom</th>
			<th>Téléphone</th>
      <th>Adresse</th>
      <th>Date de livraison</th>
      <th>Repas</th>
		  </tr>
		</thead>
		<tbody>{
			data.map((elt, k) => (
				<tr key={k}>
					<td className="p-2">{elt?.lastName}</td>
					<td className="p-2">{elt?.firstName}</td>
					<td className="p-2">{elt?.address}</td>
          <td className="p-2">{elt?.deliveredDate}</td>
          <td className="p-2">{elt?.meal}</td>
				</tr>))}
		</tbody>
    </Table>
    </>
  );

})}

