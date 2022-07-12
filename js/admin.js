const doctors = JSON.parse(localStorage.getItem("doctors"))

doctors.forEach(doctor => {
    const row = document.createElement("tr")
    row.innerHTML = `
    <th scope="row">${doctor.id}</th>
    <td>${doctor.name}</td>
    <td>${doctor.specialty}</td>
    <td>${doctor.mat}</td>
    <td>${doctor.adress}</td>
    <td>${doctor.phone}</td>
    <td>-</td>
    <td>❌</td>
    <td>✍</td>
    `
});