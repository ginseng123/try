let contents = [
  { description1 : "뱀에게 물렸을 시",
    description2 : "1. 독사여부 확인 ",
    description3 : "&#183 뱀에 물렸을 때의 상처자국을 보고 독사여부를 확인한다.(머리가 삼각형이고 물린 앞쪽에 두 개의 이빨 자국이면 독사)",
    description4 : "2. 환자 안정",
    description5 : "&#183 환자를 눕혀서 안정시킨 뒤 움직이지 않게 한다.",
    description6 : "3. 압박하여 묶기",
    description7 : "&#183 물린 곳에서 5~10cm 위를 적당한 압력으로 묶어 독이 퍼지지 않게 한다. ",
    description8 : "4. 신속하게 병원으로 이송",
    description9 : "&#183 몸을 고정시키고 손상부위를 심장보다 낮게 하여 신속하게 병원으로 이송한다.",

    imageUrl : "../images/뱀물림.png"
  }
  ];
  let productshtml = "";

  for (let i = 0; i < contents.length; i++)
  {
    let content = contents[i];
    productshtml = 
    productshtml +
    '<div id = "conwrap">'+ 
    '<div id ="content_wrap">'+
    '<h2 id = "content_subtitle">'+
    content.description1+
    '</h2>' +
    '<img id = "content_image" src ="'+ content.imageUrl +'">'+
    '<p id = "content_container">'+
    content.description2+
    '</p>'+   '<p id = "content_container">'+
    content.description3+
    '</p>'+
        '<p id = "content_container">'+
    content.description4+
    '</p>'+   '<p id = "content_container">'+
    content.description5+
    '</p>'+
        '<p id = "content_container">'+
    content.description6+
    '</p>'+
    '<p id = "content_container">'+
    content.description7+
    '</p>'+
    '<p id = "content_container">'+
    content.description8+
    '</p>'+
    '<p id = "content_container">'+
    content.description9+
    '</p>'+
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;