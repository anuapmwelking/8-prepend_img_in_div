let tagLists = document.getElementsByClassName("tag-lists");

for (let i = 0; i < tagLists.length; i++) {
  var a = tagLists[i].getElementsByTagName("a");
  for (let j = 0; j < a.length; j++) {
    let list2 = a[j].innerHTML;
    // function createImage(url) {
    //   let img2 = document.createElement("img");
    //   img2.setAttribute("src", url);
    //   img2.style.width = "40px";
    // }

    if (list2.includes("Chemical/Pharmaceuticals")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://www.freeiconspng.com/thumbs/chemical-icon-png/chemical-icon-png-6.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    // if (list2.includes("Chemical/Pharmaceuticals")) {
    //   let img = document.createElement("img");
    //   img.setAttribute(
    //     "src",
    //     "https://www.freeiconspng.com/thumbs/chemical-icon-png/chemical-icon-png-6.png"
    //   );
    //   img.style.width = "40px";
    //   a[j].prepend(img);
    // }
    if (list2.includes("Coal")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/1946/1946176.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Consumer Goods")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://static.thenounproject.com/png/4908330-200.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Courier and Postal")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/177/177818.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Food/Milk")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/112/112431.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Inspection")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/1814/1814438.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Logistics")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/46/46057.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Manufacturing")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/2051/2051425.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Petro")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://www.freeiconspng.com/thumbs/petroleum-icon-png/oil-petroleum-icon-png-23.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Retail")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://www.clipartmax.com/png/middle/217-2179733_retail-icon.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Seal")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn3.vectorstock.com/i/1000x1000/43/72/valid-seal-icon-vector-13484372.jpg"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
    if (list2.includes("Banking")) {
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/bank-account-banking-building-1-31235.png"
      );
      img.style.width = "40px";
      a[j].prepend(img);
    }
  }
}
