document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';

// variable
let nama = "Ahmad";
let umur = 20;

document.getElementById('nama').innerHTML = "Nama saya : " + nama;
document.getElementById('umur').innerHTML = `Umur : ${umur}`;

let mahasiswa = [
    "Ahmad", "Budi", "Caca", "Dedi"
];
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
} );

let nilai = [
    {nama: "Ahmad", nilai: 80},
    {nama: "Budi", nilai: 70},
    {nama: "Caca", nilai: 90},
    {nama: "Dedi", nilai: 85}
];
nilai.forEach( (data) => {
    document.getElementById('nilai').innerHTML += `<tr>
        <td>${data.nama}</td>
        <td>${data.nilai}</td>
    </tr>`;
} );

fetch("https://dummyjson.com/quotes")
.then(res => res.json())
.then(data => {
    console.log(data.quotes);
    let quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = "";

    data.quotes.forEach( (q) => { 
    document.getElementById('quotes').innerHTML += `
    <div class = "col-lg-4 col-md-6 col-sm-12 mt-4">
        <div class = "card h-100 shadow-sm">
            <div class = "card-body">
                <p class = "card-text"> "${q.quote}" </p>
                <h6 class = "card-subtitle textmuted text-end"> -${q.author} </h6>
            </div>
        </div>
    </div>`;
    });
});
 