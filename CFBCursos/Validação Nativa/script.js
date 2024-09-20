const f_nome = document.querySelector('#f_nome');
const f_nota = document.querySelector('#f_nota');
const f_msg = document.querySelector('#f_msg');
const btn_validar = document.querySelector('#btn_validar');

// Primeira forma de validação nativa

// btn_validar.addEventListener('click', (evt)=>{
//     // let msg = null;
//     let estadoValidacao = f_nota.validity;
    
//     if (estadoValidacao.valueMissing) {
//         f_nota.setCustomValidity('Poxa, este campo é obrigatório');
//         // msg=f_nota.validationMessage
//     } else if (estadoValidacao.rangeOverflow) {
//         f_nota.setCustomValidity('Nossa, que nota alta você digitou');
//     } else if (estadoValidacao.rangeUnderflow) {
//         f_nota.setCustomValidity('Credo, que nota baixa você digitou');
//     }

//     // f_msg.innerHTML=msg;
//     f_nota.reportValidity();
//     // f_msg.innerHTML=f_nota.validationMessage;
//     evt.preventDefault();
// });

// Segunda forma de validação nativa

btn_validar.addEventListener('click', (evt)=>{
    let msg = null;
    
    if (f_nota.validity.valueMissing) {
        msg = 'Poxa, este campo é obrigatório';
        // msg=f_nota.validationMessage
    } else if (f_nota.validity.rangeOverflow) {
        msg='Nossa, que nota alta você digitou';
    } else if (f_nota.validity.rangeUnderflow) {
        msg='Credo, que nota baixa você digitou';
    }

    f_msg.innerHTML=msg;
    // f_nota.reportValidity();
    // f_msg.innerHTML=f_nota.validationMessage;
    evt.preventDefault();
});