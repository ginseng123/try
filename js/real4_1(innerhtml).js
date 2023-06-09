let contents = [
  { description1 : "구급상자 구성품",
    description2 : "1. 물품 : 삼각붕대, 일회용 밴드, 가위, 소독 거즈, 탄력붕대, 반창고(테이프), 체온계, 핀셋, 생리식염수 ",
    description3 : "2. 바르는 약 : 물파스, 파스, 바세린, 베타닌 용액, 연고, 화상용 연고",
    description4 : "3. 먹는 약 : 해열진통제, 멀미약, 소화제, 설사약", 
    description5 : "4. 주의사항 : 개봉일자, 유통기한 등을 적어두고 잘 확인한다",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/구급상자.jpg"
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