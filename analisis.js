const salarioCol = colombia.map(person => person.salary);

const salariosColSorted = salarioCol.sort((salaryA, salaryB) => salaryA-salaryB);

function esPar(num){
    return (num % 2 == 0);
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personMitad1 = lista[mitad - 1];
        const personMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);

        return mediana;
    }else{
        const personMitad = lista[mitad];
        return personMitad;
    }
}

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;

    return promedio;

}


const medianaGeneralCol = medianaSalarios(salariosColSorted)

// mediana del top 10%

const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});