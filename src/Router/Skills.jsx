import React from "react";
import './Skills.css'



const Skills = () => {
    return(
      <div class="container text-center mt-3"  >
  <div class="row">
    <div class="col">
       <div  id="skills">
        <p class="h3">Front End</p>
        <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
   <span>HTML</span> 
<div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar" style={{"width": "90%"}}>90%</div>
</div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    CSS
    <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar" style={{"width": "70%"}}>70%</div>
</div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Javascript
   <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar" style={{"width": "60%"}}>60%</div>
</div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   React 
   <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar" style={{"width": "65%"}}>65%</div>
</div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Redux
   <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar" style={{"width": "30%"}}>40%</div>
</div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Next Js
   <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar" style={{"width": "20%"}}>20%</div>
</div>
  </li>
</ul>
</div> </div>
<div class="col">
      <div >
        <p class="h3">Back end</p>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
           Node JS
          <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar" style={{"width": "20%"}}>20%</div>
          </div>
         </li>
         <li class="list-group-item d-flex justify-content-between align-items-center">
           Graph QL
          <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar" style={{"width": "20%"}}>20%</div>
          </div>
         </li>
         <li class="list-group-item d-flex justify-content-between align-items-center">
         Apollo/Client GraphQL
          <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar" style={{"width": "10%"}}>10%</div>
          </div>
         </li>
        </ul>
        </div>
        </div>
    
      
      
       </div>
       <div class="row mt-3" >
        <div class="col-6">
          <div>
        <p class="h3">Tools</p>
        <ul class="list-group-tools" style={{paddingLeft:"0px"}}>
        <li class="list-group-item d-flex justify-content-between align-items-center " style={{"width":"458px"}}>
        Visual Studio Code
          <div class="progress" style={{"width":"200px"}} role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar progress-bar" style={{"width": "90%"}}>90%</div>
          </div>
         </li>

        </ul>
        </div>
        </div>
        </div>
       </div>
 
    )
}

export default Skills;