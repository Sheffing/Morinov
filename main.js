let body = document.querySelector("body");
let button = document.querySelector(".btn");
let select = document.querySelector(".select");
let search = document.querySelector(".search-block__input");
let housewareName = [];
let housewareImage = [];
let housewareMilesPrice = [];
let housewareSource = [];
let housewareSourceDetail = [];
let housewareTag = [];
let housewareBuyPrice = [];
let housewareSellPrice = [];

function removeContainer() {
  let container = document.querySelector(".remove_cards");
  container.parentNode.removeChild(container);
}

button.addEventListener("click", function () {
  fetch(`https://acnhapi.com/v1a/${select.value}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      if (document.querySelectorAll(".remove_cards").length !== 0) {
        removeContainer();
      } 

      let result = document.querySelector(".result");

      let main = document.createElement("div");
      result.appendChild(main);
      main.className = "main remove_cards";

      for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        card.className = "card";
        let image = document.createElement("img");
        image.className = "image";
        let name = document.createElement("p");
      
        let price = document.createElement("p");
        price.className = "price";
        let availability__location = document.createElement("p");
        availability__location.className = "availability__location";
        let availability__rarity = document.createElement("p");
        availability__rarity.className = "availability__rarity";
        let availability__month_array_northern = document.createElement("p");
        availability__month_array_northern.className = "availability__month_array_northern";
        let availability__time = document.createElement("p");
        availability__time.className = "availability__time";
        let rarity = document.createElement("p");
        rarity.className = "rarity";
        let personality = document.createElement("p");
        personality.className = "personality";
        let birthday = document.createElement("p");
        birthday.className = "birthday";
        let catch_phrase = document.createElement("p");
        catch_phrase.className = "catch_phrase";
        let buy_price = document.createElement("p");
        buy_price.className = "buy_price";
        let sell_price = document.createElement("p");
        sell_price.className = "sell_price";
        let is_orderable = document.createElement("p");
        is_orderable.className = "is_orderable";
        let houseware__miles_price = document.createElement("p");
        houseware__miles_price.className = "houseware__miles_price";
        let houseware__source = document.createElement("p");
        houseware__source.className = "houseware__source";
        let houseware__source_detail = document.createElement("p");
        houseware__source_detail.className = "houseware__source_detail";
        let houseware__tag = document.createElement("p");
        houseware__tag.className = "houseware__tag";
        let houseware__buy_price = document.createElement("p");
        houseware__buy_price.className = "houseware__buy_price";
        let houseware__image = document.createElement("img");
        houseware__image.className = "houseware__image";
        let houseware__sell_price = document.createElement("p");
        houseware__sell_price.className = "houseware__sell_price";
        let houseware__name = document.createElement("p");
        houseware__name.className = "houseware__name";

        switch(select.value) {
          case 'Fish':
          price.textContent = data[i].price;
          availability__location.textContent = data[i]["availability"]["location"];
          availability__rarity.textContent = data[i]["availability"]["rarity"]
          image.setAttribute("src", data[i].image_uri);
          name.textContent = data[i].name["name-EUen"];
          card.append(image, name, price, availability__location, availability__rarity);
            break;
        
          case 'Sea':
          price.textContent = data[i].price;

          let tag_array_s = [];
          for (let jm = 0; jm < data[i]["availability"]["month-array-northern"].length; jm++) {
            switch (data[i]["availability"]["month-array-northern"][jm]) {
                case 1:
                  availability__month_array_northern.textContent += "Январь ";
                    tag_array_s.push("Январь");
                    break;
                case 2:
                  availability__month_array_northern.textContent += "Февраль ";
                    tag_array_s.push("Февраль");
                    break;
                case 3:
                  availability__month_array_northern.textContent += "Март ";
                    tag_array_s.push("Март");
                    break;
                case 4:
                  availability__month_array_northern.textContent += "Апрель ";
                    tag_array_s.push("Апрель");
                    break;
                case 5:
                  availability__month_array_northern.textContent += "Май ";
                    tag_array_s.push("Май");
                    break;
                case 6:
                  availability__month_array_northern.textContent += "Июнь ";
                    tag_array_s.push("Июнь");
                    break;
                case 7:
                  availability__month_array_northern.textContent += "Июль ";
                    tag_array_s.push("Июль");   
                    break;
                case 8:
                  availability__month_array_northern.textContent += "Август ";
                    tag_array_s.push("Август");    
                    break;
                case 9:
                  availability__month_array_northern.textContent += "Сентябрь ";
                    tag_array_s.push("Сентябрь");    
                    break;
                case 10:
                  availability__month_array_northern.textContent += "Октябрь ";
                    tag_array_s.push("Октябрь");   
                    break;
                case 11:
                  availability__month_array_northern.textContent += "Ноябрь ";
                    tag_array_s.push("Ноябрь");   
                    break;
                case 12:
                  availability__month_array_northern.textContent += "Декабрь ";
                    tag_array_s.push("Декабрь");        
                    break;
            }
          }
          image.setAttribute("src", data[i].image_uri);
          name.textContent = data[i].name["name-EUen"];

          card.append(image, name, price, availability__month_array_northern);
            break;
        
          case 'Bugs':
          price.textContent = data[i].price;

          let tag_array_p = [];
          for (let jm = 0; jm < data[i]["availability"]["month-array-northern"].length; jm++) {
            switch (data[i]["availability"]["month-array-northern"][jm]) {
                case 1:
                  availability__month_array_northern.textContent += "Январь ";
                  tag_array_p.push("Январь");
                    break;
                case 2:
                  availability__month_array_northern.textContent += "Февраль ";
                  tag_array_p.push("Февраль");
                    break;
                case 3:
                  availability__month_array_northern.textContent += "Март ";
                  tag_array_p.push("Март");
                    break;
                case 4:
                  availability__month_array_northern.textContent += "Апрель ";
                  tag_array_p.push("Апрель");
                    break;
                case 5:
                  availability__month_array_northern.textContent += "Май ";
                  tag_array_p.push("Май");
                    break;
                case 6:
                  availability__month_array_northern.textContent += "Июнь ";
                  tag_array_p.push("Июнь");
                    break;
                case 7:
                  availability__month_array_northern.textContent += "Июль ";
                  tag_array_p.push("Июль");   
                    break;
                case 8:
                  availability__month_array_northern.textContent += "Август ";
                  tag_array_p.push("Август");    
                    break;
                case 9:
                  availability__month_array_northern.textContent += "Сентябрь ";
                  tag_array_p.push("Сентябрь");    
                    break;
                case 10:
                  availability__month_array_northern.textContent += "Октябрь ";
                  tag_array_p.push("Октябрь");   
                    break;
                case 11:
                  availability__month_array_northern.textContent += "Ноябрь ";
                  tag_array_p.push("Ноябрь");   
                    break;
                case 12:
                  availability__month_array_northern.textContent += "Декабрь ";
                  tag_array_p.push("Декабрь");        
                    break;
            }
          }
          availability__time.textContent = data[i]["availability"]["time"];
          availability__rarity.textContent = data[i]["availability"]["rarity"];
          image.setAttribute("src", data[i].image_uri);
          name.textContent = data[i].name["name-EUen"];

          card.append(image, name, price, availability__month_array_northern, availability__rarity);
            break;
        
          case 'Villagers':
            personality.textContent = data[i].personality;
            birthday.textContent = data[i].birthday;
            catch_phrase.textContent = data[i]["catch-phrase"];
            image.setAttribute("src", data[i].image_uri);
            name.textContent = data[i].name["name-EUen"];

            card.append(image, name, personality, birthday, catch_phrase);
              break;  

          case 'Songs':
            buy_price.textContent = data[i]["buy-price"];
            sell_price.textContent = data[i]["sell-price"];
            if (data[i]["isOrderable"] == false) {
              is_orderable.textContent = (`No product`);
            }
            else{
              is_orderable.textContent = (`Yes product`);
            }
            image.setAttribute("src", data[i].image_uri);
            name.textContent = data[i].name["name-EUen"];

            card.append(image, name, buy_price, sell_price, is_orderable);
            break;
        
          case 'Houseware':
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < data[i].length; j++) {
                housewareName[i] = data[i][j].name["name-EUen"];
                housewareImage[i] = data[i][j].image_uri;
                housewareMilesPrice[i] = data[i][j]["miles-price"];
                housewareSource[i] = data[i][j]["source"];
                housewareSourceDetail[i] = data[i][j]["source-detail"];
                housewareTag[i] = data[i][j]["tag"];
                housewareBuyPrice[i] = data[i][j]["buy-price"];
                housewareSellPrice[i] = data[i][j]["sell-price"];
              }
            }
            houseware__buy_price.textContent = housewareBuyPrice[i];
            houseware__sell_price.textContent = housewareSellPrice[i];
            houseware__name.textContent = housewareName[i];
            houseware__image.setAttribute("src", housewareImage[i]);
            houseware__miles_price.textContent = housewareMilesPrice[i];
            houseware__source.textContent = housewareSource[i];
            houseware__source_detail.textContent = housewareSourceDetail[i];
            houseware__tag.textContent = housewareTag[i];

            card.append(houseware__image, houseware__name, houseware__tag, 
              houseware__buy_price, houseware__sell_price, houseware__source,
              houseware__source_detail, houseware__miles_price);
            break;

          default:
            break;
        }



        main.appendChild(card);
      }
      search.addEventListener("input", function (e) {
        let value = e.target.value;
        let cardsAll = main.children;
        for (let i = 0; i < data.length; i++) {
          let nameExist = [];
          if (select.value != 'Houseware') {
            nameExist = data[i].name["name-EUen"];
          } else {
            nameExist = housewareName[i];
          }
          let nameVisible = nameExist
            .toLowerCase()
            .includes(value.toLowerCase());
          cardsAll[i].classList.toggle("hidden", !nameVisible);
        };
      });
    });
});