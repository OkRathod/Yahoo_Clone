
    const d = new Date();
    let hour = d.getHours();
    if(hour>6 && hour<12){
        document.querySelector('.greetings').innerHTML="Good morning!";
    }
    else if(hour>=12 && hour<18){
        document.querySelector('.greetings').innerHTML="Good afternoon!";
    }
    else{
        document.querySelector('.greetings').innerHTML="Good evening!";
    }
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.querySelector('.date').innerHTML= "Today is "+months[d.getMonth()]+" "+d.getDate()+".";

    /*

    if(hour<18 && hour>5){
        
        document.querySelector(".dna").setAttribute(src,"./images/sunrise-8200361-6604896.mp4");
    }
    else{
        document.querySelector(".dna").setAttribute(src,"./images/sunrise-8200361-6604896.mp4");
    }
    
    */

    if(hour<18 && hour>5){
        
        document.querySelector(".weather").innerHTML="<video src='./images/sunrise-8200361-6604896.mp4' class='dna' autoplay type='video/mp4'></video>";
    }
    else{
        document.querySelector(".weather").innerHTML="<video src='./images/moon-5704305-4741024.mp4' class='dna' autoplay type='video/mp4'></video>";
    }
    