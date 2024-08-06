let compose = function(functions) {
    return x => functions.reduceRight((accumulator ,currentFunction)=>currentFunction(accumulator ),x)
    // Ходим по массиву справо налево и выполняем функции в конце возвращаем ч
};
