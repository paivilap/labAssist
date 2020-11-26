const usedConc = document.querySelector('#used-conc');
const desiConc = document.querySelector('#desi-conc');
const desiVol = document.querySelector('#desi-vol');
const calcBtn = document.querySelector('#btn-calc');
const result = document.querySelector('#result');

calcBtn.addEventListener('click', () => {
    

    const newItem = document.createElement ('ion-item');
    newItem.textContent = 'You have to pipette '+ usedConc.value * desiVol.value / desiConc.value + ' µl';
    
    result.appendChild(newItem);

});

