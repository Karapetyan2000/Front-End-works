"use strict";
function numOfProd() {
    function e(e) {
        e = (e = +$(".prod_left_val").html() - e) < 5 ? 5 : e,
        $(".prod_left_val").html(e)
    }
    setTimeout((function() {
        e(1),
        setInterval((function() {
            e(Math.floor(2 * Math.random()) + 2)
        }
        ), 1e3 * (Math.floor(5 * Math.random()) + 1200))
    }
    ), 2e3)
}
window.addEventListener("DOMContentLoaded", ()=>{
    let o, l = 0, n = 600;
    function c() {
        --n;
        let e = Math.floor(n / 60)
          , t = n - 60 * e;
        0 == e && 0 == t && clearInterval(o),
        t = 10 <= t ? t : "0" + t,
        e = 10 <= e ? e : "0" + e,
        document.querySelector("#mins").innerHTML = e,
        document.querySelector("#secs").innerHTML = t
    }
    const e = document.querySelectorAll(".quiz_option")
      , t = document.querySelectorAll(".quiz_step")
      , r = document.querySelectorAll(".quiz_num")
      , i = document.querySelectorAll(".quiz_form form input");
    let s = !1;
    e.forEach(e=>{
        e.addEventListener("click", ()=>{
            s || (s = !0,
            l < 3 ? l++ : l = 3,
            e.classList.add("active"),
            setTimeout(()=>{
                t.forEach((e,t)=>{
                    t == l ? (e.style.display = "block",
                    setTimeout(()=>{
                        e.classList.add("active")
                    }
                    , 400),
                    3 == l ? (document.querySelector(".quiz_nums").style.display = "none",
                    document.querySelector(".quiz_title").style.display = "none",
                    document.querySelector(".order_title").style.display = "block",
                    o = setInterval(c, 1e3),
                    document.querySelector("#prod_img").style.display = "block",
                    setTimeout(()=>{
                        document.querySelector("#prod_img").classList.add("active"),
                        setTimeout(()=>{
                            var e = $("#roulette")
                              , e = $(e).offset().top;
                            $("body,html").animate({
                                scrollTop: e
                            }, 777)
                        }
                        , 200)
                    }
                    , 400)) : r[l].classList.add("active")) : (e.classList.remove("active"),
                    setTimeout(()=>{
                        e.style.display = "none"
                    }
                    , 400))
                }
                ),
                s = !1
            }
            , 400)),
            displaySelectedElementText(e, l)
        }
        )
    }
    ),
    i.forEach(e=>{
        e.addEventListener("focus", ()=>{
            e.classList.add("active")
        }
        )
    }
    )
}
),
$("a").click((function(e) {
    e.preventDefault(),
    e = $("#roulette"),
    e = $(e).offset().top,
    $("body,html").animate({
        scrollTop: e
    }, 777)
}
)),
numOfProd();
let comment = document.querySelector('input[name="extra[comment]"]');
function displaySelectedElementText(element, count) {
    comment.value += `${count}.${element.closest(".quiz_step").querySelector(".quiz_question").textContent.trim().replace(/^[0-9]+\. /, "")}:${element.textContent.trim()};`
}