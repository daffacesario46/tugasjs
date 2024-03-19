let frm = document.getElementById('pegawai');
let statusPilihan = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option value="">Pilih Status</option>`;
for (let s in statusPilihan){
    pilihStatus += `<option value="${statusPilihan[s]}">${statusPilihan[s]}</option>"}`
}
frm.status.innerHTML = pilihStatus;

let jabatanPilihan = ["Manager", "Asisten Manager", "Staff"];
let pilihJabatan = `<option value="">Pilih Jabatan</option>`;
for (let j in jabatanPilihan){
    pilihJabatan += `<option value="${jabatanPilihan[j]}">${jabatanPilihan[j]}</option>`
}

frm.jabatan.innerHTML = pilihJabatan;

function inputan(){
    let nama = frm.nama.value
    let jabatan = frm.jabatan.value
    let status = frm.status.value
    
    let gaji;

    switch(jabatan){
        case 'Manager': gaji = 15000000;
        break;
        case 'Asisten Manager': gaji = 10000000;
        break;
        case 'Staff': gaji = 5000000;
        break;
        
        default: gaji = 0
        
    }

    let tunjab = (gaji * 0.15)
    let bpjs = (gaji * 0.10)
    let tunkel = (status == 'Menikah') ? 0.20 * gaji : 0;
    let toji = (gaji + tunjab + bpjs + tunkel)

swal(
    `Nama pegawai : ${nama}
    Jabatan : ${jabatan}
    Status : ${status}
    Tunjangan jabatan : ${tunjab}
    Tunjangan BPJS : ${bpjs}
    Tunjangan keluarga : ${tunkel}
    Total Gaji : ${toji}`
);
}