import { useState,useEffect } from 'react';
import './App.css';
import data from './output';
import patternsearch from './logic';

function App() {
     
        const[game,setgame]=useState(0)    
        const[puzzle,setPuzzle]=useState(data.puzzle[game]);
        const [error,setError]=useState(false);
        const [value,setValue]=useState([]);
        const [row,setRow]=useState([]);
        const [col,setCol]=useState([]);
        const [sword,setStrike]=useState([]);
        console.log(value);
        
        const[input ,setInput]=useState('');
        useEffect(()=>{
        setPuzzle(data.puzzle[game]);
        },[game]);
        
    
    
     

  return (
     <div id="main">
            <h1 style={{margin:"0px",color:"blue" ,textAlign:"center"}}>Cricket word search</h1>
            <div id="container">
                <div id="findWordCon" style={{marginLeft:"5px"}}>
                    
                    <h3>find words</h3>
                    <div id="words" >
                        {sword.length===puzzle.find_words.length?<h3 style={{color:"green"}}>You won</h3>:puzzle.find_words.map((name,j)=>{return <div className={sword.includes(j)?"strike":""}>{name}</div>})}
                    </div>
                </div>
                <div id="puzzlecon" style={{paddingLeft:"50px",paddingTop:"10px"}}>
                    <div>
                        <label htmlFor="selectgame" style={{fontSize:"25px",fontWeight:"500"}}>Select Game:</label>
                        <select name="Gamenum" id="selectgame" onChange={(e)=>{setgame(parseInt(e.target.value));setRow([]);setCol([]);setStrike([])}}>
                            <option value="0" >Game1</option>
                            <option value="1" >Game2</option>
                        </select>
                    <input type="text" onChange={(e)=>{setInput(e.target.value);setError(false)}}/>
                    <button onClick={()=>{if(patternsearch(puzzle.Alphabet_grid,input)){let res=patternsearch(puzzle.Alphabet_grid,input);setRow([...res[0]]);setCol([...res[1]]);setStrike([...sword,puzzle.find_words.indexOf(input)])}else{setError(true)}}}>Submit</button>
                    </div>
                    <div id="table" style={game===0?{width: "350px",
                           display: "grid",paddingTop:"0px",
                        gridTemplateColumns: "repeat(17,1fr)"}:{width: "350px",paddingTop:"40px",
                        display: "grid",
                     gridTemplateColumns: "repeat(16,1fr)"}}>
                     { 
                        puzzle.Alphabet_grid.map((wordline,i)=>{ let str= wordline.split(""); return(str.map((word,j)=>{return <div className={(row.includes(i)&&col.includes(j))?"wordsyellow":"wordswhite"} id={ `${i}${j}`} >{word}</div>}))})
                    }
                    </div>
                    
                </div>
                {error===true && <h2 style={{color:"red" ,position:"absolute",left:"600px",top:"200px"}}>Word not found</h2>}
            </div>
            
        </div>
  )

                }
export default App;
