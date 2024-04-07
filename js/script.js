const randomFolks = document.querySelector(".random-peeps");

///start
const getData = async function () {
     const usersRequest = await fetch("https://randomuser.me/api?results=5"
     );  // the API 
const data = await usersRequest.json();  // the json file

const userResults = data.results; // array of objects
displayUsers(userResults); // Step 11. call your displayUsers function and pass it 
                         //..to userResults array as an argument.  

                         //console.log(data);  // contents to make sure you don't duplicate any DOM elements.
};

getData();

const displayUsers = function (userResults) { //create a new function expression 
// "displayUsers" with para of "userResults"  which will be an array
     
     randomFolks.innerHTML = "";  // clear the randomFolks element contents to make 
                                   //..sure you don't duplicate any DOM elements.

for (const user of userResults) { // Next, loop over userResults. For every "user" 
     const country = user.location.country;  //..select country, first name,  
     const name = user.name.first; ///.. and avatar URL with a size of medium. 
     const imageUrl = user.picture.medium;
     const userDiv = document.createElement("div"); // create a div element "userDiv" 
          //.. using "document.createElement" and populate its "innerHTML" c below
     
userDiv.innerHTML = `
     <h3>${name}</h3>
     <p>${country}</p>
     <img src=${imageUrl} alt="User avatar" />
     `; 

     randomFolks.append(userDiv); // Append userDiv to the randomFolks element 
     }

};

