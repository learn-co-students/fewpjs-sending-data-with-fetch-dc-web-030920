// Add your code here
document.addEventListener("DOMContentLoaded", () => {
    // submitData("name", "email")
}) 
const submitData = (userName, userEmail) => {

    const obj = {
        name: userName,
        email: userEmail,
    }

     return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => {
        document.body.innerHTML = data["id"]
    })
    .catch(error => document.body.innerHTML = error.message)
}