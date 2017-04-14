var url = "";

// Get All Input Elements
var nameInput = 
var ageInput = 
var genderInput = 

// Get Button Element
var button = 

// On Click, POST request
button.addEventListener("click", function(e) {
    axios({
      method: '',
      url: url,
      // To communicate with this API,
      // `params` must be used.
      params: { 
      }
    })
    .then(function (response) {
      alert("Success!")
    })
    .catch(function (error) {
      console.log(error);
    });
})
