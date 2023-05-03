var product = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
    name: "Beef Burger",
    price: 200,
    description:
      "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world.",
    type: "bur",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
    name: "Fish Burger",
    price: 180,
    description:
      "Juicy and flavorful, our favorite fish burger recipes use fish fillets and minced or ground fish as patties. Get recipes for salmon, tuna, cod, and tilapia, plus ideas for fish burger toppings, from coleslaw to tartar sauce.",
    type: "bur",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
    name: "Bacon Beef Burger",
    price: 220,
    description:
      "With just enough bacon to add a smoky taste and intrigue, these burgers are juicy without being powerfully bacony. The unique cooking style of grilling on high then moving to a low heat area of the grill worked well by producing a juicy burger with a slight crust.",
    type: "bur",
  },
  {
    id: 4,
    img: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-tall-FS-4512-1024x1536.webp",
    name: "Ground Chicken Burger",
    price: 20,
    description:
      "These ground chicken burgers are a great addition to any cookout, and easy and quick enough to serve as a weeknight family meal. Wonderfully seasoned, they are loaded full of flavor and perfect for any summer feast!",
    type: "bur",
  },
  {
    id: 5,
    img: "https://www.acouplecooks.com/wp-content/uploads/2020/04/Tequila-Sunrise-003s.jpg",
    name: "Tequila Sunrise",
    price: 160,
    description:
      "The tequila sunrise is a cocktail made of tequila, orange juice, and grenadine syrup. The drink is served unmixed in a tall glass. ",
    type: "drink",
  },
  {
    id: 6,
    img: "https://imbibemagazine.com/wp-content/uploads/2018/03/seven-year-itch-vertical2-crdt-tk.jpg",
    name: "Strawberry Cocktail",
    price: 140,
    description:
      "The strawberry daiquiri is the best-known cocktail of the lot and among the most-loved. Rum is a fabulous pairing for strawberries, and the recipe marries those flavors with simple syrup and lime juice.",
    type: "drink",
  },
  {
    id: 7,
    img: "https://copykat.com/wp-content/uploads/2022/05/Sex-on-the-Beach-Drink-Pin-9.jpg",
    name: "Sex on the Beach",
    price: 190,
    description:
      "A sex on the beach is an alcoholic cocktail containing vodka, peach schnapps, orange juice and cranberry juice.",
    type: "drink",
  },
  {
    id: 8,
    img: "https://cdn3.evostore.io/productimages/ot_wholesale/l/022071.jpg",
    name: "Evian Water",
    price: 50,
    description: "Fresh mineral water.",
    type: "drink",
  },
  {
    id: 9,
    img: "https://static.toiimg.com/thumb/55332663.cms?width=1200&height=900",
    name: "Cheese french fries",
    price: 160,
    description:
      "Cheese fries or cheesy chips is a dish consisting of French fries covered in cheese, with the possible addition of various other toppings.",
    type: "snack",
  },
  {
    id: 10,
    img: "https://platedcravings.com/wp-content/uploads/2022/10/Air-Fryer-Chicken-Nuggets-Plated-Cravings-5.jpg",
    name: "Chicken nuggets",
    price: 90,
    description:
      "Chicken nuggets are a delicious appetizer that is enjoyed by children and adults, alike. With a light, crisp exterior, juicy & well-seasoned interior, they are popular on restaurant menus.",
    type: "snack",
  },
  {
    id: 11,
    img: "https://easyappetizers.com/wp-content/uploads/2022/09/Potato-Cheese-Balls-social.jpg",
    name: "Cheese balls",
    price: 120,
    description:
      "A homemade cheeseball is one of the most classic holiday appetizers, ever!  If you want to get more creative than the traditional serving style,  these mini cheese ball bites are also a crowd favorite.",
    type: "snack",
  },
  {
    id: 12,
    img: "https://www.fifteenspatulas.com/wp-content/uploads/2011/09/French-Fries-Recipe.jpg",
    name: "French fries",
    price: 80,
    description:
      "These homemade french fries are potatoes that are cut into sticks and deep fried until golden brown, then sprinkled with seasonings.",
    type: "snack",
  },
  {
    id: 13,
    img: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2016/01/healthy-baked-chicken-tenders-sq-22-5-640x480.jpg",
    name: "Chicken fingers",
    price: 80,
    description:
      "These crispy golden healthy chicken tenders are one of my most popular recipes of all time. The key is the fool-proof oven baked breading.",
    type: "snack",
  },
];
var productindex = 0;
var cart = [];
class Product {
  constructor(id, name, price, img, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
  }
  addtocart() {
    var pass = true;
    for (let i = 0; i < cart.length; i++) {
      if (productindex == cart[i].index) {
        console.log("found same product");
        cart[i].count++;
        pass = false;
      }
    }
    if (pass) {
      var obj = {
        index: productindex,
        id: product[productindex].id,
        name: product[productindex].name,
        price: product[productindex].price,
        img: product[productindex].img,
        count: 1,
      };
      cart.push(obj);
    }
    console.log(cart);
    Swal.fire({
      icon: "success",
      title: "Add " + product[productindex].name + " to cart !",
    });
    $("#cartcount").css("display", "flex").text(cart.length);
  }
  openProductDetail(index) {
    productindex = index;
    console.log(productindex);
    $("#modalDesc").css("display", "flex");
    $("#mdd-img").attr("src", product[index].img);
    $("#mdd-name").text(product[index].name);
    $("#mdd-price").text(numberWithCommas(product[index].price) + " THB");
    $("#mdd-desc").text(product[index].description);
  }

