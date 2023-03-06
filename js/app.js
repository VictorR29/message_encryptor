// DEFINIENDO LAS VARIABLES
const inputMessage = document.getElementById("input-text");
const btnCode = document.querySelector(".btn");
const radioEncode = document.getElementById("encode");
const radioDecode = document.getElementById("decode");
const showMessage = document.querySelector(".message");
const codeInverse = document.getElementById("inverse");
const codeAscci = document.getElementById("ascci");
const codeBinari = document.getElementById("binari");

// AGREGANDO EVENTO

btnCode.addEventListener("click", ()=>{
  if(radioEncode.checked) {
    encrypt(inputMessage.value);
  } else if(radioDecode.checked) {
    decrypt(inputMessage.value);
  }
});

// FUNCIONES ENCRIPTADORA Y DESENCRIPTADORA

function encrypt(text) {
  if(codeInverse.checked && codeAscci.checked && codeBinari.checked) {
    extremeEncryp(text);
  }
  else if(codeInverse.checked) {
    inverse(text);
  } 
  else if(codeAscci.checked){
    ascci(text);
  } 
  else if(codeBinari.checked) {
    binari(text);
  }
}

function decrypt(text) {
  if(codeInverse.checked && codeAscci.checked && codeBinari.checked) {
    decryptExtreme(text);
  }
  else if(codeInverse.checked) {
    decryptInverse(text)
  }
  else if(codeAscci.checked) {
    decryptAscci(text);
  }
  else if(codeBinari.checked) {
    decryptBinari(text);
  }
}

// FUNCIONES TIPOS DE ENCRIPTADO O DESCENCRIPTADO

function inverse(text) {
  showMessage.innerHTML = "";

  let code = text.split("").reverse().join("");
  showMessage.innerHTML += code;
  return code;
}

function decryptInverse(text) {
  showMessage.innerHTML = "";

  let code = text.split("").reverse().join("");
  showMessage.innerHTML += code;
  return code;
}

function ascci(text) {
  let code = text.split("");
  let result = [];

  showMessage.innerHTML = "";

  code.forEach(item => {
    let index = code.indexOf(item);
    result.push(code[index].charCodeAt());
    return result;
  });

  return showMessage.innerHTML += result.join(" ");
}

function decryptAscci(text) {
  let code = text.split(" ");
  let result = [];

  showMessage.innerHTML = "";

  code.forEach(item => {
    let index = code.indexOf(item);
    result.push(String.fromCharCode(code[index]));
    return result;
  });

  return showMessage.innerHTML += result.join("");
}

function binari(text) {
  let code = text.split("");
  let result;
  showMessage.innerHTML = "";

  code.forEach(item => {
    let bin = item.charCodeAt(0).toString(2);
    while(bin.length % 8 != 0) {
      bin = "0" + bin;
      result = bin;
    }

    return showMessage.innerHTML += result;
  });
}

function decryptBinari(text){
  let chr = text.match(/.{1,8}/g);
  showMessage.innerHTML = "";

  let result = []
  chr.forEach(item => {
    result.push(parseInt(item,2));
  });

  let show = [];
  result.forEach(item => {
    show.push(String.fromCharCode(item));

    return show;
  });

  return showMessage.innerHTML += show.join("");
}

function extremeEncryp(text) {
  let exc = text;

  let step1 = inverse(exc);
  let step2 = ascci(step1);
  let step3 = binari(step2);

  return step3;
}

function decryptExtreme(text) {
  let dex = text;

  let step1 = decryptBinari(dex);
  let step2 = decryptAscci(step1);
  let step3 = decryptInverse(step2);

  return step3;
}
