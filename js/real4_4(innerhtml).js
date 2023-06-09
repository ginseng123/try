let contents = [
  { description1 : "실종유괴예방",
    description2 : "1. 아이의 지문,보호자 인적사항, 사진을 미리 등록합니다(경찰서나 안전드림앱을 통해서) ",
    description3 : "2. 정기적으로 아이의 사진을 찍어둡니다.",
    description4 : "3. 이름표,미아방지 팔찌 등 실종아동 예방용품을 활용합니다.",
    description5 : "4. 아이의 하루 일과와 친한 친구들을 알아둡니다.",
    description6 : "5. 아이가 잘 모르는 사람과 접촉하지 않도록 교육합니다.",
    description7 : "6. 잘 모르는 사람이 동행을 요구할 시 본 이미지와 같이 행동할 것을 교육합니다.",
    description8 : "",
    imageUrl : "../images/유괴예방.jpeg"
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
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;