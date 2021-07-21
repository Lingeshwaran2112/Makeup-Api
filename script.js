document.body.style.backgroundImage = "url('makeup.png')";

var topmostdiv = document.createElement("div")
    document.body.appendChild(topmostdiv) 
        topmostdiv.backgroundColor = "pink"

    //Navbar
var navDiv = document.createElement("div");
    navDiv.setAttribute("class", "navi navbar-fixed")
        topmostdiv.appendChild(navDiv)

var nav = document.createElement("nav")
    nav.setAttribute("class", "navi navbar navbar-expand-lg navbar-light")
        nav.style.backgroundColor = "pink"
            navDiv.appendChild(nav)

var contf = document.createElement("div");
    contf.className = "container-fluid"
        nav.appendChild(contf) 

nav.style.padding = "3%"
var anchortag = document.createElement("a")
    anchortag.setAttribute("class", "navbar-brand")
        contf.appendChild(anchortag)

var logos = document.createElement("img");
    logos.src = ("icon.png")
        anchortag.appendChild(logos)

var logo = document.createElement("button")
logo.setAttribute("class", "navbar-toggler")
logo.setAttribute("data-toggle", "collapse")
logo.setAttribute("data-target", "#navbarSupportedContent")
logo.setAttribute("aria-controls", "navbarSupportedContent")
logo.setAttribute("aria-expanded", "false")
logo.setAttribute("aria-label", "Toggle navigation")
logo.type = "button"
contf.appendChild(logo);

var span = document.createElement("span")
    span.setAttribute("class", "navbar-toggler-icon")
        logo.appendChild(span)

var navDiv2 = document.createElement("div");
navDiv2.setAttribute("class", "collapse navbar-collapse")
navDiv2.setAttribute("id", "navbarSupportedContent")
contf.appendChild(navDiv2)

//Menu Options
        var ul1 = document.createElement("ul");
        ul1.setAttribute("class", "navbar-nav ml-auto");
        navDiv2.appendChild(ul1)
//1
        var li1 = document.createElement("li")
        li1.setAttribute("class", "nav-item active")
        ul1.appendChild(li1)
       
        var tab1 = document.createElement("a");
        tab1.setAttribute("id", "shop")
        tab1.setAttribute("class", "nav-link")
        tab1.innerText = "Home"
        ul1.appendChild(tab1)
//2  
        var li1 = document.createElement("li")
        li1.setAttribute("class", "nav-item active")
        ul1.appendChild(li1)

        var tab1 = document.createElement("a");
        tab1.setAttribute("id", "shop")
        tab1.setAttribute("class", "nav-link")
        tab1.innerText = "Stores"
        ul1.appendChild(tab1)                               
//3
        var li1 = document.createElement("li")
        li1.setAttribute("class", "nav-item active")
        ul1.appendChild(li1)

        var tab1 = document.createElement("a");
        tab1.setAttribute("id", "shop")
        tab1.setAttribute("class", "nav-link")
        tab1.innerText = "Wishlist"
        ul1.appendChild(tab1)
//4
        var li1 = document.createElement("li")
        li1.setAttribute("class", "nav-item active")
        ul1.appendChild(li1)

        var tab1 = document.createElement("a");
        tab1.setAttribute("id", "shop")
        tab1.setAttribute("class", "nav-link")
        tab1.innerText = "My Cart"
        ul1.appendChild(tab1)

//Second box
    var div = document.createElement("div");
    div.style.display = "flex"
    div.setAttribute("class", "container-fluid my-2 my-lg-0");
    div.style.padding = "3%"
    div.style.paddingTop = "0px";
    div.style.borderBottom = "30%"
    div.style.display = "flex"
    navDiv.appendChild(div)

        div.style.backgroundColor = "pink"

//Heading
    var heading = document.createElement("a");
    heading.style.fontWeight = "thin"
    heading.style.color = "black"
    heading.textAlign = "center"
    heading.style.textDecoration = "none"
    heading.setAttribute("id", "heading");
    heading.innerText = "Makeup API";
    heading.style.color="blue"
    heading.style.borderRadius = "2px"
    heading.style.fontFamily = "'Anton', sans-serif";
    heading.style.fontSize = "100px"
    heading.setAttribute("href", "")
    heading.setAttribute("class", "heading", "color");

div.appendChild(heading)

