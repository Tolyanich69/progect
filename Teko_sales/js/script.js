'use strict';

const urlRequest = 'https://script.google.com/macros/s/AKfycbxRr-fKBYaGxkNV88BssO0x7mHgrQaxQl-VhdqJWy4P-QbMptxChuAwWtJQKVsCmbfa/exec';

const xhr = new XMLHttpRequest();
xhr.open('GET', urlRequest);
xhr.responseType ='json';
xhr.send();

xhr.onload = () => {
    viewInTable(xhr.response);
};

function viewInTable(data) {
    document.querySelector('.report-container')
            .innerHTML =`<table><thead class = "head-table"></thead></table>`;
    for (const el of data) {
        if (el == data[0]) {
            for (const itemHead of el) {
                // виведеняя загловка таблиці
                let row = document.createElement('tr');
                row.innerHTML = `<th scope="col">${itemHead}</th>`;
                document.querySelector('.head-table').appendChild(row);
            }  
            // console.log(el);
        } else {
            for(const item of el) {
                console.log(item);
            }
        }
        // console.log(el);
    } 

}
// viewInTable();

