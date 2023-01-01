

let x=[-1,-1,-1,0,0,1,1,1];
let y=[-1,0,1,-1,1,-1,0,1];
let res=[]

function  patternsearch(arr,word){
  word=word.split("")
  for(let row=0;row<arr.length;row++){
    for(let col=0;col<arr[row].length;col++){
      if(search(arr,row,col,word)){
          return(search(arr,row,col,word));
      }
      }
    }
  }
  


function search(arr,row,col,word){
  let arrcol=arr[row]
  if(arrcol[col]!==word[0])
  return false;
  let len =word.length;
  
  for(let dir=0;dir<8;dir++){
      let resrow=[]; let rescol=[];
      resrow.push(row); rescol.push(col);
      let k, rd=row+x[dir],cd=col+y[dir];
      
      for(k=1;k<len;k++){
          if(rd>=arr.length||rd<0||cd>=arrcol.length||cd<0)
          break;
          let arrcd=arr[rd]
          if(arrcd[cd]!==word[k])
          break;
          resrow.push(rd);
          rescol.push(cd);
          rd+=x[dir];
          cd+=y[dir];
          
      }
      if(k===len)
      return [resrow,rescol]
  }
  return false;
}
export default patternsearch;


