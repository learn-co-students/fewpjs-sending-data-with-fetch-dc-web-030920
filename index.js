  
  // In submitData, write a valid POST request to http://localhost:3000/users using fetch().
  
  // This request should include:

  // - The destination URL
  // - Headers for 'Content-Type' and 'Accept' set to 'application/json'
  // - A body with the name and email passed in as arguments to submitData. 
  //   These should be assigned to name and email keys within an object. 
  //   This object should then be stringified.
  
  
// In submitData, write a valid POST request to http://localhost:3000/users using fetch().  
function submitData( name, email ) {
                     // - The destination URL
    return fetch( 'http://localhost:3000/users', {
            method: "POST",
            // - Headers for 'Content-Type' and 'Accept' set to 'application/json'
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            // - A body with the name and email passed in as arguments to submitData. This object should then be stringified.
            body: JSON.stringify( {name, email} )
      } )

      // Use a then() call to access the Response object and use its built 
      // in json() method to parse the contents of the body property.

      .then( function(response) {
        return response.json()
      } )

      // Use a second then() to access this newly converted object. 
      // From this object, find the new id and append this value to the DOM.

      .then( function(object) {
        document.body.innerHTML = object.id
      } )

    // For this final test, after the two then() calls on your fetch() request, add a catch().
    // When writing the callback function for your catch(), expect to receive an object on error 
    // with a property, message, containing info about what went wrong. Append this message to the 
    // DOM when catch() is called

      .catch( function(error) {
        alert("Failed to execute 'fetch' on 'Window'");
        document.body.innerHTML = error.message
      } )
  }
   
  