//Search Boxes 
var form = document.createElement("div");
    div.appendChild(form)
        form.setAttribute("class", "form-inline ml-auto")

    var textField = document.createElement("input")
    textField.setAttribute("class", "form-control mr-sm-2");
    textField.setAttribute("id", "myInput");

        textField.placeholder = "Search for Products"
        textField.style.borderRadius = "10px"
        textField.style.height = "50px"
        textField.style.marginRight = "50px"
        textField.type = "SEARCH"
        form.appendChild(textField);

    var getButton = document.createElement("button")
    getButton.setAttribute("class", "btn btn-outline-info my-2 my-sm-0")
        getButton.style.borderRadius = "10px"
        getButton.style.height = "50px"
        getButton.style.fontFamily="Bold 700"
        getButton.setAttribute("onclick", "handleChange2()")
        getButton.innerText = "SEARCH"
        form.appendChild(getButton)



    var jsonDiv = document.createElement("div")
    document.body.appendChild(jsonDiv)
        jsonDiv.style.padding = "3%"
        jsonDiv.style.backgroundColor = "pink"
        jsonDiv.style.marginTop = 0

        var droplist = document.createElement("select")
        jsonDiv.appendChild(droplist)
        droplist.setAttribute("class", "custom-select col-lg-4")
        droplist.setAttribute("onchange", "handleChange(this)")

//input api
    var a0 = document.createElement("option")
        a0.selected = "Search Brands"
            a0.innerText = "Search Brands"
            droplist.appendChild(a0)

    var a1 = document.createElement("option")
        droplist.appendChild(a1)
            a1.innerText = "alva"
            a1.setAttribute("value", "alva")

    var a2 = document.createElement("option")
        droplist.appendChild(a2)
            a2.innerText = "almay"
            a2.setAttribute("value", "almay")

    var a3 = document.createElement("option")
        droplist.appendChild(a3)
            a3.innerText = "anna sui"
            a3.setAttribute("value", "anna sui")

    var a4 = document.createElement("option")
        droplist.appendChild(a4)
            a4.innerText = "annabelle"
            a4.setAttribute("value", "annabelle")

    var a5 = document.createElement("option")
        droplist.appendChild(a5)
            a5.innerText = "benefit"
            a5.setAttribute("value", "benefit")

    var a6 = document.createElement("option")
        droplist.appendChild(a6)
            a6.innerText = "boosh"
            a6.setAttribute("value", "boosh")

    var a7 = document.createElement("option")
        droplist.appendChild(a7)
            a7.innerText = "clinique"
            a7.setAttribute("value", "clinique")

     var a8 = document.createElement("option")
         droplist.appendChild(a8)
            a8.innerText = "glossier"
            a8.setAttribute("value", "glossier")

    var a9 = document.createElement("option")
        droplist.appendChild(a9)
            a9.innerText = "iman"
            a9.setAttribute("value", "iman")

    var a10 = document.createElement("option")
        droplist.appendChild(a10)
            a10.innerText = "smashbox"   
            a10.setAttribute("value", "smashbox")

            var newDiv4 = document.createElement("div")
            document.body.appendChild(newDiv4);

