function sgpa1 () {
    
    var a=(document.getElementById("subject1").value);
    
    b=(document.getElementById("subject2").value);
    
    c=(document.getElementById("subject3").value);
    
    d=(document.getElementById("subject4").value);
    
    e=(document.getElementById("subject5").value);
    
    f=(document.getElementById("subject6").value);
    
    g=(document.getElementById("subject7").value);
    
    h=(document.getElementById("subject8").value);
    
    i=(document.getElementById("subject9").value);
    
    tot1 = 25;

    if(a=='S') {

        a=10;

    }

    else if(a=='A') {
        
        a=9;

    }

    else if(a=='B') {
        
        a=8;
        
    }

    else if(a=='C') {
        
        a=7;
        
    }

    else if(a=='D') {
        
        a=6;
        
    }

    else if(a=='E') {
        
        a=5;
        
    }

    else if(a=='F') {
        
        a=0;

        tot1 = tot1 - 3;
        
    }

    if(b=='S') {

        b=10;
    
    }
    
    else if(b=='A') {
        
        b=9;
    
    }
    
    else if(b=='B') {
        
        b=8;
        
    }
    
    else if(b=='C') {
        
        b=7;
        
    }
    
    else if(b=='D') {
        
        b=6;
        
    }
    
    else if(b=='E') {
        
        b=5;
        
    }

    else if(b=='F') {
        
        b=0;
    
        tot1 = tot1 - 4;
        
    }

    if(c=='S') {

        c=10;
    
    }
    
    else if(c=='A') {
        
        c=9;
    
    }
    
    else if(c=='B') {
        
        c=8;
        
    }
    
    else if(c=='C') {
        
        c=7;
        
    }
    
    else if(c=='D') {
        
        c=6;
        
    }
    
    else if(c=='E') {
        
        c=5;
        
    }

    else if(c=='F') {
        
        c=0;
    
        tot1 = tot1 - 3;
        
    }

    if(d=='S') {

        d=10;
    
    }
    
    else if(d=='A') {
        
        d=9;
    
    }
    
    else if(d=='B') {
        
        d=8;
        
    }
    
    else if(d=='C') {
        
        d=7;
        
    }
    
    else if(d=='D') {
        
        d=6;
        
    }
    
    else if(d=='E') {
        
        d=5;
        
    }

    else if(d=='F') {
        
        d=0;
    
        tot1 = tot1 - 3;
        
    }

    if(e=='S') {

        e=10;
    
    }
    
    else if(e=='A') {
        
        e=9;
    
    }
    
    else if(e=='B') {
        
        e=8;
        
    }
    
    else if(e=='C') {
        
        e=7;
        
    }
    
    else if(e=='D') {
        
        e=6;
        
    }
    
    else if(e=='E') {
        
        e=5;
        
    }

    else if(e=='F') {
        
        e=0;
    
        tot1 = tot1 - 3;
        
    }

    if(f=='S') {

        f=10;
    
    }
    
    else if(f=='A') {
        
        f=9;
    
    }
    
    else if(f=='B') {
        
        f=8;
        
    }
    
    else if(f=='C') {
        
        f=7;
        
    }
    
    else if(f=='D') {
        
        f=6;
        
    }
    
    else if(f=='E') {
        
        f=5;
        
    }

    else if(f=='F') {
        
        f=0;
    
        tot1 = tot1 - 4;
        
    }

    if(g=='S') {

        g=10;
    
    }
    
    else if(g=='A') {
        
        g=9;
    
    }
    
    else if(g=='B') {
        
        g=8;
        
    }
    
    else if(g=='C') {
        
        g=7;
        
    }
    
    else if(g=='D') {
        
        g=6;
        
    }
    
    else if(g=='E') {
        
        g=5;
        
    }

    else if(g=='F') {
        
        g=0;
    
        tot1 = tot1 - 2;
        
    }

    if(h=='S') {

        h=10;
    
    }
    
    else if(h=='A') {
        
        h=9;
    
    }
    
    else if(h=='B') {
        
        h=8;
        
    }
    
    else if(h=='C') {
        
        h=7;
        
    }
    
    else if(h=='D') {
        
        h=6;
        
    }
    
    else if(h=='E') {
        
        h=5;
        
    }

    else if(h=='F') {
        
        h=0;
    
        tot1 = tot1 - 2;
        
    }

    if(i=='S') {

        i=10;
    
    }
    
    else if(i=='A') {
        
        i=9;
    
    }
    
    else if(i=='B') {
        
        i=8;
        
    }
    
    else if(i=='C') {
        
        i=7;
        
    }
    
    else if(i=='D') {
        
        i=6;
        
    }
    
    else if(i=='E') {
        
        i=5;
        
    }

    else if(i=='F') {
        
        i=0;
    
        tot1 = tot1 - 1;
        
    }

    Total1=(3*a)+(4*b)+(3*c)+(3*d)+(3*e)+(4*f)+(2*g)+(2*h)+(1*i);
    
    Result1=Total1/tot1;
    
    n1 = Result1.toFixed(3);
    
    document.getElementById("Result1").innerHTML="SGPA : "+n1;

}