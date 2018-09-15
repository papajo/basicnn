function Perceptron (weights, threshold = 0) {
    this.weights = weights;
    this.threshold = threshold;
    this.summationFunction = summationFunction;
    this.activationFunction = activationFunction;
    this.forwardPass = forwardPass;
}
 
function summationFunction(vectorA, vectorB){
  		var sum = 0;
  		for (index = 0; index < vectorA.length; index++){
    		sum += vectorA[index] * vectorB[index];
  		}
  		return sum;
	}

function activationFunction(summation){
  		if (summation > this.threshold)
    		return 1;
  		else 
    		return 0;
  	}

function forwardPass(inputs){
  		var bias_index = this.weights.length - 1;
  		var summation  = this.summationFunction(inputs, this.weights) + this.weights[bias_index];
  		var output     = this.activationFunction(summation);
  		return output;
	}

