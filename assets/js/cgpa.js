function cgpa() {

    // Semester 1

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

    document.getElementById("cgpa0").innerHTML="CGPA : "+ n1;

    // Semester 2

    var a1=(document.getElementById("subject10").value);
    
    b1=(document.getElementById("subject11").value);
    
    c1=(document.getElementById("subject12").value);
    
    d1=(document.getElementById("subject13").value);
    
    e1=(document.getElementById("subject14").value);
    
    f1=(document.getElementById("subject15").value);	

    g1=(document.getElementById("subject16").value);	

    h1=(document.getElementById("subject17").value);	

    i1=(document.getElementById("subject18").value);	

    j1=(document.getElementById("subject19").value);	
    
    tot2 = 28;

    if(a1=='S') {

        a1=10;
    
    }
    
    else if(a1=='A') {
        
        a1=9;
    
    }
    
    else if(a1=='B') {
        
        a1=8;
        
    }
    
    else if(a1=='C') {
        
        a1=7;
        
    }
    
    else if(a1=='D') {
        
        a1=6;
        
    }
    
    else if(a1=='E') {
        
        a1=5;
        
    }

    else if(a1=='F') {
        
        a1=0;

        tot2 = tot2 - 3;
        
    }
    
    if(b1=='S') {
    
        b1=10;
    
    }
    
    else if(b1=='A') {
        
        b1=9;
    
    }
    
    else if(b1=='B') {
        
        b1=8;
        
    }
    
    else if(b1=='C') {
        
        b1=7;
        
    }
    
    else if(b1=='D') {
        
        b1=6;
        
    }
    
    else if(b1=='E') {
        
        b1=5;
        
    }

    else if(b1=='F') {
        
        b1=0;

        tot2 = tot2 - 4;
        
    }
    
    if(c1=='S') {
    
        c1=10;
    
    }
    
    else if(c1=='A') {
        
        c1=9;
    
    }
    
    else if(c1=='B') {
        
        c1=8;
        
    }
    
    else if(c1=='C') {
        
        c1=7;
        
    }
    
    else if(c1=='D') {
        
        c1=6;
        
    }
    
    else if(c1=='E') {
        
        c1=5;
        
    }
    
    else if(c1=='F') {
        
        c1=0;

        tot2 = tot2 - 3;
        
    }

    if(d1=='S') {
    
        d1=10;
    
    }
    
    else if(d1=='A') {
        
        d1=9;
    
    }
    
    else if(d1=='B') {
        
        d1=8;
        
    }
    
    else if(d1=='C') {
        
        d1=7;
        
    }
    
    else if(d1=='D') {
        
        d1=6;
        
    }
    
    else if(d1=='E') {
        
        d1=5;  
        
    }

    else if(d1=='F') {
        
        d1=0;

        tot2 = tot2 - 3;
        
    }
    
    if(e1=='S') {
    
        e1=10;
    
    }
    
    else if(e1=='A') {
        
        e1=9;
    
    }
    
    else if(e1=='B') {
        
        e1=8;
        
    }
    
    else if(e1=='C') {
        
        e1=7;
        
    }
    
    else if(e1=='D') {
        
        e1=6;
        
    }
    
    else if(e1=='E') {
        
        e1=5;
        
    }

    else if(e1=='F') {
        
        e1=0;

        tot2 = tot2 - 4;
        
    }
    
    if(f1=='S') {
    
        f1=10;
    
    }
    
    else if(f1=='A') {
        
        f1=9;
    
    }
    
    else if(f1=='B') {
        
        f1=8;
        
    }
    
    else if(f1=='C') {
        
        f1=7;
        
    }
    
    else if(f1=='D') {
        
        f1=6;
        
    }
    
    else if(f1=='E') {
        
        f1=5;
        
    }

    else if(f1=='F') {
        
        f1=0;

        tot2 = tot2 - 4;
        
    }
    
    if(g1=='S') {
    
        g1=10;
    
    }
    
    else if(g1=='A') {
        
        g1=9;
    
    }
    
    else if(g1=='B') {
        
        g1=8;
        
    }
    
    else if(g1=='C') {
        
        g1=7;
        
    }
    
    else if(g1=='D') {
        
        g1=6;
        
    }
    
    else if(g1=='E') {
        
        g1=5;
    
    }

    else if(g1=='F') {
        
        g1=0;

        tot2 = tot2 - 2;
        
    }
    
    if(h1=='S') {
    
        h1=10;
    
    }
    
    else if(h1=='A') {
        
        h1=9;
    
    }
    
    else if(h1=='B') {
        
        h1=8;
        
    }
    
    else if(h1=='C') {
        
        h1=7;
        
    }
    
    else if(h1=='D') {
        
        h1=6;
        
    }
    
    else if(h1=='E') {
        
        h1=5;
        
    }

    else if(h1=='F') {
        
        h1=0;

        tot2 = tot2 - 2;
        
    }
    
    if(i1=='S') {
    
        i1=10;
    
    }
    
    else if(i1=='A') {
        
        i1=9;
    
    }
    
    else if(i1=='B') {
        
        i1=8;
        
    }
    
    else if(i1=='C') {
        
        i1=7;
        
    }
    
    else if(i1=='D') {
        
        i1=6;
        
    }
    
    else if(i1=='E') {
        
        i1=5;
        
    }

    else if(i1=='F') {
        
        i1=0;

        tot2 = tot2 - 2;
        
    }
    
    if(j1=='S') {
    
        j1=10;
    
    }
    
    else if(j1=='A') {
        
        j1=9;
    
    }
    
    else if(j1=='B') {
        
        j1=8;
        
    }
    
    else if(j1=='C') {
        
        j1=7;
        
    }
    
    else if(j1=='D') {
        
        j1=6;
        
    }
    
    else if(j1=='E') {
        
        j1=5;
        
    }

    else if(j1=='F') {
        
        j1=0;

        tot2 = tot2 - 1;
        
    }
    
    Total2=(3*a1)+(4*b1)+(3*c1)+(3*d1)+(4*e1)+(4*f1)+(2*g1)+(2*h1)+(2*i1)+(1*j1);
    
    Result2=Total2/tot2;
    
    n2 = Result2.toFixed(3);
    
    document.getElementById("Result2").innerHTML="SGPA : "+n2;

    var cgpa2;

    var sgpa2;

    var credit2;

    sgpa2 = Total1 + Total2;

    credit2 = tot1 + tot2;

    cgpa2 = sgpa2/credit2;

    out1 = cgpa2.toFixed(3);

    document.getElementById("cgpa1").innerHTML="CGPA : "+ out1;

    // Semester 3

    var a2=(document.getElementById("subject20").value);
    
    b2=(document.getElementById("subject21").value);
    
    c2=(document.getElementById("subject22").value);
    
    d2=(document.getElementById("subject23").value);
    
    e2=(document.getElementById("subject24").value);
    
    f2=(document.getElementById("subject25").value);	

    g2=(document.getElementById("subject26").value);	

    h2=(document.getElementById("subject27").value);	

    i2=(document.getElementById("subject28").value);	

    j2=(document.getElementById("subject29").value);

    tot3 = 27;

    if(a2=='S') {

        a2=10;
    
    }
    
    else if(a2=='A') {
        
        a2=9;
    
    }
    
    else if(a2=='B') {
        
        a2=8;
        
    }
    
    else if(a2=='C') {
        
        a2=7;
        
    }
    
    else if(a2=='D') {
        
        a2=6;
        
    }
    
    else if(a2=='E') {
        
        a2=5;
        
    }

    else if(a2=='F') {
        
        a2=0;

        tot3 = tot3 - 4;
        
    }
    
    if(b2=='S') {
    
        b2=10;
    
    }
    
    else if(b2=='A') {
        
        b2=9;
    
    }
    
    else if(b2=='B') {
        
        b2=8;
        
    }
    
    else if(b2=='C') {
        
        b2=7;
        
    }
    
    else if(b2=='D') {
        
        b2=6;
        
    }
    
    else if(b2=='E') {
        
        b2=5;
        
    }

    else if(b2=='F') {
        
        b2=0;

        tot3 = tot3 - 4;
        
    }
    
    if(c2=='S') {
    
        c2=10;
    
    }
    
    else if(c2=='A') {
        
        c2=9;
    
    }
    
    else if(c2=='B') {
        
        c2=8;
        
    }
    
    else if(c2=='C') {
        
        c2=7;
        
    }
    
    else if(c2=='D') {
        
        c2=6;
        
    }
    
    else if(c2=='E') {
        
        c2=5;
        
    }

    else if(c2=='F') {
        
        c2=0;

        tot3 = tot3 - 3;
        
    }
    
    if(d2=='S') {
    
        d2=10;
    
    }
    
    else if(d2=='A') {
        
        d2=9;
    
    }
    
    else if(d2=='B') {
        
        d2=8;
        
    }
    
    else if(d2=='C') {
        
        d2=7;
        
    }
    
    else if(d2=='D') {
        
        d2=6;
        
    }
    
    else if(d2=='E') {
        
        d2=5;
        
    }
    
    else if(d2=='F') {
        
        d2=0;

        tot3 = tot3 - 3;
        
    }

    if(e2=='S') {
    
        e2=10;
    
    }
    
    else if(e2=='A') {
        
        e2=9;
    
    }
    
    else if(e2=='B') {
        
        e2=8;
        
    }
    
    else if(e2=='C') {
        
        e2=7;
        
    }
    
    else if(e2=='D') {
        
        e2=6;
        
    }
    
    else if(e2=='E') {
        
        e2=5;
        
    }

    else if(e2=='F') {
        
        e2=0;

        tot3 = tot3 - 3;
        
    }
    
    if(f2=='S') {
    
        f2=10;
    
    }
    
    else if(f2=='A') {
        
        f2=9;
    
    }
    
    else if(f2=='B') {
        
        f2=8;
        
    }
    
    else if(f2=='C') {
        
        f2=7;
        
    }
    
    else if(f2=='D') {
        
        f2=6;
        
    }
    
    else if(f2=='E') {
        
        f2=5;
        
    }
    
    if(g2=='S') {
    
        g2=10;
    
    }

    else if(f2=='F') {
        
        f2=0;

        tot3 = tot3 - 3;
        
    }
    
    else if(g2=='A') {
        
        g2=9;
    
    }
    
    else if(g2=='B') {
        
        g2=8;
        
    }
    
    else if(g2=='C') {
        
        g2=7;
        
    }
    
    else if(g2=='D') {
        
        g2=6;
        
    }
    
    else if(g2=='E') {
        
        g2=5;
        
    }
    
    else if(g2=='F') {
        
        g2=0;

        tot3 = tot3 - 2;
        
    }

    if(h2=='S') {
    
        h2=10;
    
    }
    
    else if(h2=='A') {
        
        h2=9;
    
    }
    
    else if(h2=='B') {
        
        h2=8;
        
    }
    
    else if(h2=='C') {
        
        h2=7;
        
    }
    
    else if(h2=='D') {
        
        h2=6;
        
    }
    
    else if(h2=='E') {
        
        h2=5;
        
    }
    
    if(i2=='S') {
    
        i2=10;
    
    }

    else if(h2=='F') {
        
        h2=0;

        tot3 = tot3 - 2;
        
    }
    
    else if(i2=='A') {
        
        i2=9;
    
    }
    
    else if(i2=='B') {
        
        i2=8;
        
    }
    
    else if(i2=='C') {
        
        i2=7;
        
    }
    
    else if(i2=='D') {
        
        i2=6;
        
    }
    
    else if(i2=='E') {
        
        i2=5;
        
    }

    else if(i2=='F') {
        
        i2=0;

        tot3 = tot3 - 2;
        
    }
    
    if(j2=='S') {
    
        j2=10;
    
    }
    
    else if(j2=='A') {
        
        j2=9;
    
    }
    
    else if(j2=='B') {
        
        j2=8;
        
    }
    
    else if(j2=='C') {
        
        j2=7;
        
    }
    
    else if(j2=='D') {
        
        j2=6;
        
    }
    
    else if(j2=='E') {
        
        j2=5;
        
    }

    else if(j2=='F') {
        
        j2=0;

        tot3 = tot3 - 1;
        
    }

    Total3=(4*a2)+(4*b2)+(3*c2)+(3*d2)+(3*e2)+(3*f2)+(2*g2)+(2*h2)+(2*i2)+(1*j2);
    
    Result3=Total3/tot3;
    
    n3 = Result3.toFixed(3);
    
    document.getElementById("Result3").innerHTML="SGPA : "+n3;

    var cgpa3;
 
    var sgpa3;
 
    var credit3;

    sgpa3 = Total1 + Total2 + Total3;
    
    credit3 = tot1 + tot2 + tot3;

    cgpa3 = sgpa3/credit3;
    
    out2 = cgpa3.toFixed(3);

    document.getElementById("cgpa2").innerHTML="CGPA : "+ out2;

    // Semester 4

    var a3=(document.getElementById("subject30").value);
    
    b3=(document.getElementById("subject31").value);
    
    c3=(document.getElementById("subject32").value);
    
    d3=(document.getElementById("subject33").value);
    
    e3=(document.getElementById("subject34").value);
    
    f3=(document.getElementById("subject35").value);	

    g3=(document.getElementById("subject36").value);	

    h3=(document.getElementById("subject37").value);	

    i3=(document.getElementById("subject38").value);	

    j3=(document.getElementById("subject39").value);

    tot4 = 26;

    if(a3=='S') {

        a3=10;
    
    }
    
    else if(a3=='A') {
        
        a3=9;
    
    }
    
    else if(a3=='B') {
        
        a3=8;
        
    }
    
    else if(a3=='C') {
        
        a3=7;
        
    }
    
    else if(a3=='D') {
        
        a3=6;
        
    }
    
    else if(a3=='E') {
        
        a3=5;
        
    }

    else if(a3=='F') {
        
        a3=0;

        tot4 = tot4 - 4;
        
    }
    
    if(b3=='S') {
    
        b3=10;
    
    }
    
    else if(b3=='A') {
        
        b3=9;
    
    }
    
    else if(b3=='B') {
        
        b3=8;
        
    }
    
    else if(b3=='C') {
        
        b3=7;
        
    }
    
    else if(b3=='D') {
        
        b3=6;
        
    }
    
    else if(b3=='E') {
        
        b3=5;
    
    }

    else if(b3=='F') {
        
        b3=0;

        tot4 = tot4 - 3;
        
    }
    
    if(c3=='S') {
    
        c3=10;
    
    }
    
    else if(c3=='A') {
        
        c3=9;
    
    }
    
    else if(c3=='B') {
        
        c3=8;
        
    }
    
    else if(c3=='C') {
        
        c3=7;
        
    }
    
    else if(c3=='D') {
        
        c3=6;
        
    }
    
    else if(c3=='E') {
        
        c3=5;
        
    }
    
    if(d3=='S') {
    
        d3=10;
    
    }

    else if(c3=='F') {
        
        c3=0;

        tot4 = tot4 - 3;
        
    }
    
    else if(d3=='A') {
        
        d3=9;
    
    }
    
    else if(d3=='B') {
        
        d3=8;
        
    }
    
    else if(d3=='C') {
        
        d3=7;
        
    }
    
    else if(d3=='D') {
        
        d3=6;
        
    }
    
    else if(d3=='E') {
        
        d3=5;
        
    }

    else if(d3=='F') {
        
        d3=0;

        tot4 = tot4 - 3;
        
    }
    
    if(e3=='S') {
    
        e3=10;
    
    }
    
    else if(e3=='A') {
        
        e3=9;
    
    }
    
    else if(e3=='B') {
        
        e3=8;
        
    }
    
    else if(e3=='C') {
        
        e3=7;
        
    }
    
    else if(e3=='D') {
        
        e3=6;
        
    }
    
    else if(e3=='E') {
        
        e3=5;
        
    }

    else if(e3=='F') {
        
        e3=0;

        tot4 = tot4 - 3;
        
    }
    
    if(f3=='S') {
    
        f3=10;
    
    }
    
    else if(f3=='A') {
        
        f3=9;
    
    }
    
    else if(f3=='B') {
        
        f3=8;
        
    }
    
    else if(f3=='C') {
        
        f3=7;
        
    }
    
    else if(f3=='D') {
        
        f3=6;
        
    }
    
    else if(f3=='E') {
        
        f3=5;
        
    }

    else if(f3=='F') {
        
        f3=0;

        tot4 = tot4 - 3;
        
    }
    
    if(g3=='S') {
    
        g3=10;
    
    }
    
    else if(g3=='A') {
        
        g3=9;
    
    }
    
    else if(g3=='B') {
        
        g3=8;
        
    }
    
    else if(g3=='C') {
        
        g3=7;
        
    }
    
    else if(g3=='D') {
        
        g3=6;
        
    }
    
    else if(g3=='E') {
        
        g3=5;
        
    }
    
    else if(g3=='F') {
        
        g3=0;

        tot4 = tot4 - 2;
        
    }

    if(h3=='S') {
    
        h3=10;
    
    }
    
    else if(h3=='A') {
        
        h3=9;
    
    }
    
    else if(h3=='B') {
        
        h3=8;
        
    }
    
    else if(h3=='C') {
        
        h3=7;
        
    }
    
    else if(h3=='D') {
        
        h3=6;
        
    }
    
    else if(h3=='E') {
        
        h3=5;
        
    }

    else if(h3=='F') {
        
        h3=0;

        tot4 = tot4 - 2;
        
    }
    
    if(i3=='S') {
    
        i3=10;
    
    }
    
    else if(i3=='A') {
        
        i3=9;
    
    }
    
    else if(i3=='B') {
        
        i3=8;
        
    }
    
    else if(i3=='C') {
        
        i3=7;
        
    }
    
    else if(i3=='D') {
        
        i3=6;
        
    }
    
    else if(i3=='E') {
        
        i3=5;
        
    }

    else if(i3=='F') {
        
        i3=0;

        tot4 = tot4 - 2;
        
    }
    
    if(j3=='S') {
    
        j3=10;
    
    }
    
    else if(j3=='A') {
        
        j3=9;
    
    }
    
    else if(j3=='B') {
        
        j3=8;
        
    }
    
    else if(j3=='C') {
        
        j3=7;
        
    }
    
    else if(j3=='D') {
        
        j3=6;
        
    }
    
    else if(j3=='E') {
        
        j3=5;
        
    }

    else if(j3=='F') {
        
        j3=0;

        tot4 = tot4 - 1;
        
    }

    Total4=(4*a3)+(3*b3)+(3*c3)+(3*d3)+(3*e3)+(3*f3)+(2*g3)+(2*h3)+(2*i3)+(1*j3);
     
    Result4=Total4/tot4;
    
    n4 = Result4.toFixed(3);
    
    document.getElementById("Result4").innerHTML="SGPA : "+n4;

    var cgpa4;
 
    var sgpa4;
 
    var credit4;
 
    sgpa4 = Total1 + Total2 + Total3 + Total4;
 
    credit4 = tot1 + tot2 + tot3 + tot4;
 
    cgpa4 = sgpa4/credit4;
 
    out3 = cgpa4.toFixed(3);
 
    document.getElementById("cgpa3").innerHTML="CGPA : "+ out3;

    // Semester 5

    var a4=(document.getElementById("subject40").value);
    
    b4=(document.getElementById("subject41").value);
    
    c4=(document.getElementById("subject42").value);
    
    d4=(document.getElementById("subject43").value);
    
    e4=(document.getElementById("subject44").value);
    
    f4=(document.getElementById("subject45").value);	

    g4=(document.getElementById("subject46").value);	

    h4=(document.getElementById("subject47").value);	

    i4=(document.getElementById("subject48").value);	

    j4=(document.getElementById("subject49").value);

    tot5 = 26;

    if(a4=='S') {

        a4=10;
    
    }
    
    else if(a4=='A') {
        
        a4=9;
    
    }
    
    else if(a4=='B') {
        
        a4=8;
        
    }
    
    else if(a4=='C') {
        
        a4=7;
        
    }
    
    else if(a4=='D') {
        
        a4=6;
        
    }
    
    else if(a4=='E') {
        
        a4=5;
        
    }

    else if(a4=='F') {
        
        a4=0;

        tot4 = tot4 - 4;
        
    }
    
    if(b4=='S') {
    
        b4=10;
    
    }
    
    else if(b4=='A') {
        
        b4=9;
    
    }
    
    else if(b4=='B') {
        
        b4=8;
        
    }
    
    else if(b4=='C') {
        
        b4=7;
        
    }
    
    else if(b4=='D') {
        
        b4=6;
        
    }
    
    else if(b4=='E') {
        
        b4=5;
        
    }

    else if(b4=='F') {
        
        b4=0;

        tot4 = tot4 - 3;
        
    }
    
    if(c4=='S') {
    
        c4=10;
    
    }
    
    else if(c4=='A') {
        
        c4=9;
    
    }
    
    else if(c4=='B') {
        
        c4=8;
        
    }
    
    else if(c4=='C') {
        
        c4=7;
        
    }
    
    else if(c4=='D') {
        
        c4=6;
        
    }
    
    else if(c4=='E') {
        
        c4=5;
        
    }

    else if(c4=='F') {
        
        c4=0;

        tot4 = tot4 - 3;
        
    }
    
    if(d4=='S') {
    
        d4=10;
    
    }
    
    else if(d4=='A') {
        
        d4=9;
    
    }
    
    else if(d4=='B') {
        
        d4=8;
        
    }
    
    else if(d4=='C') {
        
        d4=7;
        
    }
    
    else if(d4=='D') {
        
        d4=6;
        
    }
    
    else if(d4=='E') {
        
        d4=5;
        
    }

    else if(d4=='F') {
        
        d4=0;

        tot4 = tot4 - 3;
        
    }
    
    if(e4=='S') {
    
        e4=10;
    
    }
    
    else if(e4=='A') {
        
        e4=9;
    
    }
    
    else if(e4=='B') {
        
        e4=8;
        
    }
    
    else if(e4=='C') {
        
        e4=7;
        
    }
    
    else if(e4=='D') {
        
        e4=6;
        
    }
    
    else if(e4=='E') {
        
        e4=5;
        
    }

    else if(e4=='F') {
        
        e4=0;

        tot4 = tot4 - 3;
        
    }
    
    if(f4=='S') {
    
        f4=10;
    
    }
    
    else if(f4=='A') {
        
        f4=9;
    
    }
    
    else if(f4=='B') {
        
        f4=8;
        
    }
    
    else if(f4=='C') {
        
        f4=7;
        
    }
    
    else if(f4=='D') {
        
        f4=6;
        
    }
    
    else if(f4=='E') {
        
        f4=5;
        
    }

    else if(f4=='F') {
        
        f4=0;

        tot4 = tot4 - 3;
        
    }
    
    if(g4=='S') {
    
        g4=10;
    
    }
    
    else if(g4=='A') {
        
        g4=9;
    
    }
    
    else if(g4=='B') {
        
        g4=8;
        
    }
    
    else if(g4=='C') {
        
        g4=7;
        
    }
    
    else if(g4=='D') {
        
        g4=6;
        
    }
    
    else if(g4=='E') {
        
        g4=5;
        
    }

    else if(g4=='F') {
        
        g4=0;

        tot4 = tot4 - 2;
        
    }
    
    if(h4=='S') {
    
        h4=10;
    
    }
    
    else if(h4=='A') {
        
        h4=9;
    
    }
    
    else if(h4=='B') {
        
        h4=8;
        
    }
    
    else if(h4=='C') {
        
        h4=7;
        
    }
    
    else if(h4=='D') {
        
        h4=6;
        
    }
    
    else if(h4=='E') {
        
        h4=5;
        
    }

    else if(h4=='F') {
        
        h4=0;

        tot4 = tot4 - 2;
        
    }
    
    if(i4=='S') {
    
        i4=10;
    
    }
    
    else if(i4=='A') {
        
        i4=9;
    
    }
    
    else if(i4=='B') {
        
        i4=8;
        
    }
    
    else if(i4=='C') {
        
        i4=7;
        
    }
    
    else if(i4=='D') {
        
        i4=6;
        
    }
    
    else if(i4=='E') {
        
        i4=5;
        
    }

    else if(i4=='F') {
        
        i4=0;

        tot4 = tot4 - 2;
        
    }
    
    if(j4=='S') {
    
        j4=10;
    
    }
    
    else if(j4=='A') {
        
        j4=9;
    
    }
    
    else if(j4=='B') {
        
        j4=8;
        
    }
    
    else if(j4=='C') {
        
        j4=7;
        
    }
    
    else if(j4=='D') {
        
        j4=6;
        
    }
    
    else if(j4=='E') {
        
        j4=5;
        
    }

    else if(j4=='F') {
        
        j4=0;

        tot4 = tot4 - 1;
        
    }

    var Total5=(4*a4)+(3*b4)+(3*c4)+(3*d4)+(3*e4)+(3*f4)+(2*g4)+(2*h4)+(2*i4)+(1*j4);
     
    var Result5=Total5/tot5;
    
    var n5 = Result5.toFixed(3);
    
    document.getElementById("Result5").innerHTML="SGPA : "+n5;

    var cgpa5;
    
    var sgpa5;
    
    var credit5;
    
    sgpa5 = Total1 + Total2 + Total3 + Total4 + Total5;
    
    credit5 = tot1 + tot2 + tot3 + tot4 + tot5;
    
    cgpa5 = sgpa5/credit5;
    
    let out5 = cgpa5.toFixed(3);
    
    document.getElementById("cgpa4").innerHTML="CGPA : "+ out5;

    // Semester 6

    var a5=(document.getElementById("subject50").value);
    
    b5=(document.getElementById("subject51").value);
    
    c5=(document.getElementById("subject52").value);
    
    d5=(document.getElementById("subject53").value);
    
    e5=(document.getElementById("subject54").value);
    
    f5=(document.getElementById("subject55").value);	

    g5=(document.getElementById("subject56").value);	

    h5=(document.getElementById("subject57").value);	

    i5=(document.getElementById("subject58").value);	

    j5=(document.getElementById("subject59").value);

    tot6 = 26;

    if(a5=='S') {

        a5=10;
    
    }
    
    else if(a5=='A') {
        
        a5=9;
    
    }
    
    else if(a5=='B') {
        
        a5=8;
        
    }
    
    else if(a5=='C') {
        
        a5=7;
        
    }
    
    else if(a5=='D') {
        
        a5=6;
        
    }
    
    else if(a5=='E') {
        
        a5=5;
        
    }

    else if(a5=='F') {
        
        a5=0;

        tot5 = tot5 - 3;
        
    }
    
    if(b5=='S') {
    
        b5=10;
    
    }
    
    else if(b5=='A') {
        
        b5=9;
    
    }
    
    else if(b5=='B') {
        
        b5=8;
        
    }
    
    else if(b5=='C') {
        
        b5=7;
        
    }
    
    else if(b5=='D') {
        
        b5=6;
        
    }
    
    else if(b5=='E') {
        
        b5=5;
        
    }

    else if(b5=='F') {
        
        b5=0;

        tot5 = tot5 - 3;
        
    }
    
    if(c5=='S') {
    
        c5=10;
    
    }
    
    else if(c5=='A') {
        
        c5=9;
    
    }
    
    else if(c5=='B') {
        
        c5=8;
        
    }
    
    else if(c5=='C') {
        
        c5=7;
        
    }
    
    else if(c5=='D') {
        
        c5=6;
        
    }
    
    else if(c5=='E') {
        
        c5=5;
        
    }
    
    else if(c5=='F') {
        
        c5=0;

        tot5 = tot5 - 3;
        
    }

    if(d5=='S') {
    
        d5=10;
    
    }
    
    else if(d5=='A') {
        
        d5=9;
    
    }
    
    else if(d5=='B') {
        
        d5=8;
        
    }
    
    else if(d5=='C') {
        
        d5=7;
        
    }
    
    else if(d5=='D') {
        
        d5=6;
        
    }
    
    else if(d5=='E') {
        
        d5=5;
        
    }

    else if(d5=='F') {
        
        d5=0;

        tot5 = tot5 - 4;
        
    }
    
    if(e5=='S') {
    
        e5=10;
    
    }
    
    else if(e5=='A') {
        
        e5=9;
    
    }
    
    else if(e5=='B') {
        
        e5=8;
        
    }
    
    else if(e5=='C') {
        
        e5=7;
        
    }
    
    else if(e5=='D') {
        
        e5=6;
        
    }
    
    else if(e5=='E') {
        
        e5=5;
        
    }

    else if(e5=='F') {
        
        e5=0;

        tot5 = tot5 - 3;
        
    }
    
    if(f5=='S') {
    
        f5=10;
    
    }
    
    else if(f5=='A') {
        
        f5=9;
    
    }
    
    else if(f5=='B') {
        
        f5=8;
        
    }
    
    else if(f5=='C') {
        
        f5=7;
        
    }
    
    else if(f5=='D') {
        
        f5=6;
        
    }
    
    else if(f5=='E') {
        
        f5=5;
        
    }

    else if(f5=='F') {
        
        f5=0;

        tot5 = tot5 - 3;
        
    }
    
    if(g5=='S') {
    
        g5=10;
    
    }
    
    else if(g5=='A') {
        
        g5=9;
    
    }
    
    else if(g5=='B') {
        
        g5=8;
        
    }
    
    else if(g5=='C') {
        
        g5=7;
        
    }
    
    else if(g5=='D') {
        
        g5=6;
        
    }
    
    else if(g5=='E') {
        
        g5=5;
        
    }

    else if(g5=='F') {
        
        g5=0;

        tot5 = tot5 - 2;
        
    }
    
    if(h5=='S') {
    
        h5=10;
    
    }
    
    else if(h5=='A') {
        
        h5=9;
    
    }
    
    else if(h5=='B') {
        
        h5=8;
        
    }
    
    else if(h5=='C') {
        
        h5=7;
        
    }
    
    else if(h5=='D') {
        
        h5=6;
        
    }
    
    else if(h5=='E') {
        
        h5=5;
        
    }

    else if(h5=='F') {
        
        h5=0;

        tot5 = tot5 - 2;
        
    }
    
    if(i5=='S') {
    
        i5=10;
    
    }
    
    else if(i5=='A') {
        
        i5=9;
    
    }
    
    else if(i5=='B') {
        
        i5=8;
        
    }
    
    else if(i5=='C') {
        
        i5=7;
        
    }
    
    else if(i5=='D') {
        
        i5=6;
        
    }
    
    else if(i5=='E') {
        
        i5=5;
        
    }

    else if(i5=='F') {
        
        i5=0;

        tot5 = tot5 - 2;
        
    }
    
    if(j5=='S') {
    
        j5=10;
    
    }
    
    else if(j5=='A') {
        
        j5=9;
    
    }
    
    else if(j5=='B') {
        
        j5=8;
        
    }
    
    else if(j5=='C') {
        
        j5=7;
        
    }
    
    else if(j5=='D') {
        
        j5=6;
        
    }
    
    else if(j5=='E') {
        
        j5=5;
        
    }

    else if(j5=='F') {
        
        j5=0;

        tot5 = tot5 - 1;
        
    }

    var Total6=(3*a5)+(3*b5)+(3*c5)+(4*d5)+(3*e5)+(3*f5)+(2*g5)+(2*h5)+(2*i5)+(1*j5);
 
    var Result6=Total6/tot6;
 
    var n6 = Result6.toFixed(3);
 
    document.getElementById("Result6").innerHTML="SGPA : "+n6;

    var cgpa6;
 
    var sgpa6;
 
    var credit6;
 
    sgpa6 = Total1 + Total2 + Total3 + Total4 + Total5 + Total6;
 
    credit6 = tot1 + tot2 + tot3 + tot4 + tot5 + tot6;
 
    cgpa6 = sgpa6/credit6;
 
    let out6 = cgpa6.toFixed(3);
 
    document.getElementById("cgpa6").innerHTML="CGPA : "+ out6;

    // Semester 7

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

    var cgpa7;
 
    var sgpa7;
 
    var credit7;
 
    sgpa7 = Total1 + Total2 + Total3 + Total4 + Total5 + Total6 + Total7;
 
    credit7 = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7;
 
    var cgpa7 = sgpa7/credit7;
 
    let out7 = cgpa7.toFixed(3);
 
    document.getElementById("cgpa7").innerHTML="CGPA : "+ out7;

    // Semester 8

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

    var sgpa8 = Total1 + Total2 + Total3 + Total4 + Total5 + Total6 + Total7 + Total8;

    var credit8 = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7 + tot8;

    var cgpa8 = sgpa8/credit8;

    let out8 = cgpa8.toFixed(3);

    document.getElementById("cgpa8").innerHTML="CGPA : "+ out8;

}