const fullname = document.querySelector("#name");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const city = document.querySelector("#city");
const gender = document.querySelector("#gender");
const file = document.querySelector("#file");
const form = document.querySelector("#webform");

const showIError = (input, msg) => {
  const x = input.parentElement; // Refers <div class="field-icontrol">
  x.classList.remove("isuccess"); // Refers .form-control.isuccess class
  x.classList.add("ierror"); //Refers .form-control.ierror class
  const error = x.querySelector("span"); //Refers <span>
  error.textContent = msg; // Assign error message
};

const showISuccess = (input) => {
  const x = input.parentElement; // Refers <div class="field-icontrol">
  x.classList.add("isuccess"); // Refers .form-control.isuccess class
  x.classList.remove("ierror"); //Refers .form-control.ierror class
  const error = x.querySelector("span"); //Refers <span>
  error.textContent = ""; // Remove error messages
};

const showSError = (select, msg) => {
  const x = select.parentElement;
  x.classList.remove("ssuccess");
  x.classList.add("serror");
  const error = x.querySelector("span");
  error.textContent = msg;
};

const showSSuccess = (select) => {
  const x = select.parentElement;
  x.classList.add("ssuccess");
  x.classList.remove("serror");
  const error = x.querySelector("span");
  error.textContent = "";
};

const showFError = (fieldset, msg) => {
  const x = fieldset.parentElement;
  x.classList.remove("fsuccess");
  x.classList.add("ferror");
  const error = x.querySelector("span");
  error.textContent = msg;
};

const showFSuccess = (fieldset) => {
  const x = fieldset.parentElement;
  x.classList.add("fsuccess");
  x.classList.remove("ferror");
  const error = x.querySelector("span");
  error.textContent = "";
};

const checkFullName = () => {
  const username = fullname.value.trim();
  const min = 3,
    max = 30;
  if (username == "") {
    showIError(fullname, "please enter your name");
  } else {
    var regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(username) === false) {
      showIError(fullname, "only alphabets are allowed");
    } else if (username.length < 3 || username.length > 30) {
      showIError(
        fullname,
        `name must contain minimum ${min} and maximum ${max} letters`
      );
    } else {
      showISuccess(fullname);
    }
  }
};

const checkDob = () => {
  const Dob = dob.value.trim();
  if (Dob == "") {
    showIError(dob, "please enter your date of birth");
  } else {
    var regExp = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    if (regExp.test(Dob) === false) {
      showIError(dob, "please enter date in the format of dd-mm-yyyy");
    } else {
      showISuccess(dob);
    }
  }
};

const checkEMail = () => {
  const Email = email.value.trim();
  if (Email == "") {
    showIError(email, "please enter your email");
  } else {
    var regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExp.test(Email) === false) {
      showIError(email, "enter a valid email addresss");
    } else {
      showISuccess(email);
    }
  }
};

const checkPhoneNum = () => {
  const PhoneNum = phone.value.trim();
  if (PhoneNum == "") {
    showIError(phone, "please enter your phone number");
  } else {
    var regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(PhoneNum) === true) {
      showIError(phone, "only numbers are allowed");
    } else if (PhoneNum.length < 10) {
      showIError(phone, "please enter a valid 10-digit phone number");
    } else {
      showISuccess(phone);
    }
  }
};

const checkCity = () => {
  const City = city.value.trim();
  if (City == "-- Select --") {
    showSError(city, "please select your city");
  } else {
    showSSuccess(city);
  }
};

const checkGender = () => {
  var Gender = document.getElementsByTagName("input");
  var genderSelected = false;
  for (i = 0; i < Gender.length; i++) {
    if (Gender[i].type === "radio" && Gender[i].checked) {
      genderSelected = true;
    }
    if (!genderSelected) {
      showFError(gender, "please select your gender");
    } else {
      showFSuccess(gender);
    }
  }
};

const checkFile = () => {
  const File = file.value;
  if (File == "") {
    showIError(file, "please upload a file");
  } else {
    showISuccess(file);
  }
};

const debounce = (fun) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fun.apply(null, args);
    }, 300);
  };
};

email.addEventListener(
  "input",
  debounce(function (e) {
    checkEMail();
  })
);

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "name":
        checkFullName();
        break;
      case "dob":
        checkDob();
        break;
      case "phone":
        checkPhoneNum();
        break;
      case "city":
        checkCity();
        break;
      case "gender":
        checkGender();
        break;
      case "file":
        checkFile();
        break;
    }
  })
);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ischeckFullName = checkFullName();
  const ischeckDob = checkDob();
  const ischeckEmail = checkEMail();
  const ischeckPhoneNum = checkPhoneNum();
  const ischeckCity = checkCity();
  const ischeckGender = checkGender();
  const ischeckFile = checkFile();

  var Gender = document.getElementsByTagName("input");
  for (i = 0; i < Gender.length; i++) {
    if (Gender[i].type === "radio" && Gender[i].checked) {
      var genderVal = Gender[i].value;
    }
  }

  var Hobbies = []; //pushing checkboxes values into the hobbies array
  var checkboxes = document.getElementsByName("hobbies");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      Hobbies.push(checkboxes[i].value);
      var hobbiesVal = Hobbies.join(", ");
    }
  }

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const gender = genderVal;
  const hobbies = hobbiesVal;
  const file = document.getElementById("file").value;
  if(name == '' || dob == '' || email == '' || phone == '' || city == '' || gender == '' || file == ''){
    alert("please fill out all the form details");
  } else {
    createUserData(name, dob, email, phone, city, gender, hobbies, file);
  }
});

