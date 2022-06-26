class Doctor{
    constructor(id, name, image){
    this.id = id;
    this.name = name; 
    this.image = image;
    }
}

let trauma = [
    new Doctor(1,'Dra. Andía González, Valery','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_9TKZJWDGJOxVJyVQFLASzjjgPG4d4msBw&usqp=CAU'),
    new Doctor(2, 'Ortega Enrique','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxYB_gMQISyl1I88w5F4Id8xPDzyqCWUu1A&usqp=CAU'),
    new Doctor(3,'Dra. Batista, Margarita','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Y_8xWspIm0zRWSPx9rY_T08vQnzKOLhZCg&usqp=CAU'),
    new Doctor(4, 'Pacios Jorge','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFa-i1308CqF4TnW7gfrkVqq5tUw72PQP6YA&usqp=CAU'),
]

let cardio = [
    new Doctor(5,'Dr. Lescano, José Humberto','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40RGOcK_TukPXOrGKjhZ3qG2X_7ZiOYVoern5_7wzOc9qFZfvxKLJWRnMIaJRX_gvlbA&usqp=CAU'),
    new Doctor(6,'Dr. Rodriguez, Roberto Fernando','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MlUNDlPckeg6kDYPYtcKCXHu6e96yPri4KDVbwaa-sYwWagONb_01i7YyAdhnZdMvIs&usqp=CAU'),
    new Doctor(7,'Dra. Cisneros, Mirta Susana','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zF5CTtbsjxfrLxNLOnHyNJS0GigSVcXZSg&usqp=CAU'),
    new Doctor(8,'Dra. Guerrero Molina, María Silvia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalu2_rgj-PmT8PjBYNYvv6kEFirQb73y9sQ&usqp=CAU')
]

let clinica = [
    new Doctor(9,'Dra. Moreno Lazarte, Marcela Cecilia','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqBVZKG1lqS3eiiQCuR5RtEEc1SS-_uJgDxvuLoylh9HnV1g3X07QisCWOTLZ3iGlkFw&usqp=CAU'),
    new Doctor(10,'Dr. Morcos, Daniel Alberto','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaOwBxl9zpesywpimuFBaqbil55_UzYlZGqYoI1WBswjdi7EbREsYIPIA5pDt9I6Jz3w&usqp=CAU'),
    new Doctor(11,'Dr. Tome Guzmán, Andrés Federico','https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/series.batanga.com/files/Los-7-hombres-mas-atractivos-de-Greys-Anatomy.jpg'),
    new Doctor(12,'Dra. Sabeh, Melisa Ianina','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFEJsBwsQRbqLBtJuAfQo_tGxFHKlTr6vUQ&usqp=CAU')
]
let neuro =[
    new Doctor(13,'Dra. Ibáñez, Rossana del V.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCRBmPidQ8bWUT1B4e_s8AQ3zCrpss6hHz-jTSfDoBsy2c3J-m-HRt52oORX2DQx_37w&usqp=CAU'),
    new Doctor(14,'Dr. Ordóñez, Hernán Esteban','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4Tlscla6oL0mwJnj_w4ah5gS8B4Dg-UEMMFB8WLU9mWpKHG3SBfgL2FP7AmFxtnYCGg&usqp=CAU'),
    new Doctor(15,'Dra. Batista, Margarita','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ve3YIL87KDue9j3rQy0jLV8I5aM13lr8LGxAqAK36i1VzleZAM6vkSczeBQ5apuvtiI&usqp=CAU'),
    new Doctor(16,'Dr. Ovejero, Miguel Adolfo','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz8oRnhCoT5IwMUvNVyWcswhrt3jk6e4HeNjDsQQPIaeG_0d3_W7NNz6r01HB9zpc7j8c&usqp=CAU')
]


trauma.forEach(doctor =>{
    let doctorCard = document.createElement('a');
    doctorCard.href= window.location.origin + '/detail-page.html#' + doctor.id;
    
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> hada</p>
    <a href=# class="btn btn-primary">Sacar turno</a> 
    </div>
    `
    let traumaContainer = document.getElementById('trauma-container');
    traumaContainer.appendChild(doctorCard);
})
cardio.forEach(doctor =>{
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> hshs </p>
    <a href="#" class="btn btn-primary">Sacar turno</a>
    </div>
    `
    let cardioContainer = document.getElementById('cardio-container');
    cardioContainer.appendChild(doctorCard);
})
clinica.forEach(doctor =>{
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> hshs </p>
    <a href="#" class="btn btn-primary">Sacar turno</a>
    </div>
    `
    let cardioContainer = document.getElementById('clinica-container');
    cardioContainer.appendChild(doctorCard);
})
neuro.forEach(doctor =>{
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> hshs </p>
    <a href="#" class="btn btn-primary">Sacar turno</a>
    </div>
    `
    let cardioContainer = document.getElementById('neuro-container');
    cardioContainer.appendChild(doctorCard);
})


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}



