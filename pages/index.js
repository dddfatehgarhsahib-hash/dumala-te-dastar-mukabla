import Link from "next/link"

export default function Home(){

return(

<div style={{
textAlign:"center",
padding:"40px",
background:"linear-gradient(orange,gold)",
minHeight:"100vh"
}}>

<h1 style={{color:"#7a0000"}}>

ਪੰਜਵਾਂ ਦਸਤਾਰ ਤੇ ਦੁਮਾਲਾ ਮੁਕਾਬਲਾ

</h1>

<h2>

ਸਰਦਾਰੀਆਂ ਯੂਥ ਕਲੱਬ ਪਟਿਆਲਾ

</h2>

<p>

18 ਅਪ੍ਰੈਲ 2026 <br/>

ਗੁਰਦੁਆਰਾ ਸ਼੍ਰੀ ਦੂਖਨਿਵਾਰਨ ਸਾਹਿਬ ਪਟਿਆਲਾ

</p>

<b>ਸਿਰਫ ਪਟਿਆਲਾ ਜਿਲ੍ਹੇ ਦੇ ਬੱਚਿਆਂ ਲਈ</b>

<h3>Categories</h3>

<p>7-15</p>
<p>16-30</p>
<p>Only Dumala Girls</p>

<Link href="/register">

<button style={{
padding:"15px",
fontSize:"18px",
background:"darkred",
color:"white",
borderRadius:"10px"
}}>

Register Now

</button>

</Link>

</div>

)

}
