h=0;
m=0;
s=0;

function reloj()
{
     
    s++;
    if(s>59)
    {
        s=0;
        m = m+1;
    }
    if(m>59)
    {
        m=0;
        h = h+1;
    }
    if(h>23)
    {
        h=0;
        m=0;
        s=0;
    }
        
    console.log(h +':' + m + ':' + s); //mostrar en pantalla
    setTimeout(() => {reloj();}, 1000);   
    
  }


  reloj();