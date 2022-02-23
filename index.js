/* // Add your code here
const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify({
            dogName: "Byron",
            dogBreed: "Poodle"
    })
}

fetch('http://localhost:3000/dogs', configurationObject)
.then(res => res.json())
.then(data => console.log(data)) */

function submitData(userName, userEmail) {
    const submitDataPost = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch('http://localhost:3000/users', submitDataPost)
    .then(response => response.json())
    .then(userInfo => {
        //console.log(userInfo.id)
        let p = document.createElement('p')
        p.textContent = userInfo.id
        return document.querySelector('body').appendChild(p)
    })
    .catch(error => {
        let p = document.createElement('p')
        p.textContent = error
        return document.querySelector('body').appendChild(p)
    })
}

submitData("Andrew", "sample@sample.org")

