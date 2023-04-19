function sgpa8() {

    var a7=(document.getElementById("subject68").value);

    b7=(document.getElementById("subject69").value);

    c7=(document.getElementById("subject70").value);

    d7=(document.getElementById("subject71").value);

    tot8 = 15;

    if(a7=='S') {

        a7=10;
    
    }
    
    else if(a7=='A') {
        
        a7=9;
    
    }
    
    else if(a7=='B') {
        
        a7=8;
        
    }
    
    else if(a7=='C') {
        
        a7=7;
        
    }
    
    else if(a7=='D') {
        
        a7=6;
        
    }

    else if(a7=='E') {
        
        a7=5;
        
    }
    
    else if(a7=='F') {
        
        a7=0;
    
        tot8 = tot8 - 3;
        
    }

    if(b7=='S') {

        b7=10;
    
    }
    
    else if(b7=='A') {
        
        b7=9;
    
    }
    
    else if(b7=='B') {
        
        b7=8;
        
    }
    
    else if(b7=='C') {
        
        b7=7;
        
    }
    
    else if(b7=='D') {
        
        b7=6;
        
    }

    else if(b7=='E') {
        
        b7=5;
        
    }
    
    else if(b7=='F') {
        
        b7=0;
    
        tot8 = tot8 - 3;
        
    }

    if(c7=='S') {

        c7=10;
    
    }
    
    else if(c7=='A') {
        
        c7=9;
    
    }
    
    else if(c7=='B') {
        
        c7=8;
        
    }
    
    else if(c7=='C') {
        
        c7=7;
        
    }
    
    else if(c7=='D') {
        
        c7=6;
        
    }

    else if(c7=='E') {
        
        c7=5;
        
    }
    
    else if(c7=='F') {
        
        c7=0;
    
        tot8 = tot8 - 3;
        
    }

    if(d7=='S') {

        d7=10;
    
    }
    
    else if(d7=='A') {
        
        d7=9;
    
    }
    
    else if(d7=='B') {
        
        d7=8;
        
    }
    
    else if(d7=='C') {
        
        d7=7;
        
    }
    
    else if(d7=='D') {
        
        d7=6;
        
    }

    else if(d7=='E') {
        
        d7=5;
        
    }
    
    else if(d7=='F') {
        
        d7=0;
    
        tot8 = tot8 - 6;
        
    }

    var Total8=(3*a7)+(3*b7)+(3*c7)+(6*d7);

    var Result8=Total8/tot8;

    var n8 = Result8.toFixed(3);

    document.getElementById("Result8").innerHTML="SGPA : "+n8;

}