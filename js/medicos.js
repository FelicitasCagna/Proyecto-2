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
    new Doctor(3, 'Pacios Jorge','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFa-i1308CqF4TnW7gfrkVqq5tUw72PQP6YA&usqp=CAU'),
]

let cardio = [
    new Doctor(1,'Dr. Lescano, José Humberto','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40RGOcK_TukPXOrGKjhZ3qG2X_7ZiOYVoern5_7wzOc9qFZfvxKLJWRnMIaJRX_gvlbA&usqp=CAU'),
    new Doctor(2,'Dr. Rodriguez, Roberto Fernando','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MlUNDlPckeg6kDYPYtcKCXHu6e96yPri4KDVbwaa-sYwWagONb_01i7YyAdhnZdMvIs&usqp=CAU'),
    new Doctor(3,'Dra. Cisneros, Mirta Susana','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zF5CTtbsjxfrLxNLOnHyNJS0GigSVcXZSg&usqp=CAU'),
    new Doctor(4,'Dra. Guerrero Molina, María Silvia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalu2_rgj-PmT8PjBYNYvv6kEFirQb73y9sQ&usqp=CAU')
]

let clinica = [
    new Doctor(1,'Dra. Moreno Lazarte, Marcela Cecilia','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjXEC6FDfOC6PLvGuGsBF2S5z_8g897xsoA&usqp=CAU'),
    new Doctor(2,'Dr. Morcos, Daniel Alberto','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyoXjmhhbm8kcRSU3butNehfwaerKW353AQ&usqp=CAU'),
    new Doctor(3,'',''),
    new Doctor(4,'','')
]
let neuro =[
    new Doctor(1,'Dra. Ibáñez, Rossana del V.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCRBmPidQ8bWUT1B4e_s8AQ3zCrpss6hHz-jTSfDoBsy2c3J-m-HRt52oORX2DQx_37w&usqp=CAU'),
    new Doctor(2,'',''),
    new Doctor(3,'',''),
    new Doctor(4,'','')
]


trauma.forEach(doctor =>{
    let doctorCard = document.createElement('div');
    doctorCard.id = doctor.id;
    doctorCard.classList.add('card');
    doctorCard.style.width = '18rem'
    doctorCard.innerHTML=`
    <img src=${doctor.image} class="card-img-top customize-image" alt="...">
    <div class="card-body">
    <h5 class="card-title">${doctor.name}</h5>
    <p class="card-text"> hada</p>
    <a href="#" class="btn btn-primary">Sacar turno</a>
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


