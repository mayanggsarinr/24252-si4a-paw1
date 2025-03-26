fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    console.log(data.Infogempa.gempa.Wilayah);
    console.log(data.Infogempa.gempa.Magnitude);
    console.log(data.Infogempa.gempa.Tanggal); // hanya tampil di consule
    console.log(data.Infogempa.gempa.Jam);
    console.log(data.Infogempa.gempa.Potensi);
    document.getElementById("gempabumi").innerHTML = 
    `<div class="col-lg-8 mt-5">
        <h1>${data.Infogempa.gempa.Wilayah}</h1>
        <p>Magnitude : ${data.Infogempa.gempa.Magnitude}</p>
        <p>Tanggal : ${data.Infogempa.gempa.Tanggal}</p>
        <p>Jam : ${data.Infogempa.gempa.Jam}</p>
         <p>Kedalaman : ${data.Infogempa.gempa.Kedalaman}</p>
        <p>Potensi : ${data.Infogempa.gempa.Potensi}</p>
    </div>
    <div class="col-lg-4">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" />
    </div>`;
})

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
.then(res => res.json())
.then(data => {
    console.log(data);
    data.Infogempa.gempa.forEach((list) => {
        console.log(list);
        document.getElementById("gempabumi15").innerHTML += `
        <div class="col-lg-4 p-3">
        <div class="card p-3">
            <p>Wilayah : ${list.Wilayah}</p>
            <p>Waktu : ${list.Tanggal} ${list.Jam}</p>
            <p>Magnitude : ${list.Magnitude}</p>
            <p>Kedalaman : ${list.Kedalaman}</p>
            <p>Potensi : ${list.Potensi}</p>
        </div>
        </div>
        `;
    });
})