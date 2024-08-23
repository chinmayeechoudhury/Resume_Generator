function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewLGField(){
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("languageField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here")

    let lgOb=document.getElementById("lg");
    let lgAddButtonOb=document.getElementById("lgAddButton");

    lgOb.insertBefore(newNode, lgAddButtonOb);
}


//generating cv
function generateCV(){
    document.getElementById("nameT1").innerHTML=document.getElementById("nameField").value.toUpperCase();
    document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value.toUpperCase();
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // language

    let lng=document.getElementsByClassName("languageField");

    let str2="";

    for(let e of lng){
        str2 +=`<li>${e.value}</li>`;
    }
    console.log(str2);
    document.getElementById("lgT").innerHTML=str2;

    //work experience

    let wes=document.getElementsByClassName("weField");

    let str="";

    for(let e of wes){
        str=str +`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;

    // ack
    let aqs=document.getElementsByClassName("eqField");

    let str1="";

    for(let e of aqs){
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    // code for setting img
    let file=document.getElementById("imgField").files[0];
    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the img to template

    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    };

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
function printCV(){
    window.print();
}