let vectorCalculator = (function () {
   add: function add(vecA,vecB) {
       return [vecA[0] + vecB[0],vecA[1] + vecB[1]];
    }

    multiply: function multiply(vecA,scalar) {
        return [vecA[0] * scalar,vecA[1] * scalar];
    }
    length: function length(vector) {
        return Math.sqrt((vector[0] * vector[0]) + (vector[1] * vector[1]));
    }
    dot:function dot(vecA,vecB) {
        return vecA[0] * vecB[0] + vecA[1] * vecB[1];
    }
    cross:function cross(vecA,vecB) {
        return (vecA[0] * vecB[1]) - (vecA[1] * vecB[0]);
    }
    return{add,multiply,length,dot,cross};
})();
console.log(vectorCalculator.add([1,1],[1,0]));
console.log(vectorCalculator.multiply([3.5, -2],2));
console.log(vectorCalculator.length([3,-4]));
console.log(vectorCalculator.dot([1,0],[0,-1]));
console.log(vectorCalculator.cross([3,7],[1,0]));