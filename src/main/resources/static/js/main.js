function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function eventSlide(){
  let slideIdx = 0;
  const slides = document.querySelectorAll("#event-bar .slide-contents span");
  function showSlide(n){
    if(n > slides.length - 1){
      slideIdx = 0;
    }
    if(n < 0){
      slideIdx = slides.length - 1;
    }
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
  }
  showSlide(0);
  document.querySelector("#event-bar .prev").addEventListener('click', function (){
    showSlide((slideIdx -= 1) % slides.length);
  });
  document.querySelector("#event-bar .next").addEventListener('click', function (){
    showSlide((slideIdx += 1) % slides.length);
  });

  function autoSlide(){
    clearSet = setInterval(function(){
      showSlide((slideIdx += 1) % slides.length);
    }, 5000);
  }
  autoSlide();
  document.querySelector("#event-bar").addEventListener('mouseover',function (){
    clearInterval(clearSet);
  });
  document.querySelector("#event-bar").addEventListener('mouseout',function (){
    autoSlide();
  });
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
                  <option value="${json.volume}">???${json.price} ${json.volume}ML</option>
                </select>
                <div class="bottom">
                  <button type="button">???????????? ??????</button>
                  <div class="wish-share-box">
                    <span>???????????????</span>
                    <span>????????????</span>
                  </div>
                </div>
              </div>`;
    productInfo.innerHTML = data;
  }
  const value = getParameterByName('id');
  const xml = new XMLHttpRequest();
  xml.addEventListener('load', fetchData);
  xml.open("GET", "/renewal/detail/data/" + value);
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
                    <button class="sumnail-btn" type="button">????????????</button>
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
              <p>???${item.price}</p>
              <a href="#" class="more-btn">????????? ??????</a>
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
                  <option value="50ml">???${item.price} ${item.volume}ML</option>
                </select>
              </div>
            </div>
          </div>`;
      productListWrapper.innerHTML += data;
    });
  }
  const xml = new XMLHttpRequest();
  xml.addEventListener('load', fetchData);
  xml.open("GET", "/renewal/handcream/data");
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
                    <button class="sumnail-btn" type="button">????????????</button>
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
              <p>???${item.price}</p>
              <a href="#" class="more-btn">????????? ??????</a>
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
                  <option value="50ml">???${item.price} ${item.volume}G</option>
                </select>
              </div>
            </div>
          </div>`;
      productListWrapper.innerHTML += data;
    });
  }
  const xml = new XMLHttpRequest();
  xml.addEventListener('load', fetchData);
  xml.open("GET", "/renewal/handcream/data");
  xml.send();
}

function productListLoadAction(){
  const param = getParameterByName("product_name");
  const mainBgTitle = document.querySelector(".main-bg p");
  const productInfo = document.querySelector("#main-bg .product-info");
  const mainBg = document.querySelector("#main-bg .main-bg");
  const productImg = document.querySelector("#product-list .product .pd-img");
  if(param === "handcream"){
    mainBgTitle.textContent = "?????? ??????";
    productInfo.innerHTML = "??? ?????? ????????? ?????? ????????? ????????? ????????? ?????? ?????????<br>?????? ???????????? ????????? ?????????.";
    mainBg.style.backgroundImage = "url(/img/bg_handcream.jpg)";
    mainBg.style.backgroundRepeat = "no-repeat";
    mainBg.style.backgroundPosition = "center center";
    mainBg.style.backgroundSize = "cover";
    handCreamList();
  }else if(param === "townhome"){
    mainBgTitle.textContent = "TALES OF HOME";
    productInfo.innerHTML = "?????? ??????????????? ???????????? ??? ?????? ???????????? ?????????.<br>?????? ??????????????? ???????????? ????????????.<br><br>?????? ?????? ??????????????? ????????? ?????? ????????? ????????? ??????,<br>\'??????????????? ?????????(Townhouse Collection)\'??? ???????????????.";
    mainBg.style.backgroundImage = "url(/img/bg_townhome.jpg)";
    mainBg.style.backgroundRepeat = "no-repeat";
    mainBg.style.backgroundPosition = "center center";
    mainBg.style.backgroundSize = "cover";
    candleList();
  }
}