let contents = [
  { description1 : "정전이 발생했을 시",
    description2 : "1. 우리집만 정전이 발생한 경우 ",
    description3 : "&#183 정전이 되면 플러그를 뽑고 스위치를 꺼두며 옥내 주택용 분전반의 누전차단기 또는 개폐기의 이상 유무를 확인한다.",
    description4 : "&#183 옥내 전기설비에 이상이 있으면 전기공사업체에 의뢰해 수리한다. 이상이 없으면 한전에 연락한다.",
    description5 : "2. 이웃집과 같이 정전이 발생한 경우",
    description6 : "&#183 대부분 한전 선로고장이므로 신속히 복구되므로 동요하지 말고 잠시 기다립니다.",
    description7 : "&#183 아파트는 단지 내 선로 및 전기설비의 고장일 수 있으므로 관리사무소에 연락합니다.",
    description8 : "3. 엘리베이터에서 정전이 발생한 경우",
    description9 : "&#183 정전등으로 조명이 꺼지면 당황하지 말고 인터폰으로 연락합니다.",
    description10 : "&#183 정전으로 운행이 정지되면 인터폰으로 구조 요청하고 임의 탈출을 시도하지 맙시다.",
    description11 : " ",
    imageUrl : "../images/정전.png"
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
    '<p id = "content_container">'+
    content.description10+
    '</p>'+
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;