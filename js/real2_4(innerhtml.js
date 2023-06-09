let contents = [
  { description1 : "뱀에게 물렸을 시",
    description2 : "1. 연기가 발생하거나 불이 난 것을 보았을 때 ",
    description3 : "&#183불이 난 경우에는 불이야라고 소리치거나 비상벨을 누른 후 대피한다.",
    description4 : "2. 불을 끌 것인지 대피할 것인지 판단한다.",
    description5 : "&#183불길이 천장까지 닿지 않은 작은 불이라면 소화기나 물양동이등을 이용하여 신속히 끄도록 한다.",
    description6 : "",
    description7 : "3. 대피한 경우 119로 신고합니다.",
    description8 : "&#183안전하게 대피한 후 119에 신고합니다.",
    imageUrl : "../images/fire-gad73ec90c_1920.jpg"
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