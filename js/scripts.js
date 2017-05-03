
var pigLatinWord = function(word) {
var result = [];
var array = word.split("");
if (array[0] === "a" || array[0] === "e" || array[0] === "i" || array[0] === "o" || array[0] === "u"|| array[0] === "A" || array[0] === "E" || array[0] === "I" || array[0] === "O" || array[0] === "U"){
array.push("way");
array = array.join("");
result.push(array);
}
else if (array[0] === "q" && array[1] === "u"){
  array.splice(0,2);
  array.push("quay");
  var array = array.join("");
  result.push(array);
}
  else {
    var consonant = [];
    var test = array;
    var counter = 0;
    for (var i=0; i<array.length; i++){
      if (array[i] === "a" || array[i] === "e" || array[i] === "i" || array[i] === "o" || array[i] === "u") {
        break;

      }
      else{
        consonant.push(array[i]);
        counter += 1;
      }
    }
    test.splice(0,counter);
    var temp = test.concat(consonant);
    temp.push("ay");
    temp = temp.join("");
    result.push(temp);
  };
  return result;
};


var pigLatin = function(sentence){
  var words = sentence.split(" ");
  var sentenceResult = [];
  for (i = 0; i<words.length; i++){
    //debugger;
  var result = pigLatinWord(words[i]);
  sentenceResult.push(result);
  };
  sentenceResult = sentenceResult.join(' ');
  return sentenceResult;
};



$(document).ready(function(){
 $("form#mainform").submit(function(event){
   var sentence = $("input#sentence").val();

   var result2 = pigLatin(sentence);
   $("#output").text(result2);



   event.preventDefault()
 });
});
