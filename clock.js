let settings = document.querySelector(".settings")
let basic = document.querySelector("#basicSet")
let dateSlideText = document.querySelector("#dateSlideText")
let dateSlide = document.querySelector("#dateSlide")
let formatSlideText = document.querySelector("#formatSlideText")
let formatSlider = document.querySelector("#formatSlider")
let clockType = document.querySelector("#clockType")
let clockCustom = document.querySelector("#clockCustom")
let clockPers = document.querySelector("#clockPers")
let clockFont = document.querySelector("#clockFont")
let clockShadow = document.querySelector("#clockShadow")
let dateCustom = document.querySelector("#dateCustom")
let datePers = document.querySelector("#datePers")
let dateFont = document.querySelector("#dateFont")
let dateShadow = document.querySelector("#dateShadow")
let hourFormat = document.querySelector(".hourFormat")
let am = document.querySelector(".am")
let pm = document.querySelector(".pm")
let clock = document.querySelector(".clock")
let date = document.querySelector(".date")

let dpdwL = document.querySelector(".dpdwL")
let dpdwM = document.querySelector(".dpdwM")
let dpdwR = document.querySelector(".dpdwR")
let citySearch = document.querySelector("#citySearch")

// Hide and Show function hence HnS \/\/\/

function HnS(x){
    if(x.style.display === "none") {
        x.style.display = "flex"
        if (x.className === "hContainer") {
            x.style.flexDirection = "row"
        } else {
            x.style.flexDirection = "column"
        }
    } else {
        x.style.display = "none"
    }
}

// personalize area \/\/\/

function colorChanger(x, y) {
    x.style.color = document.querySelector(`#` + y.id).value;
}

function fontSize (x, y) {
    x.style.fontSize = document.querySelector(`#` +  y.id).value + "px";
}

function shadowCustom (a, b, c, d, e){
    let shadowH = document.querySelector(`#` +  b.id).value 
    let shadowV = document.querySelector(`#` +  c.id).value 
    let shadowB = document.querySelector(`#` +  d.id).value 
    let shadowCP = document.querySelector(`#` +  e.id).value 

    a.style.textShadow = shadowH + "px" + ' ' + shadowV + "px" + ' ' + shadowB + "px" + ' ' + shadowCP;
}

function fontSelector (x, y){
    let urlArea = Array.from(document.querySelectorAll(".urlArea"))

    if (y.value == "Add URL") {
        urlArea.forEach(function(element){element.style = "display: inherit"})
           
    } else {
        x.style.fontFamily = y.value
        urlArea.forEach(function(element){element.style = "display: none"})
    }
}

/*   Work in progress with the font changed by URL

let subTest = document.querySelector("#subTest");

subTest.addEventListener("click", function URLinput(x) {
    let fontAddress = document.querySelector("#clockURLin");

    let linkCSS = document.createElement("link");
    linkCSS.setAttribute("rel", "stylesheet");
    linkCSS.setAttribute("type", "text/css");
    linkCSS.setAttribute("href", fontAddress.value);
    document.head.appendChild(linkCSS);
    
    console.log(linkCSS);
    x.style.fontFamily = linkCSS
});


@import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');

*/

//getting date and time \/\/\/

function time() {
    let date = new Date();
    let year = date.getFullYear(); // time()[0]
    let month = date.getMonth(); // time()[1]
    let day = date.getDate(); // time()[2]
    let hour = date.getHours(); // time()[3]
    let min = date.getMinutes(); // time()[4]
    let sec = date.getSeconds(); // time()[5]

    return [year, month, day, hour, min, sec]
}

// type selector

