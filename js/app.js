'use strict';
let score=0;

//q1..........
function question1(){
 let favouriteMovie=prompt('Is my favourite movie harry potter?');
console.log(favouriteMovie);

while (!favouriteMovie) {
    favouriteMovie=prompt('please answer the question');
}
favouriteMovie=favouriteMovie.toLowerCase();

 if (favouriteMovie==='yes' || favouriteMovie==='y') {
//     console.log("you\'re right, harry potter is my favourite color");
alert("you're right, harry potter is my favourite movie");
score++;
 }else if (favouriteMovie==='no' || favouriteMovie==='n'){
    
//     console.log('wrong answer');
alert('wrong answer');}
else {
    alert('please only answer yes/y or no/n');
}

}
question1();

//q2............
function question2(){
 let read=prompt('Do you think I read harry potter\'s book?');
 console.log(read);
 while (!read) {
    read=prompt('please answer the question');
  }

read=read.toLowerCase();

 if (read=='yes' || read=='y') {
//     console.log('wrong answer, not yet');
alert('wrong answer, not yet');
 }else if (read=='no' || read=='n')  {
    
//     console.log(('you\'re right, I didnt read harry potter yet');
alert('you\'re right, I didnt read harry potter yet');
score++;
}
else {
    alert('please only answer yes/y or no/n');
}

}

question2();
//q3.........
let readL=prompt('Do you think I love reading in general? ');
console.log(readL);
while (!readL) {
    readL=prompt('please answer the question');
  }

readL=readL.toLowerCase();

 if (readL=='yes'|| readL=='y') {
//     console.log('you\'re right, I love reading');
alert('you\'re right, I love reading');
score++;
 }else if(readL=='no'|| readL=='n'){
    
//     console.log(('wrong answer');
alert('wrong answer');}
else {
    alert('please only answer yes/y or no/n');
}


//q4.........
let favouriteColor=prompt('Is my favourite color red?');
console.log(favouriteColor);
while (!favouriteColor) {
    favouriteColor=prompt('please answer the question');
  }

 favouriteColor=favouriteColor.toLowerCase();


 if (favouriteColor=='yes' || favouriteColor=='y') {
//     console.log("you\'re right, red is my favourite color");
alert("you're right, red is my favourite color");
score++;
 }else if (favouriteColor=='no' || favouriteColor=='n'){
    
//     console.log('wrong answer');
alert('wrong answer');} 
else {
    alert('please only answer yes/y or no/n');
}



//q5.........
let age=prompt('Do you think I\'m 22 years old?');
console.log(age);
while (!age) {
    age=prompt('please answer the question');
  }

age=age.toLowerCase();

 if (age=='yes' || age=='y' ) {
//     console.log("I\'m 22 years old");
alert("you're right, I\'m 22 years old");
score++;
 }else if  (age=='no' || age=='n' ){
    
//     console.log('wrong answer');
alert('wrong answer');}
else {
    alert('please only answer yes/y or no/n');
}


//............
let Username=prompt('What\s your name ');
while (!Username) {
    Username=prompt('please answer the question');
  }
document.write('nice to meet you ' + Username); 



                 //Q2 lab04......
  let count=0;
while(count<4){
let userNum=prompt('GUESS how many book did I read,please choose a number between 10 and 30');
if(userNum && (userNum>9 && userNum<31)){
           if (userNum == 15){ 
               alert('congrats,correct answer');
               score++;
            break;}
       else if(userNum <15){
            alert('your guess is low');
            count++;}
             else if(userNum > 15){
            alert('your guess is high');
            count++;}
            if(count==4){
            alert('you tried 4 times,the correct answer is 15');}} 
            else {
                    alert('Invalid ,please choose a number between 10 and 30');
            }
}  
                 


               //Q3.............

           let counter=0;
            let country=['thailand','peru','greece','italy'];
            let countryVisit ='';
            for(let i=6; i>0; i--){
                if(counter>=1){
                    break;
                }
                countryVisit=prompt('which country do you think I might visit next year? hint:choose from the top 10 countries bellow');
                countryVisit=countryVisit.toLowerCase();
                for ( let j = 0 ; j< country.length; j++){
               
                if(country[j]==countryVisit){
                    console.log('true');
                    score++;
                    counter++;
                    alert('congrats,correct answer');
                    
                    console.log(counter);
                    break;
                }  

            } 
             if(i==1){
                 alert('you tried 6 times');
                }
                if(i!=1 && counter==0){  alert('try again you stil have '+(i-1) + ' chances');}
        }
         document.write('<br>I might visit those countries next year: ');

        for(let i=0;i<country.length;i++){
            document.write(country[i]+', ');} 

           
               //Q4..........
            document.write('<br> YOU ANSWERED '+ score +' CORRECT ANSWERS OUT OF 7 <br>'); 
          
          
          
          
          
          
          
          
           







        

              

