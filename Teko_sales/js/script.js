'use strict';

const urlRequest = 'https://script.google.com/macros/s/AKfycbxRr-fKBYaGxkNV88BssO0x7mHgrQaxQl-VhdqJWy4P-QbMptxChuAwWtJQKVsCmbfa/exec';

const xhr = new XMLHttpRequest();
xhr.open('GET', urlRequest);
xhr.responseType ='json';
xhr.send();

xhr.onload = () => {
    getTableHead(xhr.response[0]);
};

const  getTableHead = (fields) => {
    console.log(fields);
    const table = document.querySelector('.table');
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const fragment = document.createDocumentFragment();
    fields.forEach(x => {
       const th = document.createElement('th');
       th.innerText = x;
       th.scope = 'col';
       fragment.appendChild(th);
    });
    tr.appendChild(fragment);
    thead.appendChild(tr);
    table.appendChild(thead);

};

// function viewInTable(data) {
//     document.querySelector('.report-container')
//             .innerHTML =`<table><thead class = "head-table"></thead></table>`;
//     for (const el of data) {
//         if (el == data[0]) {
//             for (const itemHead of el) {
//                 // виведеняя загловка таблиці
//                 let row = document.createElement('tr');
//                 row.innerHTML = `<th scope="col">${itemHead}</th>`;
//                 document.querySelector('.head-table').appendChild(row);
//             }  
//             // console.log(el);
//         } else {
//             for(const item of el) {
//                 console.log(item);
//             }
//         }
//         // console.log(el);
//     } 

// }
// viewInTable();

