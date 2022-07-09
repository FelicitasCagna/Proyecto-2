class User{
    constructor(id,name,email,password,admin){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.admin = admin;
    }
}

let users;
const usersFromLS = JSON.parse(localStorage.getItem("users"));
if(usersFromLS){
    users = usersFromLS
} else {
    users = [
        new User(1, "Galileo Erazo", "galileokpo@hotmail.com", "capice123", true),
        new User(2, "Fran Perez", "fran@perez.com", "adminadmin", true),
        new User(3, "Felicitas Cagna", "feli@cagna.com", "nimdaadmin", true),
        new User(4, "Marcio Pereyra", "marcio@pereyra.com", "contraseña", true)
    ]
    localStorage.setItem("users", JSON.stringify(users))
}


const login = (event)=>{
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    if(emailOk){
        let userFound = users.find(user=>user.email==email);
        if(userFound && userFound.password == pass){
            localStorage.setItem("user",userFound.id)
            window.location.assign(window.location.origin + "/index.html")
        } else {
            errorMessage();
        }
    } else {
       errorMessage();
    }
}

function errorMessage(){
    let error = document.createElement("div");
       error.innerText = "Credenciales incorrectas, volvé a intentarlo";
       error.classList.add("alert","alert-info", "mt-4");
       let alert = document.getElementById("login-rolling");
       alert.appendChild(error);
       setTimeout(()=>{error.remove()},3000)
}

function loginEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "galileoerazo2000@gmail.com",
        Password : "38B9BBA023D2C801AC0BD48FF1B3230B138F",
        To : 'galileoerazo2000@gmail.com',
        From : "galileoerazo@gmail.com",
        Subject : "Holas",
        Body : "Aguante JavaScript :)"
    }).then(
      message => alert(message)
    );
}

const register=(event)=>{
    event.preventDefault();
    let fullName = document.querySelector("#fullnameR").value
    let email = document.querySelector("#emailR").value
    let age = document.querySelector("#ageR").value
    let pass = document.querySelector("#passR").value
    let pass2 = document.querySelector("#pass2R").value

    let fullNameOk = /^([a-z A-Z]){4,35}$/.test(fullName);
    let emailOk= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    let ageOk = age>=16 && age<150;
    let passOk= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass);
    let pass2Ok= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass2);
    let equalPass = pass === pass2;

    console.log(fullNameOk , emailOk , ageOk , passOk , pass2Ok , equalPass);

    if(fullNameOk && emailOk && ageOk && passOk && pass2Ok && equalPass){
        let usersLS = JSON.parse(localStorage.getItem("users"));
            if(usersLS.find(user=>user.email==email)){
              console.log("Error, correo electrónico ya registrado");
            } else {
                usersLS.push(new User (users.length + 1, fullName, email, pass, false));
                localStorage.setItem('user',JSON.stringify(usersLS.length+1));
                window.location.assign(window.location.origin + "/index.html")
            }
            localStorage.setItem("users",JSON.stringify(usersLS))
    } else{
       alert("Error en las credenciales");
    } 
    }
