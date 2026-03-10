import { useEffect,useState } from "react"
import { db } from "../lib/firebase"
import { collection,getDocs } from "firebase/firestore"

export default function Admin(){

const [data,setData]=useState([])

useEffect(()=>{

async function load(){

const snap=await getDocs(collection(db,"registrations"))

setData(snap.docs.map(d=>d.data()))

}

load()

},[])

return(

<div>

<h1>Admin Panel</h1>

<table border="1">

<tr>

<th>Token</th>
<th>Name</th>
<th>Father</th>
<th>Phone</th>
<th>Group</th>

</tr>

{data.map((d,i)=>(

<tr key={i}>

<td>{d.token}</td>
<td>{d.name}</td>
<td>{d.father}</td>
<td>{d.phone}</td>
<td>{d.group}</td>

</tr>

))}

</table>

</div>

)

}
