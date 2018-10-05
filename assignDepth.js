/* function used to generate depth for array
@input obj is empty object 
@input keypath is any array 
@value value assigned to last array depth
*/

function assignDepth(obj, keyPath, value) {
		  var lastKeyIndex = keyPath.length-1;
		   for (var i = 0; i < lastKeyIndex; ++ i) {
			 var key = keyPath[i];
			 if (!(key in obj))
			   obj[key] = {}
			 obj = obj[key];
		   }
		   obj[keyPath[lastKeyIndex]] = value;
		}
    
    var settings = {}
    var array = ['a','b','c'];
    output = 'testing';
    var result = assignDepth(settings, array, output);
    console.log(settings);
    
    /*
    @output	
		a:
			b:
				c: "testing"
    */
