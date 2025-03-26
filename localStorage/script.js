let data;
let daftar_tamu = document.getElementById('daftar_tamu');

tampil();

function simpan(){
    let nama = document.getElementById('nama').value; //ambil value dari input
    let keperluan = document.getElementById('keperluan').value;
    console.log(nama);

    // cek apakah logalStorage kosong
    if(localStorage.getItem('ls_bukutamu') == null){
        data = []; //buat array kosong
    } else {
        data = JSON.parse(localStorage.getItem('ls_bukutamu')); // ambil data dari local storage
    }

    data.push({nama_pengunjung: nama, perlu: keperluan}); // masukkan value input nama ke dalam array

    localStorage.setItem ('ls_bukutamu', JSON.stringify(data)); // simpan ke loval storage

}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data =  JSON.parse(localStorage.getItem('ls_bukutamu'));

    data.forEach( (item) => {
        daftar_tamu.innerHTML += 
        `<li> ${item.nama_pengunjung} - ${item.perlu}
        </li>`
    })
}