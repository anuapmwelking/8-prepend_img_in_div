let tagLists = document.getElementsByClassName("tag-lists");

for (let i = 0; i < tagLists.length; i++) {
  var a = tagLists[i].getElementsByTagName("a");
  for (let j = 0; j < a.length; j++) {
    let list = a[j].innerHTML;

    function createImage(url) {
      let img2 = document.createElement("img");
      img2.setAttribute("src", url);
      img2.style.width = "40px";
      a[j].prepend(img2);
    }

    if (list.includes("Chemical/Pharmaceuticals")) {
      createImage(
        "https://www.freeiconspng.com/thumbs/chemical-icon-png/chemical-icon-png-6.png"
      );
    }
    if (list.includes("Coal")) {
      createImage("https://cdn-icons-png.flaticon.com/512/1946/1946176.png");
    }
    if (list.includes("Consumer Goods")) {
      createImage("https://static.thenounproject.com/png/4908330-200.png");
    }

    if (list.includes("Courier and Postal")) {
      createImage("https://cdn-icons-png.flaticon.com/512/177/177818.png");
    }
    if (list.includes("Food/Milk")) {
      createImage("https://cdn-icons-png.flaticon.com/512/112/112431.png");
    }
    if (list.includes("Inspection")) {
      createImage("https://cdn-icons-png.flaticon.com/512/1814/1814438.png");
    }
    if (list.includes("Logistics")) {
      createImage("https://cdn-icons-png.flaticon.com/512/46/46057.png");
    }
    if (list.includes("Manufacturing")) {
      createImage("https://cdn-icons-png.flaticon.com/512/1946/1946176.png");
    }
    if (list.includes("Petro")) {
      createImage(
        "https://www.freeiconspng.com/thumbs/petroleum-icon-png/oil-petroleum-icon-png-23.png"
      );
    }
    if (list.includes("Retail")) {
      createImage(
        "https://www.clipartmax.com/png/middle/217-2179733_retail-icon.png"
      );
    }
    if (list.includes("Seal")) {
      createImage(
        "https://cdn3.vectorstock.com/i/1000x1000/43/72/valid-seal-icon-vector-13484372.jpg"
      );
    }
    if (list.includes("Banking")) {
      createImage(
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/bank-account-banking-building-1-31235.png"
      );
    }
  }
}
