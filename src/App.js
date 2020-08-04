import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
 const [active,setActive]=useState(false);
 const [color,setColor]=useState('#00759A');
 const [colorname,setColorname]=useState('Blue');
  const colors = [
    {
      hex: '#00759A',
      name: 'Blue'
    },
    {
      hex: '#F7941D',
      name: 'Orange'
    },
    {
      hex: '#A71930',
      name: 'Red'
    },
    {
      hex: '#679146',
      name: 'Green'
    }
  ];
const toggleDropdown=()=>{
  setActive(!active);
}
const handlgd=(name,color)=>{
  setColor(color);
  setColorname(name);
}
  
  
  return (
    <div className="App">
      <header className="App-header">
    <div id="color-picker">
<div class="wrapper-dropdown">
	<span onClick={()=>toggleDropdown()} >
    
  <span  style={{background:color}}>
  </span>
  {colorname}
  
  </span>
  {active && 
	<ul class="dropdown">
    {colors.map((color)=>(
      	<li onClick={()=>handlgd(color.name,color.hex)}>
        <span  style={{background:color.hex}}></span>{color.name}</li>
    )
    )}
	
	</ul>
}
</div>
</div>
      </header>
    </div>
  );
}

export default App;