function typeSelect (x){
    switch (x.value) {
        case "type1d":
            // show \/\/\/
            // should show clock1 and date + all settings  481.61
            cl1d.style.display = "block"
            date.style.display = "block"
            clockCustom.style.display = "flex"
            dateCustom.style.display = "flex"
            dateSlideText.style.display = "flex"
            dateSlide.style.display = "flex"
            formatSlideText.style.display = "flex"
            formatSlider.style.display = "flex"

            // hide \/\/\/
            // should hide clock2 and clock3 
            cl2d.style.display = "none"
            cl3d.style.display = "none"

            break;
        case "type2d":
            // show \/\/\/
            // should show clock2 and basic settings + type selector
            cl2d.style.display = "flex"
            cl2d.style.alignSelf = "center"
            formatSlideText.style.display = "flex"
            formatSlider.style.display = "flex"
            
            // hide \/\/\/
            // should hide clock1, clock3, date and the customize area
            cl1d.style.display = "none"
            cl3d.style.display = "none"
            date.style.display = "none"
            dateSlideText.style.display = "none"
            dateSlide.style.display = "none"
            clockCustom.style.display = "none"
            dateCustom.style.display = "none"
            
            break;
        case "type3d":
            // show \/\/\/
            // should show clock2 and basic settings + type selector
            cl3d.style.display = "flex"
            
            // hide \/\/\/
            // should hide clock1, clock2, date and the customize area
            cl1d.style.display = "none"
            cl2d.style.display = "none"
            date.style.display = "none"
            dateSlideText.style.display = "none"
            dateSlide.style.display = "none"
            clockCustom.style.display = "none"
            dateCustom.style.display = "none"
            formatSlideText.style.display = "none"
            formatSlider.style.display = "none"
            
            break;
        case "type4a":
            // show \/\/\/
            // should show clock2 and basic settings + type selector
            cl1a.style.display = "flex"
            
            // hide \/\/\/
            // should hide clock1, clock2, date and the customize area
            cl3d.style.display = "none"
            cl1d.style.display = "none"
            cl2d.style.display = "none"
            date.style.display = "none"
            dateSlideText.style.display = "none"
            dateSlide.style.display = "none"
            clockCustom.style.display = "none"
            dateCustom.style.display = "none"
            formatSlideText.style.display = "none"
            formatSlider.style.display = "none"
            
            break;
        default:
            // alert("there is a problem")
            break;
    }
}

//showing the date \/\/\/

function dateSet (){
    let y = time()[0]
    let mo = time()[1]
    let day = time()[2]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let finalDate = months[mo] + " " + day +  " , " + y
    date.innerHTML = finalDate;
}
window.document.onload = dateSet();
window.document.onload = setClock1Digital();
window.document.onload = setClock2Digital();
setInterval(setClock1Digital,100)
setInterval(setClock2Digital, 100)
setInterval(setClock3Digital, 1000)



// showing clock 1 digital \/\/\/

function setClock1Digital (){
    
    let h = time()[3]
    let m = time()[4]
    let s = time()[5]
    let format = ["AM", "PM"];
    
    // "0" before hours, minutes, seconds
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    // 24h and 12h format area
    if(document.querySelector("#formatSlide").checked === true) {
        if (h <= 12) {
            let form = 0;
            h = h > 12 ? h - 12 : h;
            let finalTime = h + " : " + m + " : " + s + " " + format[form];
            cl1d.innerHTML = finalTime;
        } else {
            let form = 1;
            h = h > 12 ? h - 12 : h;
            let finalTime = h + " : " + m + " : " + s + " " + format[form];
            cl1d.innerHTML = finalTime;
        }
    } else {
        let finalTime = h + " : " + m + " : " + s;
        cl1d.innerHTML = finalTime;
    }
    
}

// showing clock 2 digital \/\/\/