var users = [];

const createUserData = (
  name,
  dob,
  email,
  phone,
  city,
  gender,
  hobbies,
  file
) => {
  var user = {
    name: name,
    dob: dob,
    email: email,
    phone: phone,
    city: city,
    gender: gender,
    hobbies: hobbies,
    file: file,
  };
  users.push(user);
  readUserData();
  console.log(users);
  document.getElementById("webform").reset();
};

const readUserData = () => {
  var userhtml = document.getElementById("user");
  userhtml.innerHTML = "";
  for (var i = 0; i < users.length; i++) {
    userhtml.innerHTML += `<div class="card">
    <p><b>Full Name:</b> ${users[i].name}</p>
    <p><b>Date of Birth:</b> ${users[i].dob}</p>
    <p><b>E-mail:</b> ${users[i].email}</p>
    <p><b>Phone Number:</b> ${users[i].phone}</p>
    <p><b>City:</b> ${users[i].city}</p>
    <p><b>Gender:</b> ${users[i].gender}</p>
    <p><b>Hobbies:</b> ${users[i].hobbies}</p>
    <p><b>File:</b> ${users[i].file}</p>
    <button style='font-size:15px;color:green' onClick="editUserData('${i}')" >Edit <i class='fas fa-edit'></i></button>
    <button style='font-size:15px;color:red' onClick="deleteUserData('${i}')" >Delete <i class='fas fa-trash-alt'></i></button>`;
  }
};

const editUserData = (index) => {
  var userhtml = document.getElementById("user");
  userhtml.innerHTML = "";
  for (var i = 0; i < users.length; i++) {
    if (i == index) {
      userhtml.innerHTML += `<div class="green">
      Full Name: <input type="text" id="editname" value="${users[i].name}">
      Date of Birth: <input type="text" id="editdob" value="${users[i].dob}">
      E-mail: <input type="email" id="editemail" value="${users[i].email}">
      Phone Number: <input type="text" id="editphone"  maxlength="10" value="${users[i].phone}">
      City: <select id="editcity">
              <option>${users[i].city}</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
            </select>
      Gender: <fieldset id="editgender">
                <div class="form-inline">
                  <input type="radio" name="gender" id="editgender" value="Male" />Male
                  <input type="radio" name="gender" id="editgender" value="Female" />Female
                  <input type="radio" name="gender" id="editgender" value="Transgender"/>Transgender
                 </div>
             </fieldset> 
      File: <input type="file" style="background-color: white;" id="editfile"/><br>
      <button style='font-size:15px;color:green' onClick="updateUserData('${i}')">Update</button>
      <button style='font-size:15px;color:red' onClick="readUserData()">Cancel</button></div>`;
    } else {
      userhtml.innerHTML += `<div class="card">
      <p>Full Name: ${users[i].name}</p>
      <p>Date of Birth: ${users[i].dob}</p>
      <p>E-mail: ${users[i].email}</p>
      <p>Phone Number: ${users[i].phone}</p>
      <p>City: ${users[i].city}</p>
      <p><b>Gender:</b> ${users[i].gender}</p>
      <p><b>Hobbies:</b> ${users[i].hobbies}</p>
      <p><b>File:</b> ${users[i].file}</p>
      <button disabled onClick="editUserData('${i}')">Edit</button>
      <button disabled onClick="deleteUserData('${i}')">Delete</button>`;
    }
  }
};

const updateUserData = (index) => {
  var Gender = document.getElementsByTagName("input");
  for (i = 0; i < Gender.length; i++) {
    if (Gender[i].type === "radio" && Gender[i].checked) {
      var genderVal = Gender[i].value;
    }
  }
  var Name = document.getElementById("editname").value;
  var DOB = document.getElementById("editdob").value;
  var Email = document.getElementById("editemail").value;
  var Phone = document.getElementById("editphone").value;
  var City = document.getElementById("editcity").value;
  var Gender = genderVal;
  var File = document.getElementById("editfile").value;

  users[index].name = Name;
  users[index].dob = DOB;
  users[index].email = Email;
  users[index].phone = Phone;
  users[index].city = City;
  users[index].gender = Gender;
  users[index].file = File;
  readUserData();
};

const deleteUserData = (i) => {
  if (confirm("Are you sure you want to delete this record permanently ?")) {
    users.splice(i, 1);
  }
  readUserData();
};
