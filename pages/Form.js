import { useState } from "react"
import { db } from "../lib/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

export default function Form(){

const [name,setName]=useState("")
const [father,setFather]=useState("")
const [address,setAddress]=useState("")
const [age,setAge]=useState("")
const [group,setGroup]=useState("")
const [phone,setPhone]=useState("")
const [email,setEmail]=useState("")

async function submit(e){

e.preventDefault()

const snap = await getDocs(collection(db,"registrations"))

let count=snap.size+1

let token="DKP-"+String(count).padStart(3,'0')

await addDoc(collection(db,"registrations"),{

name,
father,
address,
age,
group,
phone,
email,
token

})

alert("Registration Successful. Token: "+token)

}

return(

<form onSubmit={submit}>

<input placeholder="ਬੱਚੇ ਦਾ ਨਾਮ" onChange={(e)=>setName(e.target.value)} required/><br/><br/>

<input placeholder="ਪਿਤਾ ਦਾ ਨਾਮ" onChange={(e)=>setFather(e.target.value)} required/><br/><br/>

<input placeholder="ਪਤਾ" onChange={(e)=>setAddress(e.target.value)} required/><br/><br/>

<input placeholder="ਉਮਰ" onChange={(e)=>setAge(e.target.value)} required/><br/><br/>

<select onChange={(e)=>setGroup(e.target.value)} required>

<option value="">ਉਮਰ ਗਰੁੱਪ</option>
<option>7-15</option>
<option>16-30</option>
<option>Dumala Girls</option>

</select><br/><br/>

<input placeholder="ਫੋਨ ਨੰਬਰ" onChange={(e)=>setPhone(e.target.value)} required/><br/><br/>

<input placeholder="ਈਮੇਲ" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>

<button type="submit">Submit</button>

</form>

)

}