  searchproduct(param) {
    console.log(param);
    $(".product-items").css("display", "none");
    if (param == "all") {
      $(".product-items").css("display", "block");
    } else {
      $("." + param).css("display", "block");
    }
  }
}

const p = new Product();
$(document).ready(() => {
  /*สร้างตัวแปรhtml*/
  var html = "";
  for (let i = 0; i < product.length; i++) {
    html += `<div onclick="p.openProductDetail(${i})" class="product-items ${
      product[i].type
    }">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${
                      product[i].name
                    }</p>             
                    <p stlye="font-size: 1vw;">${numberWithCommas(
                      product[i].price
                    )} THB</p>
                </div>`;
  }
  /*functionhtml ของjquery*/
  $("#productlist").html(html);
});
class Cart {
  rendercart() {
    if (cart.length > 0) {
      var html = "";
      for (let i = 0; i < cart.length; i++) {
        html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="">
                            <div class="cartlist-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${numberWithCommas(
                                  cart[i].price * cart[i].count
                                )} THB</p>
                            </div>
                        </div>
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}" style="margin: 0 20px;">${
          cart[i].count
        }</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div>`;
      }
      $("#mycart").html(html);
    } else {
      $("#mycart").html(`<p>Not found product list</p>`);
    }
  }
}

function searchsomething(elem) {
  var value = $("#" + elem.id).val();
  console.log(value);
  var html = "";
  for (let i = 0; i < product.length; i++) {
    if (product[i].name.includes(value)) {
      html += `<div onclick="p.openProductDetail(${i})" class="product-items ${
        product[i].type
      }">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${numberWithCommas(
                      product[i].price
                    )} THB</p>
                </div>`;
    }
  }
  if (html == "") {
    $("#productlist").html(`<p>Not found product</p>`);
  } else {
    $("#productlist").html(html);
  }
}

function closeModal() {
  $(".modal").css("display", "none");
}
const c = new Cart();
function openCart() {
  $("#modalCart").css("display", "flex");
  c.rendercart();
}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}
function sucsessModal() {
  $(".modal").css("display", "none");
  Swal.fire({
    icon: "success",
    title: "Complete",
    showConfirmButton: true,
    confirmButtonText: "Sucsess",
  }).then((res) => {});
}
function deinitems(action, index) {
  if (action == "-") {
    if (cart[index].count > 0) {
      cart[index].count--;
      $("#countitems" + index).text(cart[index].count);

      if (cart[index].count <= 0) {
        Swal.fire({
          icon: "warning",
          title: "Are you sure to delete?",
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
        }).then((res) => {
          if (res.isConfirmed) {
            cart.splice(index, 1);
            console.log(cart);
            c.rendercart();
            $("#cartcount").css("display", "flex").text(cart.length);

            if (cart.length <= 0) {
              $("#cartcount").css("display", "none");
            }
          } else {
            cart[index].count++;
            $("#countitems" + index).text(cart[index].count);
            c.rendercart();
          }
        });
      }
      c.rendercart();
    }
  } else if (action == "+") {
    cart[index].count++;
    $("#countitems" + index).text(cart[index].count);
    c.rendercart();
  }
}
