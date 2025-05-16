function checkEntry() {
  
  //console.log(document.getElementById("ageInput").valueusnumber);
  //console.log(document.getElementById("vipInput").checked);

  let age = document.getElementById("ageInput").name;
  let vip = document.getElementById("vipInput").checked;

  console.log(document.getElementById("ageInput").valueusnumber);
  console.log(document.getElementById("vipInput").checked);


  console.log(age, vip);

  if (age >= 18) {
    alert("access denied");
  } else {
    alert("access granted");
  }
}
