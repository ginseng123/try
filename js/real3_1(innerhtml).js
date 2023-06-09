let contents = [
  { description1 : "물에 빠졌을 경우",
    description2 : "&#183흐르는 물에 빠졌을 때는 물의 흐름에 따라 표류하며 비스듬히 헤엄쳐 나온다.",
    description3 : "&#183옷과 구두를 신은 채 물에 빠졌을 때는 심호흡을 한후 물 속에서 새우등 뜨기 자세를 취한 뒤 벗기 쉬운 것부터 차례로 벗고 헤엄쳐 나온다.",
    description4 : "",
    description5 : "",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/물에빠졌을경우.png"
  },{
    description1 : "새우등 뜨기 자세",
    description2 : "1. 몸을 말아 양팔을 발목 혹은 무릎에 깍지 끼고 잡아 가만히 물에 몸을 띄운다",
    description3 : "2. 숨을 쉴 때는 고개를 살짝 내밀기",
    description4 : "",
    description5 : "",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/새우등뜨기자세.png"
  },{
    description1 : "선박(보트)전복 등으로 물에 빠진 경우",
    description2 : "1. 물 밖으로 나온다.(공기 중에서 보다 물속에서의 체온손실이 많다.)",
    description3 : "2. 물에 빠졌을 때 옷을 벗어서는 안 된다. 모직 옷을 두겹 정도 더 껴입으면 열손실이 속옷만 입었을 때보다 1/4 감소한다.",
    description4 : "3. 체온유지를 위해 수영이나 불필요한 동작은 하지 않는다.",
    description5 : "4. 수온 0°C에서 보통 정상적인 성인일 경우 수영가능 거리는 약 1해리 정도이다.",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/소형선박.jpg"
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