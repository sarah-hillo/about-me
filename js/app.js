'use strict';
let score=0;

function question1(){
 let favouriteMovie=prompt('Is my favourite movie harry potter?');
console.log(favouriteMovie);

while (!favouriteMovie) {
    favouriteMovie=prompt('please answer the question');
}
favouriteMovie=favouriteMovie.toLowerCase();

 if (favouriteMovie==='yes' || favouriteMovie==='y') {

alert("you're right, harry potter is my favourite movie");
score++;
 }else if (favouriteMovie==='no' || favouriteMovie==='n'){
    
alert('wrong answer');}
else {
    alert('please only answer yes/y or no/n');
}

}
question1();


function question2(){
 let read=prompt('Do you think I read harry potter\'s book?');
 console.log(read);
 while (!read) {
    read=prompt('please answer the question');
  }

read=read.toLowerCase();

 if (read=='yes' || read=='y') {

alert('wrong answer, not yet');
 }else if (read=='no' || read=='n')  {
    

alert('you\'re right, I didnt read harry potter yet');
score++;
}
else {
    alert('please only answer yes/y or no/n');
}

}

question2();


function question3(){
let readL=prompt('Do you think I love reading in general? ');
console.log(readL);
while (!readL) {
    readL=prompt('please answer the question');
  }

readL=readL.toLowerCase();

 if (readL=='yes'|| readL=='y') {
alert('you\'re right, I love reading');
score++;
 }else if(readL=='no'|| readL=='n'){
    
alert('wrong answer');}
else {
    alert('please only answer yes/y or no/n');
}
}
question3();


function question4(){
let favouriteColor=prompt('Is my favourite color red?');
console.log(favouriteColor);
while (!favouriteColor) {
    favouriteColor=prompt('please answer the question');
  }

 favouriteColor=favouriteColor.toLowerCase();


 if (favouriteColor=='yes' || favouriteColor=='y') {
alert("you're right, red is my favourite color");
score++;
 }else if (favouriteColor=='no' || favouriteColor=='n'){
    
alert('wrong answer');} 
else {
    alert('please only answer yes/y or no/n');
}

}
question4();


function question5(){
let age=prompt('Do you think I\'m 22 years old?');
console.log(age);
while (!age) {
    age=prompt('please answer the question');
  }

age=age.toLowerCase();

 if (age=='yes' || age=='y' ) {

alert("you're right, I\'m 22 years old");
score++;
 }else if  (age=='no' || age=='n' ){
    

alert('wrong answer');}
else {
    alert('please only answer yes/y or no/n');
}
}
question5();

let Username=prompt('What\s your name ');
while (!Username) {
    Username=prompt('please answer the question');
  }
document.write('Nice to meet you ' + Username); 



function question6(){              
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
                 
}
question6();
 

        function question7(){   
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
        
          
           
           }
            question7();
          

            document.write('<br> YOU ANSWERED '+ score +' CORRECT ANSWERS OUT OF 7 <br><br>'); 
      
          
          
          
          
           







        

              

