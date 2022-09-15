import { React , useEffect , useState} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export function Meals() {
  const [data,setData] = useState([]);

	useEffect(() => {
		const promise = axios.get("http://localhost:8080/meals/");
		promise.then((res) => {
			setData(res.data);
			console.log(res.data);
		})
		.catch((err)=> {
			console.log(err);
		})
		

	return (
	  <Table>
		<thead>
		  <tr>
			<th>Plats</th>
			<th>Prix</th>
			<th>Categorie</th>
		  </tr>
		</thead>
		<tbody>{
			data.map((elt, k) => (
				<tr key={k}>
					<td className="p-2">{elt?.name}</td>
					<td className="p-2">{elt?.unit_price}</td>
					<td className="p-2">{elt?.category}</td>
				</tr>))}
		</tbody>
	  </Table>
  )
  })}
