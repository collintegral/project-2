// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

//Activates navbar burger when viewing on mobile
const auth = require("../../auth");
auth.initialize();

$(".navbar-burger").click(() => {
  if ($(".sidebar").css("display") == "block") {
    console.log("close menu");
    $(".sidebar").css("display", "none");
  } else {
    console.log("open menu");
    $(".sidebar").css("display", "block");
  }
});

//JS for modal
$(".modal").on("click", () => {
    $(".modal").toggleClass("is-active");
});

document.querySelectorAll(".modal-button").forEach(el => {
  el.addEventListener("click", () => {
    var target = document.querySelector(el.getAttribute("data-target"));

    target.classList.add("is-active");

    target.querySelector(".modal-close").addEventListener("click", () => {
      target.classList.remove("is-active");
    });
  });
});

let login = true;
auth.watchState();
if (auth.loggedIn === true) {
  $("#modalbtn").innerText = "Log Out";
}

$("#signupbtn").on("click", () => {
  if (login) {
    $("#confpassword").attr("visibility", "visible");
    $("#loginbtn").attr("visibility", "hidden");
    login = false;
  }
  else {
    const username = $("#email").val().trim();
    const password = $("#password").val().trim();
    const confpassword = $("#confpassword").val().trim();
    if (password === confpassword) {
      auth.newUser(username, password);
      $(".modal").toggleClass("is-active");
      $("#modalbtn").innerText = "Log Out";
    }
    else {
      alert("Error: passwords do not match. Please try again.");
    }
  }
});

$("#loginbtn").on("click", () => {
  const username = $("#email").val().trim();
  const password = $("#password").val().trim();
  auth.login(username, password);
  $(".modal").toggleClass("is-active");
  $("#modalbtn").innerText = "Log Out";
});

//JS for memo add
app.post("/textarea", (req, res) => {


  var newMemo = req.body;

  console.log(newMemo);

  characters.push(newMemo);

  res.json(newMemo);
});