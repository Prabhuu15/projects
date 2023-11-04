
 fetch("https://fakestoreapi.com/products")
 .then(response => {
    return response.json();
    
 }).then(data=>{
    let tabledata ="";
    data.map((data)=>{
       tabledata += `<tr>
       <td>${data.id}</td>
       <td>${data.title}</td>
       <td>${data.price}</td>
     </tr>`

    })
    document.getElementById("apicontent").innerHTML=tabledata;
 })
 .catch(error => {
   console.error(error);
 });

// axios.get("https://fakestoreapi.com/products")
//   .then(response=>{
//     console.log(response)
//   })


// const request = new XMLHttpRequest();
// request.open("GET","https://fakestoreapi.com/products");
// request.send()
// request.onload=()=>{
//     if (request.status===200){
//         const data = JSON.parse(request.response);
//         console.log(data);  
//         }else{
//             console.error(`Error: ${request.status}`);
//         }
// }

