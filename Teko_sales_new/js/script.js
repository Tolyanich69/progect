'use strict';



const urlRequest = 'https://script.google.com/macros/s/AKfycbxRr-fKBYaGxkNV88BssO0x7mHgrQaxQl-VhdqJWy4P-QbMptxChuAwWtJQKVsCmbfa/exec',
      btnView = document.querySelector('button'),
      date = new Date(),
      yearMonth = String((new Date()).getFullYear())+'-0'+String(((new Date()).getMonth()+1)),
      month = document.querySelector('input');

month.value = yearMonth;
// console.log(yearMonth);

const fs = require('fs');
const dir = 'bases';
const files = fs.readdirSync(dir);
// console.log(files);


btnView.onclick = () => {
    const month = document.querySelector('input');
    const url = 'bases/'+month.value+'.json';
    const node = document.querySelector('.table');
    node.innerHTML = '';
    // console.log(getFileName(url));
    // if (getFileName(url)) {
    //     reportPreview(url);
    // }
    reportPreview(url);  
};


    
    


// btn.onclick = () => {
//     const month = document.querySelector('input');
//     console.log(month.value);
// };

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
reportPreview(urlRequest);