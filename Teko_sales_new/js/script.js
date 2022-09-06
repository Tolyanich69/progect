'use strict';

const btn = document.querySelector('button');
const date = new Date();
const yearMonth = String((new Date()).getFullYear())+'-0'+String(((new Date()).getMonth()+1));
console.log(yearMonth);
const month = document.querySelector('input');
month.value = yearMonth;
btn.onclick = () => {
    const month = document.querySelector('input');
    console.log(month.value);
    const date = new Date();
    const numberMonth = date.getMonth();
    // console.log(("0" + ((new Date()).getMonth()+1)).slice(-2));
    console.log(String(date.getFullYear()));
    // month.value = ;
};



const urlRequest = 'https://script.google.com/macros/s/AKfycbxRr-fKBYaGxkNV88BssO0x7mHgrQaxQl-VhdqJWy4P-QbMptxChuAwWtJQKVsCmbfa/exec';

function reportPreview(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType ='json';
    xhr.send();

    xhr.onload = () => {
        getTableHead(xhr.response[0]);
        getTablebody(xhr.response);
        getTableFoot(xhr.response[xhr.response.length-1]);
    };
}
reportPreview(urlRequest);

const  getTableHead = (fields) => {
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

const getTablebody = (data) => {
    const table = document.querySelector('.table');
    const tbody = document.createElement('tbody');
    for (const el of data) {
        if (el == data[0] || el == data[data.length-1]) {
            continue;
        }else {
        const tr = document.createElement('tr');
        const fragment = document.createDocumentFragment();
        el.forEach(x => {
            if (x == el[0]) {
                x = x.replace('00:00:00', '');
                const th = document.createElement('th');
                th.innerText = x;
                th.scope = 'col';
                fragment.appendChild(th);
            } else {
                const td = document.createElement('td');
                td.innerText = x;
                fragment.appendChild(td);
            }
            
        });
    tr.appendChild(fragment);
    tbody.appendChild(tr);
    table.appendChild(tbody);
        }
    }
};

const  getTableFoot = (fields) => {
    const table = document.querySelector('.table');
    const tfoot = document.createElement('tfoot');
    const tr = document.createElement('tr');
    const fragment = document.createDocumentFragment();
    fields.forEach(x => {
       const th = document.createElement('th');
       th.innerText = x;
       th.scope = 'col';
       fragment.appendChild(th);
    });
    tr.appendChild(fragment);
    tfoot.appendChild(tr);
    table.appendChild(tfoot);
};