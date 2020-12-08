 
  // Data From Api
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => genertatapi(json))
    
  const genertatapi = (json)=> {

    console.log(json)
    //Start Group One Of Clients
    const dataSet1 = `
      <div class="client"> 
        <p >Name : ${json[0].name}</p>
        <p >Email : ${json[0].email}</p>
        <p >The Address : ${json[0].address.city}</p>
        <p >Company Name : ${json[0].company.name}</p>
       </div>
    `
    const testDive = document.querySelector('.area-1');
    testDive.innerHTML = dataSet1;

    const dataSet2 = `
      <div class="client"> 
        <p >Name : ${json[1].name}</p>
        <p >Email : ${json[1].email}</p>
        <p >The Address : ${json[1].address.city}</p>
        <p >Company Name : ${json[1].company.name}</p>
       </div>
    `
    const testDive2 = document.querySelector('.area-2');
    testDive2.innerHTML = dataSet2;
    //End Group One Of Clients

    //Start Group Two Of Clients
    const dataSet3 = `
    <div class="client"> 
      <p >Name : ${json[2].name}</p>
      <p >Email : ${json[2].email}</p>
      <p >The Address : ${json[2].address.city}</p>
      <p >Company Name : ${json[2].company.name}</p>
     </div>
  `
  const testDive3 = document.querySelector('.area-3');
  testDive3.innerHTML = dataSet3;
  
    //End Group Two Of Clients

  }
  
  // Validation Form 

  let name =document.getElementById("name");
  let email =document.getElementById("email");
  let number =document.getElementById("number");
  const send1 =document.getElementById('send');

  const form1 =document.getElementById('form');
  const span1 = document.querySelector('.error1')
  const span2 = document.querySelector('.error2')
  const span3 = document.querySelector('.error3')


  form1.addEventListener('submit',(e)=>{
  e.preventDefault();
    if(name.value === "" ){
      span1.style.visibility="visible";
    }else{
      span1.style.visibility="hidden";
    }
    if(email.value===''){
      span2.style.visibility='visible';
    }else{
      span2.style.visibility="hidden";
    }


    if(number.value==='' || number.value.length <11){
      span3.style.visibility='visible';
    }else{
      span3.style.visibility="hidden";
    }
});