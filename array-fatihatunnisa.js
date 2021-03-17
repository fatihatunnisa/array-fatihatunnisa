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

let team = new Array();
team = ['danu', 'nisa', 'syaroh', 'sita']
document.write("Menggunakan Slice"+team.slice(1,2))
document.write("<br>Menggunakan Splice"+team.splice(1,2))

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

let arrayPertama = ['Math', 'English', 'Programming'];
let arrayKedua = ['Geography', 'Spanish', 'Programming'];
let isArray = Array.isArray(arrayPertama===arrayKedua);
console.log(isArray);

