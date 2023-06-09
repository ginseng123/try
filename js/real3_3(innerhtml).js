let contents = [
  { description1 : "해파리 피해",
    description2 : "1. 쏘인 즉시 환자를 물 밖으로 나오도록 하고, 쏘인 부위가 넓거나 환자 상태가 좋지 않으면(호흡곤란, 의식불명) 바로 구급차를 부르고 구조요원에게 도움을 청한다.",
    description3 : "2. 환자의 상태를 관찰하여 호흡곤란 등으로 인한 긴급한 구조가 필요하다고 판단되면 인공호흡을 비롯한 심폐소생술을 실시한다.",
    description4 : "3. 쏘인 부위는 식염수로 세척합니다.",
    description5 : "4. 해파리 쏘임시에 알코올 종류의 세척제는 독액의 방출을 증가시킬 수 있어서 금한다. 작은부레관해파리의 쏘임시에는 식초가 독액의 방출을 증가시킬 수 있어서 식초를 이용한 세척을 금한다.",
    description6 : "5. 테트라싸이클린(Tetracycline) 계열의 연고를 쏘임부위에 발라준다.",
    description7 : "6.열찜질 또는 냉찜질을 하면 통증을 완화시키는데 도움을 줄 수 있다.",
    description8 : "",
    imageUrl : "../images/해파리피해.png"
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