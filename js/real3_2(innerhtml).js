let contents = [
  { description1 : "햇빛에 의한 화상",
    description2 : "1. 햇빛에 의한 화상은 대부분 가벼운 1도 화상이므로 아래의 방법 중 상황에 맞는 것을 선택한다.",
    description3 : "&#183얼음찜질",
    description4 : "&#183오이마사지",
    description5 : "&#183흐르는 차가운 물에 화상 부위 대기",
    description6 : "2. 물집이 생겼을 경우, 2도 화상을 입을 가능성이 있으며 물집이 터지면 세균감염의 위험이 있기에 병원에 가서 치료받아야한다.",
    description7 : "",
    description8 : "",
    imageUrl : "../images/햇빛.png"
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