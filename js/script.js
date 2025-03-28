document.getElementsByTagName('body')
[0].style.backgroundColor = 'pink';

// variable
let nama = "Ahmad";
let umur = 20;
let statusMahasiswa = true;

document.getElementById('nama').innerHTML = "Nama saya : " + nama;
document.getElementById('umur').innerHTML = `Umur : ${umur}`;

let mahasiswa = [
    "Ahmad", "Budi", "Caca", "Dedi"
];

mahasiswa.forEach( (mhs) => { //cara menampilkan isi dari array
    document.getElementById('mahasiswa').innserHTML += `<li>${mhs}</li>`
} )

let nilai = [
    {nama: "Ahmad", nilai: 80},
    {nama: "Budi", nilai: 70},
    {nama: "Caca", nilai: 90},
    {nama: "Dedi", nilai: 85}
];

nilai.forEach( (data) => {
    document.getElementById('nilai').innerHTML += `<tr>
        <td>${data.nama}</td>
        <td>${data.nama}</td>
    </tr>`;
});

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => { //tampilkan data
    console.log(data.quotes) 
    data.quotes.forEach( (q) => {document.getElementById('quotes').innerHTML += '<li> ${q.quote} - ${q.author} </li>` } )
});