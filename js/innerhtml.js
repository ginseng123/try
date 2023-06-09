
	let contents = [
  { description1 : "불이 난 경우",
    description2 : "1. 연기가 발생하거나 불이 난 것을 보았을 때 ",
    description3 : "&#183불이 난 경우에는 불이야라고 소리치거나 비상벨을 누른 후 대피한다.",
    description4 : "2. 불을 끌 것인지 대피할 것인지 판단한다.",
    description5 : "&#183불길이 천장까지 닿지 않은 작은 불이라면 소화기나 물양동이등을 이용하여 신속히 끄도록 한다.",
    description6 : "&#183불길이 커져서 대피해야 하는 경우 젖은 수건 또는 담요를 활용하여 계단을 통하여 대피하도록 한다.",
    imageUrl : "..\images\fire.jpeg"
  },
  { description1 : "소화기 사용법",
    description2 : "1. 소화기를 불이 난 곳으로 옮깁니다. ",
    description3 : "2. 손잡이 부분의 봉인 줄을 제거하고 안전핀을 뽑습니다.",
    description4 : "3. 바람을 등지고 서서 호스를 불쪽으로 향하게 합니다.",
    description5 : "4. 손잡이를 힘껏 움켜주고 소화약제를 빗자루로 쓸 듯이 골고루 뿌립니다.",
    description6 : "5. 소화기는 잘 보이고 사용하기에 편리한 곳에 두되 햇빛이나 습기에 노출되지 않도록 합니다.",
    imageUrl : "..\images\fireextinguisher.jpeg"
  }
  ];
  let productshtml = "";

  for (let i = 0; i < contents.length; i++)
  {
    let content = contents[i];
    productshtml =
    productshtml +
    '<div id = "conwrap">'+ 
    '<h2 id = "content_subtitle">'+
    content.description1+
    '</h2>' +
    '<div id ="content_wrap">'+
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
    '</div>'+
    '</div>';
  }
  document.querySelector("#content").innerHTML = productshtml;
