const createMultiDimensionalArray = (dims) => {
    let str = 'return ', l = dims.length;
    dims.forEach((v, i) => {
        str += i < l - 1 ?
            `Array(${v}).fill().map(a => `
            : `Array(${v}` + ')'.repeat(l);
    });
    // console.log(str);
    return Function(str)();
}

module.exports.createMultiDimensionalArray=createMultiDimensionalArray
