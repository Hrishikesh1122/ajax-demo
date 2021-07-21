/*
Purpose : View and modify emplyee contents using ajax
@Author : Hrishikesh
@Since : 21/07/2021
@Version : 1.0
*/

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
//URL in localhost for json server
const getURL = " http://localhost:3000/employees/";

//This function makes a ajax call to json server and prints its contents
function makeAjaxCall(URL){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',URL,true);

    xhr.onload = function (){
        if(this.status===200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)
        }else{
            console.log("Error occured"+this.status)
        }
    }
    xhr.send();
}
makeAjaxCall(getURL);