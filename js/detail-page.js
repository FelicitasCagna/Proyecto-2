let idDoctor = window.location.hash.slice(1);

let doctors = JSON.parse(localStorage.getItem('doctors'));

let doctor = doctors.find(doctor=>doctor.id == idDoctor);

let detail = document.createElement('div');
detail.innerHTML = `
<div class="detail-image text-center mb-3">
<img src=${doctor.image}>
</div>
<h1 class="text-center">${doctor.name}</h1>
<hr/>
<p class="h4 text-center">${doctor.description}</p>
<hr/>
<p class="h4 text-center mb-3"> Turnos Disponibles</p>
`
document.getElementById('detail-container').appendChild(detail);

// Tabla de turnos 
class Appointment {
    constructor(id, time){
        this.id = id;
        this.time = time;
    }
}

let appointments = [
    new Appointment (1 ,'16:00 hs'),
    new Appointment (2 ,'16:30 hs'),
    new Appointment (3 ,'17:00 hs'),
    new Appointment (4 ,'17:30 hs'),
    new Appointment (5 ,'18:00 hs'),
    new Appointment (6 ,'18:30 hs'),
    new Appointment (7 ,'19:00 hs'),
    new Appointment (8 ,'19:30 hs'),
]



appointments.forEach(appointment=>{
    let appRow = document.createElement('tr');
    appRow.innerHTML=`
    <th scope="row">${appointment.time}</th>
    <td>
    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#appModal">
    Seleccionar este turno
    </button>
    </td>
    <div class="modal fade" id="appModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Confirme su turno</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <p>Indique el motivo de su consulta</p>
                  <textarea name="txtar" id="contact-text" required placeholder="Dejar un mensaje" cols="30" rows="10" required class="form-control mt-4"></textarea>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Cerrar </button>
                <button type="button" class="btn btn-primary" onclick="deleteApp(${doctor.id})"> Confirmar </button>
              </div>
            </div>
          </div>
        </div>
    `
    document.querySelector('tbody').appendChild(appRow);
})

//Seleccionar un turno y eliminarlo

// localStorage.setItem('appointments',JSON.stringify(appointments));

const deleteApp = (id) => {
    let doctors = JSON.parse(localStorage.getItem('doctors'));
    let appUpdated =  appointments.filter(doctor=>doctor.id !== id);
    localStorage.setItem('appointments',JSON.stringify(appUpdated));
    window.location.reload();
}