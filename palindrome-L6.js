// JavaScript Document

 function mainProg() {    
        var word = [];
        word=document.getElementById("palindrome").value;
        var length = word.length;
        var blank=" ";
        var counter=0;
        var spacechecker = [];
        var spacechecker=word;
        var max=length-1;
        var flag=0;
        for(counter=0;counter<=max;counter++) {
            if (spacechecker[counter] == blank) {
                alert("Invalid entry! Spaces are not allowed.");
                counter=max+5; 
                flag=1; } }
        if (wordcheck(word) && flag==0) { // word check
            palindromecheck(word); }
       } //End Function mainProg
   function wordcheck(word) { //Validates the length of the word
            length = word.length;
            if (length<=10 && length>=3) { //Begin If..then
                return true;
                palindromecheck();
            } else if (length<3) {
                alert("Invalid Entry! Word is too short.");
                return false;
            } else if (length == null) {
                alert("Please enter a word") ;
                return false;
            } else {  alert("Invalid entry! Your word should be no more than 10 characters");
                return false;
            } //End Ifthen
            } //End Function wordcheck
        
   function palindromecheck(word) { //Check the word is a palindrome or not
            var i=0;
            var wordchecker=[];
            var wordchecker=word;
            var length=word.length;
            var max=length-1;
            var originalMax=max;
            for(ctr=0;ctr<=originalMax; ctr++) { //start loop
                if (wordchecker[i] == wordchecker[max]) {
                    i=i+1;
                    max=max-1; 
                    if (ctr == originalMax) {
                       alert("You're word is a PALINDROME.");   } 
                } else {  alert("You're word is NOT a palindrome."); 
                        break; }
            } // End Of Loop
         } //End Of Function palindromecheck