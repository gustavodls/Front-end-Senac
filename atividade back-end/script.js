function mostrarDados()
{
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;

    alert(
        "Nome: " + nome +
        "\n Idade: " + idade +
        "\n Curso: " + curso);
}






/*começo da atividade 2*/

let titulopagina = document.getElementById ("titulo")

function mudar()
{
    titulopagina.textContent = "Portifólio"
}

/*fim da atividade 2*/



/*começo da atividade 3*/

function elogio()
{
    const nome = document.getElementById("nome1").value;

    alert(
        "Belo Nome " + nome  
    );
}
/*fim da atividade 3*/

/*começo da atividade 4*/
function soma()
{
    let pnumero = Number(document.getElementById ("Pnumero").value);
    let snumero = Number( document.getElementById ("Snumero").value);

    alert( pnumero + snumero
    )

}

/*fim da atividade 4-1*/

/*começo da atividade 5*/
function calculo() {
  let peso = Number(document.getElementById("peso").value);
  let altura = Number(document.getElementById("altura").value);

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    alert("Abaixo do peso");
  } else if (imc < 25) {
    alert("Peso normal");
  } else if (imc < 30) {
    alert("Sobrepeso");
  } else {
    alert("Obesidade");
  }
}
 /* fim da atividade 5-1*/

 /*começo da atividade 5-2 */

 function Cdata()
 {
    let data = document.getElementById("data").value;

    if ((2026 - data) < 18)
    {
        alert("Você é de menor");
    }
    else
    {
        alert("Você é de maior");
    }
 }
 /*fim da atividade 5-2*/

    /*começo da atividade 5-3*/

    function Cnota()
    {
        let nota = document.getElementById("nota");

        if (nota <6 )
        {
            alert("Reprovado");
        }
        else if (nota===6)
        {
            alert("recuperação");
        }
        else
        {
            alert("aprovado");
        }
    }






