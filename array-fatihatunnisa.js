// Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
// Tampilkan panjang data Array
// Tampilkan seluruh item pada array
// Gunakan Console.log
// Tampilkan data tersebut pada Halaman HTML menggunakan list tag

let productTeam = 
    ["Product Manager", 
    "Software Developer", 
    "Database Administrator",
    "Front End Developer", 
    "Back End Developer",
    ];

document.write ("<h3>Product Manager</h3>");
document.write ("<ol>");
for(let i = 0; i < productTeam.length; i++){
    document.write(`<li>${ productTeam [i]}</li>`);
}
document.write("</ol>");

// Buatlah sebuah data array yang berisi nama pada tim teman-teman.
// Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
// Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
// Tampilkan list data tersebut ke halaman HTML
// hidden:
// Cek built-in method Array
// Bisa pakai slice() atau splice()

const namaTim = [
  'Nisa - Leader',
  'Arsita - Anggota',
  'Luthfi - Leader',
  'Syaroh - Anggota',
];

const timPertama = namaTim.slice(0, 2);
const timKedua = namaTim.splice(2);

console.log(`${timPertama[0]}, ${timPertama[1]}`);
console.log(`${timKedua[0]}, ${timKedua[1]}`);

// Diberikan 1 data array [3, 5, 7, 9, 11]
// Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
// Tampilkan pada console.log

let arr =[3,5,7,9,11];
newArr = arr.map((num, index)=>{
    return arr[index]=num*5;
});
console.log(newArr);

// Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
// Array pertama = [‘Math’, ‘English’, ‘Programming’]
// Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
// Program akan mengembalikan nilai TRUE or FALSE

const arrayPertama = [
  'Math',
  'English',
  'Programming' // nilai yang sama
];

const arrayKedua = [
  'Geography',
  'Spanish',
  'Programming' // nilai yang sama
];

function cekNilaiYangSamaDariDuaArray(array1, array2) {
  // array1.forEach atau array1.map
  array1.forEach((nilaiDalamArray1, posisiNilaiDalamArray1) => {
    console.log(`Nilai ${nilaiDalamArray1} ada di posisi ${posisiNilaiDalamArray1}`);

    const nilaiDalamArray2 = array2[posisiNilaiDalamArray1];
    console.log(`nilai dalam array kedua ${nilaiDalamArray2}`);

    if (nilaiDalamArray1 === nilaiDalamArray2) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
};

