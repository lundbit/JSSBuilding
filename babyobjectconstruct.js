//Building object constructors

// use semicolons and the .this property syntax and can include method!
function JssPractice(title, author, year, github_repo, views){
    this.title = title;
    this.author = author;
    this.year = year;
    this.github_repo = github_repo;
    this.views = views;
    this.updateViews = function() {
      return ++this.views;
    };
}

// Can now set up several events using same format as JssPractice
/*
var info01 = new JssPractice("JSS Building","Brad Lund",2018,true,0);
var info02 = new JssPractice("Object Building","Brad Lund",2018,true,9762);
console.log(info01);
console.log(info02);
*/


// or set to an array

  var JSSBuilders = [
    new JssPractice("JSS Building","Brad Lund",2018,true,0),
    new JssPractice("Object Building","Brad Lund",2018,true,9762)
];

console.log(JSSBuilders);