function setClock2Digital (){

    const numbers = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // no 0
        [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // no 1
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // no 2
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // no 3
        [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // no 4
        [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // no 5
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // no 6
        [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // no 7
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // no 8
        [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // no 9
    ];

    const blocks = [];
    const digs = Array.from(document.querySelectorAll(".block"));

    //block delimitation 
    for (let i = 0; i < 4; i++) {
        blocks.push(digs.slice(i * 15, i * 15 + 15))
    }

    //number show/hide
    function showNum (block, num) {
        let n = numbers[num];
        for (let i = 0; i < block.length; i++) {
            block[i].classList[ n[i] === 1 ?  'add' : 'remove']('active');
        }
    }

    function animation () {
        
        let h = time()[3].toString()
        let m = time()[4].toString()
        
        // "0" before hours, minutes
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;

        //seconds ticking
        for (let i = 0; i < digs.length; i++) {
            if(i === time()[5]){
                digs[i].classList.add('second')
            } else {
                digs[i].classList.remove('second')
            }
        }

        if(document.querySelector("#formatSlide").checked === true) {
            if(h > 12 && h < 23){
                h = "0" + (h - 12);
                showNum(blocks[2], m[0]);
                showNum(blocks[3], m[1]);
                showNum(blocks[0], h[0]);
                showNum(blocks[1], h[1]);
                hourFormat.style.display = "flex"
                // console.log(am, pm)
                pm.classList.add('active')
                am.classList.remove('active')
            } else {
                h = h - 12;
                console.log(h)
                showNum(blocks[2], m[0]);
                showNum(blocks[3], m[1]);
                showNum(blocks[0], h[0]);
                showNum(blocks[1], h[1]);
                hourFormat.style.display = "flex"
                am.classList.add('active')
                pm.classList.remove('active')

            }
        } else {
            showNum(blocks[2], m[0]);
            showNum(blocks[3], m[1]);
            showNum(blocks[0], h[0]);
            showNum(blocks[1], h[1]);
            hourFormat.style.display = "none"
        }
    }

    window.requestAnimationFrame(animation)
}

// showing clock 3 digital \/\/\/

function setClock3Digital (){

    const stripes = Array.from(document.querySelectorAll(".stripe"));


    function highlight (stripe, d) {
        
        let x = stripes[stripe].querySelector(`.nums:nth-of-type(${d + 1})`)
        
        x.classList.add("pop")
        
        setTimeout(() => {x.classList.remove("pop")}, 950)

    }    
            
    function stripeSlide(stripe, x) {
        let y1 = Math.floor(x / 10);
        let y2 = x % 10;
        // let x = nums.toString()
    
        // console.log(stripes[stripe])
        stripes[stripe].style.transform = `translateY(${y1*-40}px)`;
        setTimeout(() => {highlight(stripe, y1);}, 250)
        
        stripes[stripe + 1].style.transform = `translateY(${y2*-40}px)`;
        // highlight(stripe + 1, y2);
        setTimeout(() => {highlight(stripe + 1, y2);}, 250)
    }

    stripeSlide(0, time()[3])
    stripeSlide(2, time()[4])
    stripeSlide(4, time()[5])
    // stripeSlide(0, 23)
    // stripeSlide(2, 59)
    // stripeSlide(4, 59)

}

// showing clock 1 analog

window.document.onload = setClock1Analog()



function setClock1Analog (){
    
    let segs = Array.from(document.querySelectorAll(".seg"))

    // console.log(test)
    
    for (let i = 0; i < segs.length; i++) {
        let val = 6
        segs[i].style.transform = `rotate(` + val * i + `deg)`
    }
    
    let test = "http://worldtimeapi.org/api/timezone";
    fetch(test)
        .then(response => response.json())
        .then(bla => {
            let asd = document.querySelector(".dpdwL")

            for (let i = 0; i < bla.length; i++) {
                const newDiv = document.createElement("option");
                newDiv.setAttribute("class", "city");
                newDiv.setAttribute("value", i);
                const newContent = document.createTextNode(bla[i]);
                newDiv.appendChild(newContent);
                asd.appendChild(newDiv);

                newDiv.addEventListener("click", function(){
                    // console.log(bla[i]);
                    // console.log(i);
                    let x = bla[i].split("/")
                    document.querySelector(".dpBtn").innerHTML = x.pop();

                    let y = document.querySelector("#citySearch")
                    console.log(y.innerHTML)
                    // y.innerHTML = clear
                })
            }
            
            let hourLC = document.querySelector(".LC .hour")
            let hourMC = document.querySelector(".MC .hour")
            let hourRC = document.querySelector(".RC .hour")
            
            hourLC.style.transform = `rotate(` + (time()[3] * 30) + `deg)` 
            hourMC.style.transform = `rotate(` + (time()[3] * 30) + `deg)` 
            hourRC.style.transform = `rotate(` + (time()[3] * 30) + `deg)` 
        
        })



    // time for the main clock
setInterval(()=> {
    let secondLC = document.querySelector(".LC .second")
    let secondMC = document.querySelector(".MC .second")
    let secondRC = document.querySelector(".RC .second")
    let minuteLC = document.querySelector(".LC .minute")
    let minuteMC = document.querySelector(".MC .minute")
    let minuteRC = document.querySelector(".RC .minute")

    secondLC.style.transform = `rotate(` + (time()[5] * 6) + `deg)` 
    secondMC.style.transform = `rotate(` + (time()[5] * 6) + `deg)`
    secondRC.style.transform = `rotate(` + (time()[5] * 6) + `deg)`
    minuteLC.style.transform = `rotate(` + (time()[4] * 6) + `deg)`
    minuteMC.style.transform = `rotate(` + (time()[4] * 6) + `deg)`
    minuteRC.style.transform = `rotate(` + (time()[4] * 6) + `deg)`

    },100)

    
}
function cityFilter() {
    let input = document.querySelector("#citySearch");
    let filter = input.value.toUpperCase();
    let opt = document.querySelector(".dpdwL");
    let cities = opt.querySelectorAll("option")
    let i;
    
    for (i = 0; i < cities.length; i++) {
        txtValue = cities[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cities[i].style.display = "";
        } else {
        cities[i].style.display = "none";
        }
    }
}

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);