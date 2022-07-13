
const doctors = JSON.parse(localStorage.getItem("doctors"))

class Doctor{
    constructor(id, name, image, mat, specialty, adress, phone ){
    this.id = id;
    this.name = name; 
    this.image = image;
    this.specialty = specialty;
    this.mat = mat;
    this.adress = adress;
    this.phone = phone;
    }
}

doctors.forEach(doctor => {
    const row = document.createElement("tr")
    row.innerHTML = `
    <th scope="row">${doctor.id}</th>
    <td>${doctor.name}</td>
    <td>${doctor.specialty}</td>
    <td>${doctor.mat}</td>
    <td>${doctor.adress}</td>
    <td>${doctor.phone}</td>
    <td onclick="deleteDoctor(${doctor.id})">❌</td>
    <td data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="fillValues(${doctor.id})">✍</td>
    
    `
    document.querySelector("tbody").appendChild(row)
});

const addDoctor = (event) =>{
    const nameDoctor = document.getElementById('nameDoctor').value;
    const image = document.getElementById('image').value;
    const especialidad = document.getElementById('especialidad').value;
    const matricula = document.getElementById('matricula').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    console.log(nameDoctor,especialidad,matricula,direccion,telefono);
    let doctors = JSON.parse(localStorage.getItem('doctors'));
    const newDoctor = new Doctor(doctors.length + 1,nameDoctor, image, matricula, especialidad, direccion, telefono);
    doctors.push(newDoctor);
    localStorage.setItem('doctors',JSON.stringify(doctors));
}

const deleteDoctor = (id) => {
    let doctors = JSON.parse(localStorage.getItem('doctors'));
    let doctorsUpdated = doctors.filter(doctors=>doctors.id !== id);
    localStorage.setItem('doctors',JSON.stringify(doctorsUpdated));
    window.location.reload();
    }  

    const fillValues = function(id){
        let doctors = JSON.parse(localStorage.getItem('doctors'));
        console.log(doctors);
        let doctorToEdit = doctors.find(doctor => doctor.id == id);
        console.log(doctorToEdit);
        let a = document.getElementById('nameDoctor-edit').value = doctorToEdit.name;
        let b = document.getElementById('especialidad-edit').value = doctorToEdit.especialidad;
        let c = document.getElementById('matricula-edit').value = doctorToEdit.matricula;
        let d = document.getElementById('direccion-edit').value = doctorToEdit.direccion;
        let e = document.getElementById('telefono-edit').value = doctorToEdit.telefono;
        console.log(a,b,c,d,e);
        document.getElementById('edit-form').setAttribute('onsubmit',`editDoctor(${id})`);
        }

        const editDoctor = (id) =>{
            let nameDoctor = document.getElementById('nameDoctor-edit').value;
            let especialidad = document.getElementById('especialidad-edit').value;
            let matricula = document.getElementById('matricula-edit').value;
            let direccion = document.getElementById('direccion-edit').value;
            let telefono = document.getElementById('telefono-edit').value;
            let doctors = JSON.parse(localStorage.getItem('doctors'));
            let doctorsUpdated = doctors.filter(doctor=>doctor.id !== id);
            let doctorUpdated = new Doctor(id,nameDoctor, especialidad, matricula, direccion, telefono);
            doctorsUpdated.push(doctorUpdated);
            localStorage.setItem('doctors',JSON.stringify(doctorsUpdated));
            }