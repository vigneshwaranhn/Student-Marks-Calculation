function sgpa7() {

    var a6=(document.getElementById("subject60").value);
    
    b6=(document.getElementById("subject61").value);
    
    c6=(document.getElementById("subject62").value);
    
    d6=(document.getElementById("subject63").value);
    
    e6=(document.getElementById("subject64").value);
    
    f6=(document.getElementById("subject65").value);	

    g6=(document.getElementById("subject66").value);	

    h6=(document.getElementById("subject67").value);	

    tot7 = 22;

    if(a6=='S') {

        a6=10;
    
    }
    
    else if(a6=='A') {
        
        a6=9;
    
    }
    
    else if(a6=='B') {
        
        a6=8;
        
    }
    
    else if(a6=='C') {
        
        a6=7;
        
    }
    
    else if(a6=='D') {
        
        a6=6;
        
    }
    
    else if(a6=='E') {
        
        a6=5;
        
    }

    else if(a6=='F') {
        
        a6=0;

        tot7 = tot7 - 3;
        
    }
    
    if(b6=='S') {
    
        b6=10;
    
    }
    
    else if(b6=='A') {
        
        b6=9;
    
    }
    
    else if(b6=='B') {
        
        b6=8;
        
    }
    
    else if(b6=='C') {
        
        b6=7;
        
    }
    
    else if(b6=='D') {
        
        b6=6;
        
    }
    
    else if(b6=='E') {
        
        b6=5;
        
    }

    else if(b6=='F') {
        
        b6=0;

        tot7 = tot7 - 3;
        
    }
    
    if(c6=='S') {
    
        c6=10;
    
    }
    
    else if(c6=='A') {
        
        c6=9;
    
    }
    
    else if(c6=='B') {
        
        c6=8;
        
    }
    
    else if(c6=='C') {
        
        c6=7;
        
    }
    
    else if(c6=='D') {
        
        c6=6;
        
    }
    
    else if(c6=='E') {
        
        c6=5;
        
    }

    else if(c6=='F') {
        
        c6=0;

        tot7 = tot7 - 3;
        
    }
    
    if(d6=='S') {
    
        d6=10;
    
    }
    
    else if(d6=='A') {
        
        d6=9;
    
    }
    
    else if(d6=='B') {
        
        d6=8;
        
    }
    
    else if(d6=='C') {
        
        d6=7;
        
    }
    
    else if(d6=='D') {
        
        d6=6;
        
    }
    
    else if(d6=='E') {
        
        d6=5;
        
    }

    else if(d6=='F') {
        
        d6=0;

        tot7 = tot7 - 3;
        
    }
    
    if(e6=='S') {
    
        e6=10;
    
    }
    
    else if(e6=='A') {
        
        e6=9;
    
    }
    
    else if(e6=='B') {
        
        e6=8;
        
    }
    
    else if(e6=='C') {
        
        e6=7;
        
    }
    
    else if(e6=='D') {
        
        e6=6;
        
    }
    
    else if(e6=='E') {
        
        e6=5;
        
    }

    else if(e6=='F') {
        
        e6=0;

        tot7 = tot7 - 3;
        
    }
    
    if(f6=='S') {
    
        f6=10;
    
    }
    
    else if(f6=='A') {
        
        f6=9;
    
    }
    
    else if(f6=='B') {
        
        f6=8;
        
    }
    
    else if(f6=='C') {
        
        f6=7;
        
    }
    
    else if(f6=='D') {
        
        f6=6;
        
    }
    
    else if(f6=='E') {
        
        f6=5;
        
    }

    else if(f6=='F') {
        
        f6=0;

        tot7 = tot7 - 3;
        
    }
    
    if(g6=='S') {
    
        g6=10;
    
    }
    
    else if(g6=='A') {
        
        g6=9;
    
    }
    
    else if(g6=='B') {
        
        g6=8;
        
    }
    
    else if(g6=='C') {
        
        g6=7;
        
    }
    
    else if(g6=='D') {
        
        g6=6;
        
    }
    
    else if(g6=='E') {
        
        g6=5;
        
    }

    else if(g6=='F') {
        
        g6=0;

        tot7 = tot7 - 2;
        
    }
    
    if(h6=='S') {
    
        h6=10;
    
    }
    
    else if(h6=='A') {
        
        h6=9;
    
    }
    
    else if(h6=='B') {
        
        h6=8;
        
    }
    
    else if(h6=='C') {
        
        h6=7;
        
    }
    
    else if(h6=='D') {
        
        h6=6;
        
    }
    
    else if(h6=='E') {
        
        h6=5;
        
    }

    else if(h6=='F') {
        
        h6=0;

        tot7 = tot7 - 2;
        
    }

    var Total7=(3*a6)+(3*b6)+(3*c6)+(3*d6)+(3*e6)+(3*f6)+(2*g6)+(2*h6);
    
    var Result7=Total7/tot7;
 
    var n7 = Result7.toFixed(3);
 
    document.getElementById("Result7").innerHTML="SGPA : "+n7;

}