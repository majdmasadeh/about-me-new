'use strict';
let score = 0;
var username = prompt("Please Enter your name").toUpperCase()
alert ("Welcome"+username);
alert('let\'s play a guessing game about me.');
/*

function quizSuring (){
    let sureQuestion = prompt('are you ready to have this quiz? if yes insert Y else insert N ').toUpperCase()
    
    switch (sureQuestion) {
        case 'Y':
            alert('pres ok to continue');
            score=score+1;
            break;
        case 'N':
            alert('close the Tab to leave this site');
            break;
        default:
            text = 'this is not an expected value try again'
            console.log(text);
            break;
    }
    }
    quizSuring ();*/
    

function MYMAJOR(){
    let mymajor = prompt('Iam a Singer ? yes or no'); 
console.log(mymajor);
if (mymajor==='YES' || mymajor==='Y')
{alert(' Wrong ans.');}
else{if (mymajor==='NO' || mymajor==='N')
    alert('correct Ans.');
score=score+1}

}
MYMAJOR();


function sport(){
let sportQues=prompt('is majd like sport?(yes/y or no/n)');
console.log(sportQues);
if (sportQues==='YES' || sportQues==='Y')
{alert('correct ans.');
score=score+1;}
else{if (sportQues==='NO' || sportQues==='N')
    alert('Wrong Ans.');}
}
sport();




 function MYHOME (){
    let myhome = prompt('do I live in Irbid ? yes or no');
    console.log(myhome)
    if (myhome==='YES' || myhome ==='Y')
{alert(' correct ans.');
score=score+1;}
else{if (myhome==='NO' || myhome ==='N')
    alert(' Wrong Ans.');}

    }
    
    MYHOME();

function place(){
let favPlace=prompt('is majds  favourite place Lebanon?(yes/y or no/n)');
console.log(favPlace);
if (favPlace==='YES' || favPlace==='Y')
{alert('correct ans.');
score=score+1;}
else{
    if (favPlace==='NO' || favPlace==='N')
    alert('Wrong Ans.');}
}

place();

function MYDRINK(){
    let mydrink = prompt('Is American coffee my Favourite drink ? yes or no');
    console.log(mydrink);
    if (mydrink==='YES' || mydrink==='Y')
{alert('correct ans.');
score=score+1;}
else{if (mydrink==='NO' || mydrink==='N')
    alert('Wrong Ans.');
    
}
}
    
    MYDRINK();


    function luckNum(){
        for (let i = 1; i <=10; i++) {
            let luckNum = prompt('please guess my luckNum ');
            if (luckNum >= 8) {
                
                alert('it is too high')
            } else if (luckNum <= 6) {
                
                alert('it is too low')
            } else if (luckNum == 7) {
                //console.log(myAge);
                //console.log('it is true');
                alert('it is true')
                score++;
                break;
        
            }
        }
        }
        luckNum();
   
    
        let animals = ['turtile', 'cat', 'dog'];
        function fAnimals(){
        let userAns = prompt('Guess What is my fav animal ? ');
        
        let flag = false;
        for (let t = 1; t < 3; t++) {
            for (let f = 0; f < animals.length; f++) {
                if (userAns == animals[f]) {
                    alert('You got it  ');
                   
        
                    flag = true;
                    score++;
                    return score;
                    break;
                }
        
        
            }
            if (flag == true) { break; }
            else {
                alert(userAns + " Is a Wrong Answer Please try again ");
                userAns = prompt('Try Again');
        
            }
        }
        
        
        if (flag == false) {
            alert('Try harder Next Time');
            alert('The right answers is : ' + animals);
            document.write('<br>');
            document.write('my fav animal is answers is : ' + animals);
        
        }
        return animals;
        }
         fAnimals();
        