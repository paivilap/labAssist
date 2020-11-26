const addBtn = document.querySelector('#btn-add');
const result = document.querySelector('#result');

addBtn.addEventListener('click', () => {
    

    const newItem = document.createElement ('ion-item');
    newItem.textContent = 'You have to pipette '+ usedConc.value * desiVol.value / desiConc.value + ' µl';
    
    result.appendChild(newItem);

});