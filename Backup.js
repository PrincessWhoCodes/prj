import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';

import {useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import ddone from './checkmark-48.png';
import dback from './databackup-40.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


       


function Backup(){
    var timediff = 0;
    useEffect(()=>{
       
      
    var lastback = new Date(localStorage.getItem('lastBackup'));
    var today = new Date();
        var diff = today.getTime() - lastback.getTime();
        timediff = Math.floor(diff/(1000*60*60*24));
       

        
       	
       
       
        });
        

    const createbackup=()=>{
        $.ajax({type:"POST",url:"http://localhost/php/backdatabse.php",success(data){
            var obj = JSON.parse(data);
            if(obj.es == "success"){
                     document.getElementById("success").innerHTML=obj.res;
                     document.getElementById("success").style.display="";
                     document.getElementById("fail").innerHTML="";
                     document.getElementById("fail").style.display="none";
                     var currentDate = new Date();
                     localStorage.setItem("lastback",currentDate);
                     window.location.reload();
                }
                else{
                     document.getElementById("success").innerHTML="";
                     document.getElementById("success").style.display="none";
                     document.getElementById("fail").innerHTML=obj.res;
                     document.getElementById("fail").style.display="";
                }
        }});
    }
    return(
        <>
    <Container style={{borderRadius:"25px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",width:"30rem"}}>
    <h1 align="center"><span style={{color:"rgb(248, 161, 27)"}}>Database </span>BackUp</h1>
    <br/>
    <br/>
    <div align="center">{ timediff>0?<img src={dback} />:<img src={ddone} />}
    <br/>
    <br/>
    { timediff>0?<Button variant="success" onClick={createbackup}>Backup Database</Button>:<Button variant="success" disabled>Backedup Already</Button>}
    </div>
    <br/>
    <br/>
    <h6>Last Backup : {localStorage.getItem("lastback")}</h6>
    <br/>
    </Container>
</>
);
}
export default Backup;