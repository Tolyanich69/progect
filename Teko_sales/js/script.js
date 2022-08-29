'use strict';

const urlRequest = 'https://script.google.com/macros/s/AKfycbxRr-fKBYaGxkNV88BssO0x7mHgrQaxQl-VhdqJWy4P-QbMptxChuAwWtJQKVsCmbfa/exec';

const xhr = new XMLHttpRequest();
xhr.open('GET', urlRequest);
xhr.responseType ='json';
xhr.send();

xhr.onload = () => {
    console.log(xhr.response);
};

function viewInTable(data) {
    
}
