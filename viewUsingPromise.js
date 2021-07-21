/*
Purpose : View and modify emplyee contents using ajax and promise.
@Author : Hrishikesh
@Since : 21/07/2021
@Version : 1.0
*/

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
//URL in localhost for json server
const getURL = " http://localhost:3000/employees/";
const postURL = " http://localhost:3000/employees/";
const deletetURL = " http://localhost:3000/employees/4";

//This function makes a promise call
function makePromiseCall(method ,url ,data=null){
    return new Promise (function(resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            console.log("State changed. Ready state:"+xhr.readyState+" Status: "+xhr.status)
            let status = xhr.status;
            if((status >=200 && status < 400) ){
                resolve(xhr.responseText)
            }
            else{
                reject({
                    status : xhr.status,
                    statusText : xhr.statusText
                })
            }
        }
        xhr.open(method,url,false)
        if(data){
            console.log('Sending data :'+JSON.stringify(data))
            xhr.setRequestHeader('Content-Type','application/json')
            xhr.send(JSON.stringify(data))
        }
        else{
            xhr.send()
        }
        console.log(method +" Request sent to server")
    })
}

makePromiseCall('GET',getURL).then(responseText => {
    console.log("Get user data "+responseText)
}).catch(error => console.log("Error status : "+JSON.stringify(error)))

makePromiseCall('DELETE',deletetURL).then(responseText => {
    console.log("User deleted :"+responseText)
}).catch(error => console.log("Delete Error status : "+JSON.stringify(error)))

const empData = {"name":"Hary","Salary":"5000"};
makePromiseCall('POST',deletetURL,empData).then(responseText => {
    console.log("User added :"+responseText)
}).catch(error => console.log("POST Error status : "+JSON.stringify(error)))