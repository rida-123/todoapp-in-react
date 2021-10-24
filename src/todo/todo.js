import { useState } from 'react';
import './todo.css'
export default function Todo(){
  let [item,setItem]=useState("");
  let [array,setArray]=useState([]);
  let [toggle,setToggle]=useState(true);
let [editItem,setEditItem]=useState(null)
 

 
  const addItem=(e)=>{
    e.preventDefault();
    if(item==""){
      alert("please enter some items")
    }
    else if(item && !toggle){
      setArray(
        array.map((elem)=>{
    if(elem.id===editItem){
      return {...elem,name:item}
    }
    return elem
        })
      )
      setToggle(true);
setItem("")
setEditItem(null)
    }
else{
     let newArr={
       id:new Date().getTime().toString(),
       name:item,
       isComplete:false
    
     }
     setArray([...array,newArr])
    setItem("")
  
  }
}
const deleteItems=(i)=>{
setItem(array.splice(i,1))
setItem([...item])



}
const line=(i)=>{
const mark=[...array];
mark[i].isComplete=!mark[i].isComplete;
setArray(mark)

}
const deleteAll=()=>{
  setArray([])
}
const edit=(id)=>{
let newEdit=array.find((elem)=>{
return elem.id===id;
}
)
console.log(newEdit);
setToggle(false);
setItem(newEdit.name)
setEditItem(id)
}


    return (
  <>
        <div className="main">
            <h4 style={{textAlign:"center",paddingTop:"20px", fontWeight:"bold" ,color:"#C4E449",textShadow:"3px 3px #4EC5C1"}}>To Do List</h4>
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="items" type="text" class="validate" value={item} onChange={(e)=>setItem(e.target.value)} />
          <label for="items">Add Items</label>
         
        </div>
      </div>
{toggle ?<button  className="add" onClick={addItem} >Add</button>:<button  className="add" onClick={addItem} >Update</button>}
    </form>
  </div>
 
   {
     array.map((item,index)=>{
       return <div className="itemDiv">
         <i className="material-icons">radio_button_unchecked


</i> 
              <h6 className={item.isComplete?"strike":"notStrike"} onClick={()=>line(index)} style={{display:"inline" ,marginLeft:"20px" ,cursor:"pointer"}}>{item.name} </h6>
              <i onClick={()=>deleteItems(index)}  className="material-icons" style={{float:"right", cursor:"pointer",color:"red"}}>delete_forever</i>
    
              <i onClick={()=>edit(item.id)} className="material-icons" style={{float:"right", cursor:"pointer",color:"purple"}}>edit</i>
          </div>
     })
   }

    
    
<button class="btn1" onClick={deleteAll}>Clear All</button>


        </div>
       
        </>
    )}  
           
        
     
 