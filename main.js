document.title = 'Rift.id bro';

// const body = document.body;
// const textNode = document.createTextNode("kocak bro");
// body.appendChild(textNode);
// const body = document.body;
// body.append("kocak bro"); // Ini seharusnya bekerja di browser modern.

// const h1 = document.createElement('h1');
// h1.textContent = '<marquee>Woah gw Keren</marquee>';

// const pablo = document.createElement('p');
// pablo.innerHTML = '<marquee>kuchiang</marquee>';

// const yourName = document.createElement('i');
// yourName.innerText = '<marquee>kuchiang</marquee>';

// body.append(h1);
// body.append(pablo);
// body.append(yourName);
// const btn1 = document.getElementById('btn1');
// const btn2 = document.querySelector('.btn2');

// console.log(btn1);

// function gantiWarna() {
//     console.log('aman');
// }
// console.log(btn2);

// let akuPintar_kadang ="wow";
// console.log(akuPintar_kadang);
// const dataMahasiswa = [
//     {
//         nama: 'John',
//         usia: 20,
//         nilai: [{
//             matkul: "Matematika",
//             nilai: 100
//         }, {
//             matkul: "B Indo",
//             nilai: 100,
//         }]
//     },
//     {
//         nama: 'Doe',
//         usia: 21,
//         nilai: [{
//             matkul: "Matematika",
//             nilai: 90
//         }, {
//             matkul: "B Indo",
//             nilai: 80,
//         }]
//     },
//     {
//         nama: 'Sam',
//         usia: 30,
//         nilai: [{
//             matkul: "Matematika",
//             nilai: 100
//         }, {
//             matkul: "B Indo",
//             nilai: 80,
//         }]
//     }
// ]
// console.log(dataMahasiswa[2].nilai[1].nilai)
const dataMahasiswa = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika"
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro"
    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis"
    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika"
    }
]

//1. Buatkan data diatas menjadi seperti ini ["Alice","Bob","Carol"]
//2. Buatkan array object yang hanya menampilkan nama dan usia saja
// [{
//     nama:'Balmon',
//     usia:20
// },{
//     nama:'Alice',
//     usia:21
// }]
//3. Tampilkan pada html dengan tampilan seperti ini
// 1. nama: Alice - 20
// 2. nama: Alice - 20

const cari = dataMahasiswa.filter(item=>item.nama)
console.log(cari)

const namaMahasiswa = dataMahasiswa.map(mahasiswa => mahasiswa.nama);
console.log(namaMahasiswa)