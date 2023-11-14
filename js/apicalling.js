
//  fetch("https://fakestoreapi.com/products")
//  .then(response => {
//     return response.json();
    
//  }).then(data=>{
//     let tabledata ="";
//     data.map((data)=>{
//        tabledata += `<tr>
//        <td>${data.id}</td>
//        <td>${data.title}</td>
//        <td>${data.price}</td>
//      </tr>`

//     })
//     document.getElementById("apicontent").innerHTML=tabledata;
//  })
//  .catch(error => {
//    console.error(error);
//  });

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


async function fetchData() {
   try {
       // Make an API request using fetch
       const response = await fetch('https://fakestoreapi.com/produc');

       // Check if the request was successful (status code 200-299)
       if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
       }

       // Parse the response JSON
       const data = await response.json();

       // Log the data
       console.log(data);
   } catch (error) {
       // Handle errors
       console.error('Error fetching data:', error.message);
   }
}

// Call the asynchronous function
fetchData();


   