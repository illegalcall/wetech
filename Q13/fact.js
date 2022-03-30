onmessage = function(e) {
    if (isNaN(e.data)) {
      postMessage('Please write a number');
    }
    else if(e.data<0){
        postMessage('Please write a number greater than or equal to 0 to get the factorial');  
    }
     else {
      var result=1;
        for(var i=1;i<=e.data;i++){
            result*=i;
        }
      postMessage("The factorial of "+e.data+" is "+result);
    }
  }