let contents = [
  { description1 : "불이 난 경우",
    description2 : "1. 연기가 발생하거나 불이 난 것을 보았을 때 ",
    description3 : "&#183불이 난 경우에는 불이야라고 소리치거나 비상벨을 누른 후 대피한다.",
    description4 : "2. 불을 끌 것인지 대피할 것인지 판단한다.",
    description5 : "&#183불길이 커져서 대피해야 할 경우 젖은 수건 또는 담요를 활용하여 계단을 통해 밖으로 대피합니다.",
    description6 : "3. 신속히 대피합니다.",
    description7 : "4. 안전하게 대피한 후 119에 신고합니다.",
    description8 : "",
    description9 : "",
    description10 : "",
    imageUrl : "../images/fire.jpeg"
  },{ 
    description1 : "119 신고요령",
    description2 : "1. 침착하게 전화 119번을 누릅니다.",
    description3 : "2. 불이 난 것을 말합니다",
    description4 : "&#183 신고자 이름 : 000입니다.",
    description5 : "&#183 화재가 난 곳의 주소 : 모를 경우 주변의 큰 건물을 말한다.",
    description6 : "&#183 신고자의 전화번호 : 받을 수 있는 전화번호를 말한다.",
    description7 : "&#183 화재 원인 : 전기,기름,가스 등",
    description8 : "3. 소방서에서 알았다고 할 때까지 전화를 끊지 맙시다.",
    description9 : "4. 휴대전화는 사용 제한된 전화나 개통이 안 된 전화도 긴급신고가 가능합니다.",
    description10 : "5. 장난전화는 하지 않습니다.",
    imageUrl : "../images/119신고.jpeg"
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
    '<p id = "content_container">'+
    content.description9+
    '</p>'+
    '<p id = "content_container">'+
    content.description10+
    '</p>'+
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;
