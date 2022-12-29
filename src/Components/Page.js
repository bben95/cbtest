import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const Page = (props) => {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [value,setValue]=useState('');
  const [tasks,setTasks]=useState([]);

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
      });
    
  let styleboxweb = {
    
    boxSizing: " border-box",
    width: "505px",
    height: "701px",
    position: "absolute",
    
left: "111px",
top: "114px",
paddingLeft:"3%",

    background: "#FFFFFF",
    border: "0.5px solid #878787",
    boxShadow: " 0px 4px 64px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  };
  let styleboxmobile = {
    
    boxSizing: "border-box",
    position: "absolute",
    width: "324px",
    height: "641px",
    left: "26px",
    top: "100px",
    paddingLeft:"6%",

    background: "#FFFFFF",
    border: "0.5px solid #878787",
    boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  };
  let styleinputweb={
    margin:"0px",

    width:"423px",
    height: "59px",
    boxSizing: "border-box",
    padding: "0px",
background: "#FFFFFF",
border: "0.6px solid #282828",
borderRadius: "6px",
paddingLeft:"15px"
  }
 let styleinputmobile={
    margin:"0px",

    width:"279px",
    height: "59px",
    boxSizing: "border-box",
    padding: "0px",
background: "#FFFFFF",
border: "0.6px solid #282828",
borderRadius: "6px"
  }
  let styleloginweb={
    background: "#000000",width:"423px",
    height: "59px",
borderRadius: "6px"}
let styleloginmobile={
    background: "#000000",width:"279px",
    height: "59px",
borderRadius: "6px"
}

  
  return (
    <div style={isDesktop?styleboxweb:styleboxmobile}>
        <p style={{fontWeight: "300",
            fontSize: "25px",
           lineHeight: "38px"
           }}>Hello !</p>
           <p style={{
            padding:"0px",
            margin:"0px",fontWeight: "500",
            fontSize: "31px",
           lineHeight: "46px"
           }}>John Doe</p>
           <p style={{
            
            fontWeight: "300",
            fontSize: "16px",
           lineHeight: "24px"
           }}>Good to see you here!</p>
           <div>
            <h4>Tasks for {date} :</h4>
            <ul>
             {tasks.map((item,i)=>{if(i<5)return<li>{item}</li>})}
            </ul>
            {tasks.length>5 && <p>Max tasks reached</p>}
           </div>

      <form style={{width:"inherit" ,position:"absolute",top:"65%"}} onClick={(e)=>{e.preventDefault()}}>
        
        <input value={value} style={isDesktop?styleinputweb:styleinputmobile} type="text" name="uname" placeholder='Eg. Need to finish my assigment' onChange={(e)=>{setValue(e.target.value)}} />
        <br />
        <br />
        
        <button style={isDesktop?styleloginweb:styleloginmobile} onClick={()=>{setTasks([...tasks,value]);setValue("")}}><span style={{color:"#FFFFFF"}}>Add New Task</span></button>
      </form>
      
        <span style={{color:"#000000",fontWeight: "500", position:"absolute",top:"90%", left:"45%"}} onClick={()=>{props.callbackset('login')}}>Logout</span>
      
    </div>
  );
};

export default Page;