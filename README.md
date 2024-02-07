# quiz-api-sandbox


git pull upstream main

    fetch('https://the-trivia-api.com/v2/questions')


Sample return Data: an array of objects. Each object is a quiz question. 

[
    {"category":"society_and_culture","id":"622a1c3a7cc59eab6f9511ca","correctAnswer":"Spring","incorrectAnswers":["Winter","Summer","Fall"],"question":{"text":"Persephone was the Greek goddess of what?"},"tags":["ancient_greece","mythology","society_and_culture"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},
    
    {"category":"history","id":"62611faf014f58b5fc1a3fd0","correctAnswer":"1978","incorrectAnswers":["1972","1984","1990"],"question":{"text":"In which year was the first “test tube baby” conceived using IVF?"},"tags":["events","firsts","medicine","history"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},
    
    {"category":"music","id":"622a1c357cc59eab6f94fd7b","correctAnswer":"Elton John","incorrectAnswers":["David Bowie","John Lennon","Tom Jones"],"question":{"text":"Who Was The Star Behind Rocket Records?"},"tags":["people","music"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},
    
    {"category":"geography","id":"623735e3cfe13103f55eb57c","correctAnswer":"Suriname","incorrectAnswers":["Sri Lanka","Serbia","Sierra Leone"],"question":{"text":"Which region of the world uses '.sr' at the end of its web addresses?"},"tags":["geography"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},
    
    {"category":"science","id":"62443758746187c5e7be9349","correctAnswer":"Dry Ice","incorrectAnswers":["Chloroform","Baking Soda","Epsom salt"],"question":{"text":"What is solid carbon dioxide commonly known as?"},"tags":["science"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},
    
    {"category":"sport_and_leisure","id":"622a1c367cc59eab6f9500dc","correctAnswer":"Super Mario Bros.","incorrectAnswers":["Zelda","Call of Duty","Halo"],"question":{"text":"If you're killing a goomba, what game are you playing?"},"tags":["video_games","sport"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},
    
    {"category":"film_and_tv","id":"622a1c377cc59eab6f95064a","correctAnswer":"Frances McDormand","incorrectAnswers":["Rachel Weisz","Frances Fisher","Salma Hayek"],"question":{"text":"Which actress has starred in films including Transformers: Dark of the Moon and Three Billboards Outside Ebbing, Missouri?"},"tags":["film_and_tv"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},
    
    {"category":"history","id":"622a1c3c7cc59eab6f951b10","correctAnswer":"Egypt","incorrectAnswers":["Greece","Australia","Italy"],"question":{"text":"In which country was the Rosetta Stone found?"},"tags":["history"],"type":"text_choice","difficulty":"medium","regions":[],"isNiche":false},
    
    {"category":"history","id":"62611f334b176d54800e3d48","correctAnswer":"1954","incorrectAnswers":["1970","1933","1981"],"question":{"text":"In which year was the first successful organ transplant?"},"tags":["events","firsts","medicine","history"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false},
    
    {"category":"music","id":"625063b8e12f6dec240bdf7d","correctAnswer":"Gerardo","incorrectAnswers":["The Waitresses","Dexy's Midnight Runners","Cheryl Lynn"],"question":{"text":"'Rico Suave' was a one hit wonder in 1991 by which artist?"},"tags":["songs","one_hit_wonders","music"],"type":"text_choice","difficulty":"hard","regions":[],"isNiche":false}
]


await new Promise(resolve => setTimeout(resolve, 2000)); // 2000 milliseconds (2 seconds)
https://github.com/users/tugii21/projects/1/


async function asyncFunction() {
  console.log("Start of asyncFunction");
  // Simulating an asynchronous operation with a delay
  await new Promise(resolve => setTimeout(resolve, 2000)); // 2000 milliseconds (2 seconds)
  console.log("End of asyncFunction");
}
// Call the async function
asyncFunction();

Javascript Functions:

runQuiz()
displayQuestion()
displayAnswerOptions()
checkAnswer()
displayCorrectAnswer()

incrementCorrectCount()
incrementWrongCount()

Event reference:
[text](https://developer.mozilla.org/en-US/docs/Web/Events)

FormData:
The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch(), XMLHttpRequest.send() or navigator.sendBeacon() methods. It uses the same format a form would use if the encoding type were set to "multipart/form-data".
https://developer.mozilla.org/en-US/docs/Web/API/FormData

.innertext or .textcontent ???


