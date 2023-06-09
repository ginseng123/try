let contents = [
  { description1 : "이물질이 목에 걸렸을 때",
    description2 : "&#183 환자 스스로 공기의 흐름이 있는 기침을 하고 있다면 불완전 폐쇄라고 한다. 이 때는 건들지 않고 지켜본다.",
    description3 : "&#183 환자의 기침에 공기 이동이 없거나 얼굴이 파랗게 변하고 있다면 하임리히법을 실시한다.",
    description4 : "",
    description5 : "",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/목.jpeg"
  },{
    description1 : "하임리히법 (복부 밀어내기)",
    description2 : "&#183 1. 뒤에서 환자의 명치와 배꼽 사이를 껴안는 느낌으로 잡는다.",
    description3 : "&#183 2. 순간적으로 강하게 후심방으로 당겨 올려서 강한 압력을 주어 이물질이 나오게 한다.",
    description4 : "",
    description5 : "",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/하임리히법.jpg"
  },{
    description1 : "목에 가시가 걸렸을 때",
    description2 : "&#183 핀셋으로 빼거나 맨밥을 삼키는 것은 오히려 식도를 상하게 한다.",
    description3 : "&#183 이물감이 심하다면 즉시 병원으로 간다.",
    description4 : "",
    description5 : "",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/가시가 목에 걸렸을 때.jpg"
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
    '<p id = "content_container_title">'+
    content.description2+
    '</p>'+   '<p id = "content_container">'+
    content.description3+
    '</p>'+
        '<p id = "content_container_title">'+
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
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;