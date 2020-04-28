// // Add your code here
// Resources
// http://localhost:3000/dogs
// http://localhost:3000/cats
const usersURL = "http://localhost:3000/users"
// http://localhost:3000/robots

// Home
// http://localhost:3000

function submitData(value1, value2) {

    let data = {
        name: value1,
        email:  value2
    }

    
    
    let configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(data)
        };

    

    return fetch(usersURL, configurationObject)
    .then(res => res.json()) 
    // .then(newUser => {
    //     console.log("successfuly created a new user", newUser);
    //     renderUser(newUser)
    // })
    .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
    .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
    ;

    function renderUser(event) {
        let x = document.querySelector("script")
        let userId = event.id
        x.innerText = `The user id is: ${userId} ` 
    }


}


