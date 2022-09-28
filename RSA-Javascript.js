function multi(){
    let a=Number(document.getElementById("p").value);
    let b=Number(document.getElementById("q").value);
    let c=a*b;
    document.getElementById("pq").value=c;

    a1=a-1;
    b1=b-1;
    c1=a1*b1;
    document.getElementById("n").value=c1;
    let s2=Number(document.getElementById("s").value);
    if(1<s2 && s2<c1)
    {
        document.getElementById("s1").value="TRUE";
    }
    else
    {
        document.getElementById("s1").value="FALSE";
    }
    let number1=s2;
    let number2=c1;
    while(number1 != number2){
        if(number1 > number2) {
            number1 -= number2;
        }
        else {
            number2 -= number1;
        }

        
    }
    
    document.getElementById("gcd").value=number1;

    let n=new Array();
    let arr=document.getElementById("msg").value;
    for(let i in arr)
    {
  
        n[i]=arr.charCodeAt(i) - 97;
        document.getElementById("dic1").value=n;
        
    }
    let arr2=new Array();

    let arr3=new Array();
    for(let j in n){
        let msgcode=n[j];
        let keyvalue=Number(document.getElementById("s").value);
        let nvalue=Number(document.getElementById("pq").value);
        let power=Math.pow(msgcode,keyvalue);
        let modulo=power % nvalue;
        var letter = String.fromCharCode(modulo + 64 + 1);
        if(letter=='`')
        {
            letter='F';
        
        }
        else if(letter=='^')
        {
            letter='D'
        }
        else if(letter=="\\"){

            letter='B'
        }
        else if(letter=="]"){

            letter='C'
        }
        else if(letter=="_"){

            letter='E'
        }
        arr2.push(modulo);
        arr3.push(letter);
        console.log(arr2)
        j++      
    }
    document.getElementById("answer").value=arr2
    document.getElementById("answerinword").value=arr3

}    

function reset(){
    document.getElementById("msg").value="";
    document.getElementById("p").value="";
    document.getElementById("q").value="";
    document.getElementById("s").value="";
    document.getElementById("pq").value="";
    document.getElementById("n").value="";
    document.getElementById("s1").value="";
    document.getElementById("gcd").value="";
    document.getElementById("dic1").value="";
    document.getElementById("answer").value="";
    document.getElementById("answerinword").value="";
}
