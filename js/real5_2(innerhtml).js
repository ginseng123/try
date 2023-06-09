let contents = [
  { description1 : "불이 난 경우",
    description2 : "1. 연기가 발생하거나 불이 난 것을 보았을 때 ",
    description3 : "&#183불이 난 경우에는 불이야라고 소리치거나 비상벨을 누른 후 대피한다.",
    description4 : "2. 불을 끌 것인지 대피할 것인지 판단한다.",
    description5 : "불길이 커져서 대피해야 할 경우 젖은 수건 또는 담요를 활용하여 계단을 통해 밖으로 대피합니다.",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/fire.jpeg"
  },{ 
    description1 : "공동주택에서의 대피요령",
    description2 : "1. 주택 내 인원을 비상소집합니다. ",
    description3 : "2. 연기 들어오는 방향과 출입문 손잡이를 만져보아 계단으로 나갈지 창문으로 구조요청할지 결정한다.",
    description4 : "&#183대피할때는 엘리베이터를 절대 이용하지 않고 계단을 통하여 지상으로 안전하게 대피한다.",
    description5 : "&#183대피가 어려운 경우에 창문으로 구조요청을 하거나 대피공간 또는 경량칸막이를 이용하여 대피한다. ",
    description6 : "3. 안전하게 대피한 후 119에 신고한다. (신고하느라 대피시간을 놓치지 않도록 합니다.)",
    description7 : "4. 대피 후 인원을 확인합니다.(주변에 보이지 않은 인원이 있을경우 출동한 소방관에게 알립니다.)",
    description8 : "",
    imageUrl : "../images/공동주택대피.png"
  },{
    description1 : "지하철 화재 시 대피요령",
    description2 : "1. 지하철 내(노약자 석, 장애인 석 벽면)에 있는 비상버튼을 누른 후 현재상황을 알립니다.(작은 규모의 화재라면 비치된 2개의 소화기를 통해 불을 끕니다)",
    description3 : "2. 대피하려면 출입문쪽 벽면에 있는 비상개폐 핸들,출입문 쪽 의자 아래에 있는 작은 뚜껑을 엽니다 ",
    description4 : "3. 비상개폐핸들을 비상 쪽으로 90도 돌리거니 의자 아래 뚜껑 속 비상콕을 앞으로 당겨줍니다. 그리고 손으로 출입문을 양쪽으로 밀면 문이 열립니다.",
    description5 : "4. 지하철 화재시 정전이 되면 대피유도등을 따라 대피하면 됩니다. 유도등이 보이지 않을 때는 벽을 짚으면서 나가거나 시각장애인 안내용 보도블록을 따라 나가면 됩니다.",
    description6 : "",
    description7 : "",
    description8 : "",
    imageUrl : "../images/지하철대피.png"
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