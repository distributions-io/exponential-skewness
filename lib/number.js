'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// SKEWNESS //

/**
* FUNCTION skewness( lambda )
*	Computes the distribution skewness for a exponential distribution with parameter lambda.
*
* @param {Number} lambda - rate parameter
* @returns {Number} distribution skewness
*/
function skewness( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return 2;
} // end FUNCTION skewness()


// EXPORTS

module.exports =  skewness;
