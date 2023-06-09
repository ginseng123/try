let contents = [
  { description1 : "심폐소생술 순서",
    description2 : "1. 환자 확인(양쪽 어깨 두드리기 + 큰 소리로 괜찮은 지 의식확인",
    description3 : "2. 119신고 > 주변에 심장 전기충격기(AED)요청 > 호흡 확인(10초 이내)",
    description4 : "3. 30회 가슴압박(분당 100~120회 속도 / 5cm 깊이), 복장뼈 아래쪽 1/2 지점",
    description5 : "4. 2회 인공호흡 (이마 젖히고 코 잡기/ 호흡 중간에는 코 잡은 손 놓기)",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/심폐소생술.png"
  },{description1 : "자동 심장충격기 순서",
    description2 : "1. 전원켜고 패드 부착(전원 켜기 + 상의를 벗긴 후 안내에 따라 패드 부착",
    description3 : "2. 심장리듬 자동분석(\"모두 물러나세요\" 소리치기 > 환자접촉 금지)",
    description4 : "3. 심장 전기충격 (\"모두 물러나세요\" 소리치기 > 환자접촉 금지 > 충격버튼 누르기)",
    description5 : "4. 심폐소생술 재시행 (지체 없이 가슴압박 실시 > 심폐소생술(CPR)5주기와 심장 충격기(AED)반복",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/자동심장충격기.png"
  }];
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