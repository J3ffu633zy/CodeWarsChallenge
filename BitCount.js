var countBits = function(n) {
    // Program Me
    //array of the bit result
    const base = (n).toString(2).split('');
    
    //add arrays and make index a Number.
    const result=base.reduce((sum,num)=>sum + Number(num),0);
    
    return result;
  };