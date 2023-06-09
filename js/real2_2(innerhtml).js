let contents = [
  { description1 : "벌에게 쏘였을 시",
    description2 : "1. 벌침찾기 ",
    description3 : "&#183 빨갛게 부어오른 부위에 검은 침처럼 보이는 벌침을 찾는다. ",
    description4 : "2. 벌침 제거",
    description5 : "&#183 신용카드 등을 이용해 피부를 긁어내듯 침을 제거한다.",
    description6 : "3. 통증(부기)완화",
    description7 : "상처 부위에 얼음주머니를 대 통증과 부기를 가라 앉힌다.",
    description8 : "",
    imageUrl : "../images/벌쏘임.png"
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
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;