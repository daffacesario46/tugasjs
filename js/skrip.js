function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    let input = 'Selamat datang ' + nama + '<br>dengan Pekerjaan ' +
        pekerjaan + '<br> dan mempunyai Hobby ' + hobby;
    let no_input = 'Maaf nama, pekerjaan, dan hobby anda belum terisi';
    let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;


    //tugasnya adalah lengkapi kode berikut dan tampilkan hasilnya pada html
    // 1.isian nama
    // 2. isian pekerjaan
    // 3. isian hobby
}