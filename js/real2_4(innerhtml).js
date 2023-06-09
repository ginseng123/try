let contents = [
  { description1 : "산행 안전사고 발생 유형",
    description2 : "1. 가슴통증,호흡곤란 등의 급성질환이 발생했을 때",
    description3 : "&#183 등산을 하다가 극심한 가슴통증이 발생했다면 협심증이나 심근경색일때 발생하는 현상일 수 있으므로 즉시 휴식을 취하며 구조대에 도움을 요청한다.",
    description4 : "&#183 호흡곤란 증세가 나타났을 때는 등산을 중단하고 안정을 취해야하며 호흡을 깊게 하도록 하고 증상이 좋아지지 않으면 도움을 요청해야 한다. ",
    description5 : "2. 발목염좌가 발생했을 때",
    description6 : "&#183 발목을 삐었다, 접질렀다고 표현하는 발목염좌는 울퉁불퉁한 바위나 계단을 오르내릴때 흔히 발생하는 증상이다.  ",
    description7 : "&#183 발목염좌를 초기에 제대로 치료하지 않을 경우 반복적으로 삐게 되거나 만성적 통증에 시달릴 수 있으므로 증상이 발견되는 즉시 산에 내려가 가까운 병원을 통해 치료받도록 한다. ",
    description8 : "3. 넘어져 골절이 발생한 경우",
    description9 : "&#183 뼈가 부러지는 부상을 입었을 경우에는 손상 부위를 차갑게 유지하고 부목을 대고 고정시켜야한다.",
    description10 : "&#183 부목은 나뭇가지나,두꺼운 종이등을 사용하여 옷가지 등으로 묶으면 된다.",
    description11 : "&#183 골절 부위에 출혈이 있으면 직접 압박으로 지혈을 하고 부목을 대도록 한다.",
    description12 : "&#183 구조대를 요청하고 구조대가 도착한 후에는 급히 병원으로 이송한다.",
    imageUrl : "../images/등산1.webp"
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
     '<p id = "content_container">'+
    content.description11+
    '</p>'+
     '<p id = "content_container">'+
    content.description12+
    '</p>'+
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;