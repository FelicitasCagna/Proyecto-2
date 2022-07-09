class Doctor{
    constructor(id, name, text, image, description, specialty ){
    this.id = id;
    this.name = name; 
    this.text = text;
    this.image = image;
    this.description = description;
    this.specialty = specialty;
    }
}


let doctors = [
    new Doctor(1,'Dra. Andía González, Valeria','Traumatologia Cadera','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_9TKZJWDGJOxVJyVQFLASzjjgPG4d4msBw&usqp=CAU','Especialista en Cirugía de Cadera - Cirugía Mini Invasivas - Microcirugías - Cirugía Percutanea - Reemplazos Articulares.','traumatologia'),
    new Doctor(2, 'Dr. Ortega Enrique','Traumatologia Miembro Superior - Hombro','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxYB_gMQISyl1I88w5F4Id8xPDzyqCWUu1A&usqp=CAU','','traumatologia'),
    new Doctor(3,'Dra. Batista, Margarita','Traumatologia Miembro Inferior - Pie','https://depor.com/resizer/_oYeuarrAc5K2J3lhGis4VhBxow=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WFBWABMVJRCPNIONBNSZKFURL4.png','Especialista en cirugía de Tobillo y Pie - Miembro Titular-Acreditado de la SAMECIPP (Sociedad Argentina de Medicina y Cirugía de Pie y Pierna).','traumatologia'),
    new Doctor(4, 'Dr. Pacios Jorge','Traumatologia y Ortopedia Infantil','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFa-i1308CqF4TnW7gfrkVqq5tUw72PQP6YA&usqp=CAU','','traumatologia'),
    new Doctor(5,'Dr. Lescano, José Humberto','Cardiologo Clinico','https://www.tvmovie.de/bilder/758/2015/08/26/52739-patrick-dempsey-greys-anatomy.jpg?itok=YEpjnsaw','Especialista en Holter de Presión Arterial y Ecocardiografia','cardiologia'),
    new Doctor(6,'Dr. Rodriguez, Roberto Fernando','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MlUNDlPckeg6kDYPYtcKCXHu6e96yPri4KDVbwaa-sYwWagONb_01i7YyAdhnZdMvIs&usqp=CAU','','cardiologia'),
    new Doctor(7,'Dra. Cisneros, Mirta Susana','Cardiologa','https://gluc.mx/u/fotografias/m/2021/3/18/f1280x720-47525_179200_5050.jpg','Holter de presión arterial, Ecocardiografía, Electrocardiografía, Cardiología adulto','cardiologia'),
    new Doctor(8,'Dra. Guerrero Molina, María Silvia','', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeV09dpcQZ7PrmR-d0dq5vAvg_lt1Lf8nrCxHKiF18lDB6-zzSyTFihbUwr-iO7lzq2o&usqp=CAU','','cardiologia'),
    new Doctor(9,'Dra. Moreno Lazarte, Marcela Cecilia','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqBVZKG1lqS3eiiQCuR5RtEEc1SS-_uJgDxvuLoylh9HnV1g3X07QisCWOTLZ3iGlkFw&usqp=CAU','','clinica'),
    new Doctor(10,'Dr. Morcos, Daniel Alberto','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaOwBxl9zpesywpimuFBaqbil55_UzYlZGqYoI1WBswjdi7EbREsYIPIA5pDt9I6Jz3w&usqp=CAU','','clinica'),
    new Doctor(11,'Dr. Tome Guzmán, Andrés Federico','','https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/series.batanga.com/files/Los-7-hombres-mas-atractivos-de-Greys-Anatomy.jpg','','clinica'),
    new Doctor(12,'Dra. Sabeh, Melisa Ianina','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFEJsBwsQRbqLBtJuAfQo_tGxFHKlTr6vUQ&usqp=CAU','','clinica'),
    new Doctor(13,'Dra. Ibáñez, Rossana del V.','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAZCCFmfQ2kitZ16X_6iC9CsyDkL0l1_l30wx2PEmUMzQJ4UtGuQ-zRslSVakEbeFyMQ&usqp=CAU','','neurologia'),
    new Doctor(14,'Dr. Ordóñez, Hernán Esteban','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4Tlscla6oL0mwJnj_w4ah5gS8B4Dg-UEMMFB8WLU9mWpKHG3SBfgL2FP7AmFxtnYCGg&usqp=CAU','','neurologia'),
    new Doctor(15,'Dra. Batista, Margarita','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ve3YIL87KDue9j3rQy0jLV8I5aM13lr8LGxAqAK36i1VzleZAM6vkSczeBQ5apuvtiI&usqp=CAU','','neurologia'),
    new Doctor(16,'Dr. Ovejero, Miguel Adolfo','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8oRnhCoT5IwMUvNVyWcswhrt3jk6e4HeNjDsQQPIaeG_0d3_W7NNz6r01HB9zpc7j8c&usqp=CAU','','neurologia')
]

localStorage.setItem('doctors',JSON.stringify(doctors));

doctors.forEach(doctor =>{
    if (doctor.specialty=='traumatologia') {
    console.log(doctor);
    let doctorCard = document.createElement('div');
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> ${doctor.text}</p>
    <a href= ${window.location.origin + '/detail-page.html#' + doctor.id} class="btn btn-primary">Sacar turno</a> 
    </div>
    `
    let traumaContainer = document.getElementById('trauma-container');
    traumaContainer.appendChild(doctorCard);
}
})
doctors.forEach(doctor =>{
    if (doctor.specialty=='cardiologia') {
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> ${doctor.text} </p>
    <a href= ${window.location.origin + '/detail-page.html#' + doctor.id} class="btn btn-primary">Sacar turno</a> 
    </div>
    `
    let cardioContainer = document.getElementById('cardio-container');
    cardioContainer.appendChild(doctorCard);
}
})
doctors.forEach(doctor =>{
    if (doctor.specialty=='clinica') {
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> ${doctor.text} </p>
    <a href= ${window.location.origin + '/detail-page.html#' + doctor.id} class="btn btn-primary">Sacar turno</a> 
    </div>
    `
    let cardioContainer = document.getElementById('clinica-container');
    cardioContainer.appendChild(doctorCard);
}
})
doctors.forEach(doctor =>{
    if (doctor.specialty=='neurologia') {
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> ${doctor.text} </p>
    <a href= ${window.location.origin + '/detail-page.html#' + doctor.id} class="btn btn-primary">Sacar turno</a> 
    </div>
    `
    let cardioContainer = document.getElementById('neuro-container');
    cardioContainer.appendChild(doctorCard);
}
})


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

let userId = localStorage.getItem("user");
let users = JSON.parse(localStorage.getItem("users"))
let userActive = users.find(user=>user.id==userId)
console.log(userActive);
console.log(userId);
if (userActive.admin){
 let adminButton = document.createElement("li");
 adminButton.classList.add("nav-item", "text-light");
 adminButton.innerHTML=`
 <a class="nav-link text-light" href="admin.html" >Administración</a>

 `;
 document.getElementById("options-header").appendChild(adminButton);
}