function handleChange2() {


    async function searchData() {


        var value2 = document.getElementById("myInput").value

        try {

            var data3 = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${value2}`)

            var resData3 = await data3.json();

            console.log(resData3)

            var album = document.createElement("div")
            album.setAttribute("class", "album py-5 bg-light")
            album.id = "album"
            album.style.padding = "2%"
            newDiv4.innerHTML = "";
            newDiv4.appendChild(album)

            var cont = document.createElement("div")
            album.setAttribute("class", "container-fluid")
            album.style.marginRight = "2%"
            album.style.marginTop = "2%"
            album.appendChild(cont)
            
            var row = document.createElement("div")
            row.setAttribute("class", "row")
            row.id = "rows"
            album.appendChild(row)


        // For Loops 

            for (var i = 0; i <= resData3.length; i++) {


                var divcol = document.createElement("div");
                divcol.setAttribute("class", "col-lg-3 col-md-4 d-flex" )
                row.appendChild(divcol);

                var boxshad = document.createElement("div");
                boxshad.setAttribute("class", "card mb-4 box-shadow ")
                boxshad.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
                divcol.appendChild(boxshad);

                var img = document.createElement("img");
                boxshad.appendChild(img)
                img.setAttribute("id", "flagsimage")
                img.setAttribute("class", "card-img-top")
                img.style.display = "block"
                img.style.height = "225px"
                img.style.width = "100%"
                img.src = resData3[i].image_link;

                var cardBody = document.createElement("div")
                cardBody.setAttribute("class", "card-body")
                boxshad.appendChild(cardBody);


                var h1 = document.createElement("h6");
                h1.innerText = ("BrandName : " + resData3[i].brand)
                h1.style.fontFamily = "'Bitter', serif";
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "35px"

                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

        // Product Name

                var h1 = document.createElement("h6");
                h1.innerText = ("Name : " + resData3[i].name)
                h1.setAttribute = ("class", "card-text")
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.lineHeight = "35px"
                h1.style.fontWeight = "bolder"

                cardBody.appendChild(h1);

        // Product Link

                var h1 = document.createElement("a");
                h1.innerText = (resData3[i].product_link)
                h1.style.textDecoration = "none"
                h1.href = resData3[i].product_link
                h1.style.fontFamily = "'Bitter', serif";
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
           
                h1.style.fontWeight = "bold"
                cardBody.appendChild(h1);

        // Price of the Product
            var h1 = document.createElement("h6");
            h1.innerText = ("Price : " + resData3[i].price)
            h1.style.fontFamily = "'Bitter', serif";
            h1.setAttribute = ("class", "card-text")
            h1.style.lineHeight = "35px"
            h1.style.fontWeight = "bold"
            cardBody.appendChild(h1);
        // Brand Description
            var h1 = document.createElement("h6");
            h1.innerText = ("Description : " + resData3[i].name)
            h1.style.fontFamily = "'Bitter', serif";
            h1.setAttribute = ("class", "card-text")
            h1.style.lineHeight = "35px"            
            h1.style.fontWeight = "bold"        
            cardBody.appendChild(h1);
        }
    } catch (err) {
            console.log(err)
        }
    }
            searchData()

}

         function handleChange(e) {


              var value = e.value
            async function getData() {
                 try {
            let number = 0

            if (number === 1) {
                document.body.style.display = "none"
                number = 0
            }
            
            var data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=" + value);
                var resData = await data.json();

            newDiv4.innerHTML = ""
            var album = document.createElement("div")
            album.setAttribute("class", "album py-5 bg-light")
            album.id = "album"
            album.style.padding = "2%"
            newDiv4.appendChild(album)

            var cont = document.createElement("div")
            album.setAttribute("class", "container-fluid")
            album.style.marginRight = "2%"
            album.style.marginTop = "2%"
            album.appendChild(cont)

            var row = document.createElement("div")
            row.setAttribute("class", "row")
            album.appendChild(row)

    // For Loops
             for (var i = 0; i <= resData.length; i++) {

                var divcol = document.createElement("div");
                divcol.setAttribute("class", "col-lg-3 col-md-4 d-flex")
                row.appendChild(divcol);

                var boxshad = document.createElement("div");
                boxshad.setAttribute("class", "card mb-4 box-shadow box")
                boxshad.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
                
                divcol.appendChild(boxshad);

                var cardimg = document.createElement("div")
                cardimg.setAttribute("class","card-img")
                boxshad.appendChild(cardimg)

                var img = document.createElement("img");
                cardimg.appendChild(img)
                img.setAttribute("id", "flagsimage")
                img.setAttribute("class", "card-img-top")
                img.style.display = "block"
                img.style.height = "225px"
                img.style.width = "100%"
                img.src = resData[i].image_link;

                var cardBody = document.createElement("div")
                cardBody.setAttribute("class", "card-body")
                boxshad.appendChild(cardBody);



                var h1 = document.createElement("h6");
                h1.innerText = ("BrandName : " + resData[i].brand)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // Product Name

                var h1 = document.createElement("h6");
                h1.innerText = ("Name : " + resData[i].name)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // product Link

                var h1 = document.createElement("a");
                h1.innerText = (resData[i].product_link)
                h1.href = resData[i].product_link
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"

                cardBody.appendChild(h1);

                // Price of the Product

                var h1 = document.createElement("h6");
                h1.innerText = ("Price : " + resData[i].price)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"
                cardBody.appendChild(h1);


                // Brand Description

                var h1 = document.createElement("h6");
                h1.innerText = ("Description : " + resData[i].name)
                h1.setAttribute = ("class", "card-text")
                h1.style.lineHeight = "30px"
                h1.style.fontFamily = "'Bitter', serif";
                h1.style.fontWeight = "bold"
                cardBody.appendChild(h1);

                    number += 1
            }
        } catch (err) {
            console.log(err)
        }
    }

    getData()
}

function toggleClick() {

    var element1 = document.body;
    element1.classList.toggle("dark");
}

function headingDark() {
    var element2 = document.getElementById("heading")
    element2.classList.toggle("dark2")
}


function toggleBtn() {
    var obj = document.getElementById("weathers", "icon");
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}


