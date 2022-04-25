//alert("works")

document.querySelector('#search').addEventListener('click', search)

function search(){
    let fName = document.querySelector('.fName').value
    let lName = document.querySelector('.lName').value

    fetch(`https://wizard-world-api.herokuapp.com/Wizards?FirstName=${fName}&LastName=${lName}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          console.log(fName, lName)
          document.querySelector('h2').innerText = `1. ${data[0].elixirs[0].name}
          2. ${data[0].elixirs[1].name}`
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}
