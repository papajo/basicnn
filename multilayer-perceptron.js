var nandWeights = [-0.01,-0.02,0.03];
var andWeights  = [0.01,0.02,-0.02];
var orWeights   = [0.01,0.01,0];

var andP = new Perceptron(andWeights);
var orP  = new Perceptron(orWeights);
var nandP = new Perceptron(nandWeights);


/*
andP.forwardPass([nandP.forwardPass([0,0]),orP.forwardPass([0,0])]);

andP.forwardPass([nandP.forwardPass([0,1]),orP.forwardPass([0,1])]);

andP.forwardPass([nandP.forwardPass([1,0]),orP.forwardPass([1,0])]);

andP.forwardPass([nandP.forwardPass([1,1]),orP.forwardPass([1,1])]);

*/
