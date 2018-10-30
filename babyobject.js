var jsspractice = new Object();

// bulding properties for the object and use commas and make sure object and
// var match up.
var jsspractice = {
  title: "JSS Building",
  author: "Brad Lund",
  year: 2018,
  github_repo: true,
  views: 0,

  //update views using a method
  updateViews: function() {
    return ++jsspractice.views;
  }
}

// display whole object as a list
console.log(jsspractice);

// display using object.property syntax
console.log(jsspractice.title,jsspractice.author);

//display update of updateViews
console.log("Previous views: " + jsspractice.views);
jsspractice.updateViews();
console.log("Updated views: " + jsspractice.views);
