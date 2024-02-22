// Creating form element using function.

// Label Creation
function label_create(tagname,attrname,attrvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

// break tag creation
function break_create(){
    let ele=document.createElement("br");
    return ele;
}

// input input creation
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    let ele=document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    return ele;
}

// button creation
function button_create(tagname,attr1name,attr1value,attr2name,attr2value,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    ele.innerHTML=content;
    return ele;
}

let first_label = label_create("label","for","firstname","First Name:");
let first_input = input_create("input","type","text","id","firstname");

let middle_label = label_create("label","for","middlename","Middle Name:");
let middle_input = input_create("input","type","text","id","middlename");

let last_label = label_create("label","for","lastname","Last Name:");
let last_input = input_create("input","type","text","id","lastname");

let email_label = label_create("label","for","email","Email:");
let email_input = input_create("input","type","email","id","email");

let password_label = label_create("label","for","password","Password:");
let password_input = input_create("input","type","password","id","password");

let submit = button_create("button","type","submit","onclick","display_input()","Submit");

document.body.append(first_label,break_create(), first_input,break_create(),middle_label,
break_create(),middle_input,break_create(),last_label,break_create(),last_input,break_create(),
    email_label,break_create(),email_input,break_create(),password_label,break_create(),password_input,break_create(),submit);


 // Print inputs in body

function display_input() {

        let firstname = document.createElement("p");
        firstname.innerHTML=`First Name is : ${document.getElementById("firstname").value}`;

        let middlename = document.createElement("p");
        middlename.innerHTML=`Middle Name is : ${document.getElementById("middlename").value}`;

        let lastname = document.createElement("p");
        lastname.innerHTML=`Last Name is : ${document.getElementById("lastname").value}`;
    
        let email = document.createElement("p");
        email.innerHTML=`Email is : ${document.getElementById("email").value}`;

        let password = document.createElement("p");
        password.innerHTML=`Password is : ${document.getElementById("password").value}`;

        document.body.append(firstname, middlename, lastname, email, password);
}