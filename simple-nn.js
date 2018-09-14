function dotProduct(vectorA, vectorB){
  var sum = 0;
  for (index = 0; index < vectorA.length; index++){
    sum += vectorA[index] * vectorB[index];
  }
  return sum.toFixed(2);
}

function calculateError(target,actual){
	var error = 0;
	error = target - actual;
	return error.toFixed(2);
}

function adjustWeights(input, weights,learningRate) {
 for (index = 0; index < input.length; index++) {
 	if (input[index] > 0) {
 	  weights[index] += learningRate;
 	  weights[index] = Math.round(weights[index]*100)/100; 
  	}
  }
 return weights;
}

function display(input,weights,output,error){
	console.log('Input: '+JSON.stringify(input)+ ' Weights: '+JSON.stringify(weights)+ ' Output: '+output+ ' Error: '+error);
}

function train(input, weights, learningRate,targetOutput) {
	var actualOutput = 0;
	var error = 1;
  do{
	  actualOutput = dotProduct(input, weights);
    error = calculateError(targetOutput,actualOutput);
   if (error > 0)
    weights = adjustWeights(input, weights,learningRate);
    display(input,weights,actualOutput,error);
  } while (error > 0);
}

var input =   [0,0,1,0];
var weights = [0,0,0,0];
var learningRate = 0.20;
var targetOutput = 1;
train(input, weights, learningRate,targetOutput);




