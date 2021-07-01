function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function mobileMenu(){
  document.querySelector(".mobile-menu").addEventListener('click' ,function(){
    this.classList.toggle("active");
  });
  document.querySelectorAll(".mobile-menu-list > ul > li").forEach((item) => {
    item.addEventListener('click', function(){
      this.children[0].classList.toggle("on");
    });
  })
}

function productDetailLoadAction(){
  function fetchData(){
    const productImg = document.querySelector(".product-img");
    const productInfo = document.querySelector(".product-info");
    const json = JSON.parse(this.responseText);
    productImg.setAttribute("src", json.imgurl);
    const data = `<div>
                <div class="pd-name">
                  <h2>${json.name}</h2>
                  <p>${json.name_en}</p>
                </div>
                <p>
                  ${json.information}
                </p>
                <select name="volumn" id="volumn">
                  <option value="${json.volume}">￦${json.price} ${json.volume}ML</option>
                </select>
                <div class="bottom">
                  <button type="button">장바구니 담기</button>
                  <div class="wish-share-box">
                    <span>위시리스트</span>
                    <span>공유하기</span>
                  </div>
                </div>
              </div>`;
    productInfo.innerHTML = data;
  }
  const value = getParameterByName('id');
  const xml = new XMLHttpRequest();
  xml.addEventListener('load', fetchData);
  xml.open("GET", "/detail/data/" + value);
  xml.send();
}

function handCreamList(){
  function fetchData(){
    const productListWrapper = document.querySelector(".product-list-wrapper .center");
    const json = JSON.parse(this.responseText);
    json.forEach((item) => {
      const data = `<div class="product">
            <div class="visible-content">
              <a href="#">
                <div class="pd-img" style="background: url('${item.imgurl}') no-repeat; background-size: cover;">
                  <div class="layout">
                    <button class="sumnail-btn" type="button">미리보기</button>
                  </div>
                </div>
              </a>
              <a href="#" class="pd-names">
                <p class="pd-name-kr">
                  ${item.name}
                </p>
                <p class="pd-name-en">
                  ${item.name_en}
                </p>
              </a>
              <p>￦${item.price}</p>
              <a href="#" class="more-btn">자세히 보기</a>
            </div>
            <div class="product-sumnail">
              <div>
                <a href="#"><div class="pd-img"></div></a>
                <div class="info">
                  <a href="#" class="pd-names">
                    <p class="pd-name-kr">
                      ${item.name}
                    </p>
                    <p class="pd-name-en">
                      ${item.name_en}
                    </p>
                  </a>
                  <p>
                    ${item.information};
                  </p>
                </div>
                <select name="volum" id="vol">
                  <option value="50ml">￦${item.price} ${item.volume}ML</option>
                </select>
              </div>
            </div>
          </div>`;
      productListWrapper.innerHTML += data;
    });
  }
  const xml = new XMLHttpRequest();
  xml.addEventListener('load', fetchData);
  xml.open("GET", "/handcream/data");
  xml.send();
}

function candleList(){
  function fetchData(){
    const productListWrapper = document.querySelector(".product-list-wrapper .center");
    const json = JSON.parse(this.responseText);
    json.forEach((item) => {
      const data = `<div class="product">
            <div class="visible-content">
              <a href="#">
                <div class="pd-img" style="background: url('${item.imgurl}') no-repeat; background-size: cover;">
                  <div class="layout">
                    <button class="sumnail-btn" type="button">미리보기</button>
                  </div>
                </div>
              </a>
              <a href="#" class="pd-names">
                <p class="pd-name-kr">
                  ${item.name}
                </p>
                <p class="pd-name-en">
                  ${item.name_en}
                </p>
              </a>
              <p>￦${item.price}</p>
              <a href="#" class="more-btn">자세히 보기</a>
            </div>
            <div class="product-sumnail">
              <div>
                <a href="#"><div class="pd-img"></div></a>
                <div class="info">
                  <a href="#" class="pd-names">
                    <p class="pd-name-kr">
                      ${item.name}
                    </p>
                    <p class="pd-name-en">
                      ${item.name_en}
                    </p>
                  </a>
                  <p>
                    ${item.information};
                  </p>
                </div>
                <select name="volum" id="vol">
                  <option value="50ml">￦${item.price} ${item.volume}G</option>
                </select>
              </div>
            </div>
          </div>`;
      productListWrapper.innerHTML += data;
    });
  }
  const xml = new XMLHttpRequest();
  xml.addEventListener('load', fetchData);
  xml.open("GET", "/townhome/data");
  xml.send();
}

function productListLoadAction(){
  const param = getParameterByName("product_name");
  const mainBgTitle = document.querySelector(".main-bg p");
  const productInfo = document.querySelector("#main-bg .product-info");
  const mainBg = document.querySelector("#main-bg .main-bg");
  const productImg = document.querySelector("#product-list .product .pd-img");
  if(param === "handcream"){
    mainBgTitle.textContent = "핸드 크림";
    productInfo.innerHTML = "조 말론 런던의 핸드 크림은 가볍고 섬세한 향을 남기며<br>손을 촉촉하게 가꾸어 줍니다.";
    mainBg.style.backgroundImage = "url(/img/bg_handcream.jpg)";
    mainBg.style.backgroundRepeat = "no-repeat";
    mainBg.style.backgroundPosition = "center center";
    mainBg.style.backgroundSize = "cover";
    handCreamList();
  }else if(param === "townhome"){
    mainBgTitle.textContent = "TALES OF HOME";
    productInfo.innerHTML = "런던 타운하우스 응접실의 갓 구운 디저트의 달콤함.<br>정원 포도나무의 싱그러운 향기까지.<br><br>여섯 가지 타운하우스 공간의 향을 담아낸 세라믹 캔들,<br>\'타운하우스 컬렉션(Townhouse Collection)\'을 만나보세요.";
    mainBg.style.backgroundImage = "url(/img/bg_townhome.jpg)";
    mainBg.style.backgroundRepeat = "no-repeat";
    mainBg.style.backgroundPosition = "center center";
    mainBg.style.backgroundSize = "cover";
    candleList();
  }
}