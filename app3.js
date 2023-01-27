// let newText = document.createTextNode("Choose by Industry");
let tagLists = document.getElementsByClassName("tag-lists");
for (let i = 0; i < tagLists.length; i++) {
  //   console.log(tagLists[i]);
  var span = tagLists[i].getElementsByTagName("span");
  //   console.log(a);
  for (let j = 0; j < span.length; j++) {
    span[j].style.margin = "20px";
    span[j].classList.add("section-title");
    console.log(span[j].outerHTML);
    span[j].outerHTML = "<h3>" + span[j].innerHTML + "</h3>";
  }
}

// setTitle = function(id, tag, title) {
//     var container = document.getElementById(id);
//     container.innerHTML = '<' + tag + '>' + title + '</' + tag + '>';
//   }

// setTitle('demo', 'h1', 'My Title');
