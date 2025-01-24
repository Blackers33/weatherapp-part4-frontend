// Insert your code here

document.querySelector('#register').addEventListener('click', () => {
    console.log(document.querySelector('#registerName').value)
    fetch('https://weatherapp-part4-backend-kappa.vercel.app/users/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            name: document.querySelector('#registerName').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value
        }),
    })
        .then(data => data.json())
        .then(data => {
            if (data.result) {
                window.location.assign('index.html')
                return true
            }
        })


})

document.querySelector('#connection').addEventListener('click', () => {
    
    fetch('https://weatherapp-part4-backend-kappa.vercel.app/users/signin', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            email: document.querySelector('#connectionEmail').value,
            password: document.querySelector('#connectionPassword').value
        }),
    })
        .then(data => data.json())
        .then(data => {
            if (data.result) {
                window.location.assign('index.html')
                return true
            }
        })

})