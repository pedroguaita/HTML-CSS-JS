function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  //   form.onsubmit = function (evento) {
  //     evento.preventDefault();
  //     alert(1);
  //   };

  //   let contador = 1;
  //   function recebeEventoForm(evento) {
  //     evento.preventDefault();
  //     console.log(`Form não foi enviado ${contador}`);
  //     contador++;
  //   }

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const pessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    pessoas.push(pessoa);
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<p>`;
    // console.log(nome.value, sobrenome, peso, altura);
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
