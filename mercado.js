const Fila =()=>{
let dados =[];
const enfileirar = valor =>{
dados.push (valor);
}
const tamanho = () => dados.length;
const estaVaia = () => dados.length <1;
const desenfileirar = () => {
    if (estaVaia) {
        dados.push (o,1)
        imprimir();
    }
}
const imprimir = () => {
    console.log(dados);
}
return {
    enfileirar,
    desenfileirar,
    tamanho
}
};
const filaunica = Fila ();
const numItens = () => Math.floor(Math.randon() * (15 . 1) +1);