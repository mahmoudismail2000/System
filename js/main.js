var fName = document.getElementById("firstName");
var sName = document.getElementById("secondName");
var email = document.getElementById("userEmail");
var password = document.getElementById("userPassword");
var password2 = document.getElementById("userPassword2");
var salary = document.getElementById("userSalary");
var profit = document.getElementById("userProfit");
var taxes = document.getElementById("userTaxes");
var total = document.getElementById("userTotal");
var mood='Create'
var temp;
var userData;
if(localStorage.product != null){
  userData=JSON.parse(localStorage.product);
  dataShow()

}else{
  userData=[];
}
function countSalary() {
  if (salary != null) {
    var count =
      Number(salary.value) + Number(profit.value) - Number(taxes.value);
    total.innerHTML = count;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
  }
}


function dataStore() {
  var userDetails = {
    fName: fName.value,
    sName: sName.value,
    email: email.value,
    password: password.value,
    password2: password2.value,
    salary: salary.value,
    profit: profit.value,
    taxes: taxes.value,
    total: total.innerHTML,
  }

  if(mood==='Create'){
    if (password.value == password2.value) {
        userData.push(userDetails)
        localStorage.setItem('product',JSON.stringify(userData));
        dataShow();
        clearData();
        document.getElementById("alertPassword").style.opacity = 0;
      } else {
        document.getElementById("alertPassword").style.opacity = 1;
      }

  }else{
    userData[temp]=userDetails;
    dataShow();
    clearData();
    submit.innerHTML='Create'
    mood='Create'
    total.style.background='brown'
  }
}

function dataShow() {
  var table = "";
  for (var i = 0; i < userData.length; i++) {
    table += ` 
        <tr class="text-center">
        <td>${i}</td>
        <td>${userData[i].fName}</td>
        <td>${userData[i].sName}</td>
        <td class="query">${userData[i].email}</td>
        <td class="query">${userData[i].password}</td>
        <td class="query">${userData[i].password2}</td>
        <td class="query">${userData[i].salary}</td>
        <td class="query">${userData[i].profit}</td>
        <td class="query">${userData[i].taxes}</td>
        <td>${userData[i].total}</td>  
        <td><button class="bg-primary py-2 px-lg-4 px-md-2 border border-0 rounded-2 text-white fw-bold" id="update" onclick="itemUpdate(${i})">Update</button></td>
        <td><button class="bg-danger py-2  px-lg-4 px-md-2 border border-0 rounded-2 text-white fw-bold" id="delete" onclick="itemDelete(${i})">Delete</button></td>
        </tr>`;
  }

  document.getElementById("tableData").innerHTML = table;
}

function clearData() {
  fName.value = "";
  sName.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";
  salary.value = "";
  profit.value = "";
  taxes.value = "";
  total.innerHTML = "";
}

function itemDelete(i) {
  localStorage.product=(JSON.stringify(userData.splice(i, 1)))
  dataShow();
}

function itemUpdate(i) {
 
  fName.value=userData[i].fName
  sName.value=userData[i].sName
  email.value=userData[i].email
  password.value=userData[i].password
  password2.value=userData[i].password2
  salary.value=userData[i].salary
  profit.value=userData[i].profit
  taxes.value=userData[i].taxes
  countSalary()
  submit.innerHTML='Update'
  mood='Update'
  temp=i;
  scroll({
    top:0,
    behavior:"smooth",
  })

  
 
}



