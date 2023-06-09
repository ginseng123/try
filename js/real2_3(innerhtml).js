let contents = [
  { description1 : "3.독버섯 구별방법",
    description2 : "&#183-버섯의 색깔이 화려하면 독버섯.",
    description3 : "&#183-독버섯의 자루는 세로로 찢어지지 않으므로 자루가 세로로 찢어지는 버섯은 먹을 수 있다.",
    description4 : "&#183-상처에 출혈이 있으면 깨끗한 수건이나 손수건을 댄 후 손으로 압박한다.",
    description5 : "&#183-가지와 버섯은 음식 궁합이 잘 맞아서 가지를 버섯과 같이 먹으면 버섯의 독이 없어진다.",
    description6 : "&#183-나무에서 자라는 버섯은 무조건 안전하다고 알려져 있다.",
    description7 : "&#183-싸리버섯류는 식용 버섯으로 알려져 있다.",
    imageUrl : "../images/mushroom1.png"
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