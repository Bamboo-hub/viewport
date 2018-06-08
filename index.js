var log = function () {
    console.log.apply(console, arguments)
}

// 选择元素
var e = function (sel) {
    return document.querySelector(sel)
}

// es 返回一个数组, 包含所有被选中的元素
var es = function (sel) {
    return document.querySelectorAll(sel)
}


var examine = function (time) {
    var h = time.slice(0, 2)
    if(h > 06 && h < 18) {
        var s = "白天"
        return s
    } else {
        var s = "晚上"
        return s
    }
}

var f = function () {
    var text1 = e('.text1')
    var h = `
    <div>网页可见区域宽： ${document.body.clientWidth}</div>
    <div>网页可见区域高： ${document.body.clientHeight}</div>
    <div>网页可见区域宽： ${document.body.offsetWidth} (包括边线的宽)</div>
    <div>网页可见区域高： ${document.body.offsetHeight} (包括边线的高)</div>
    <div>网页正文全文宽： ${document.body.scrollWidth}</div>
    <div>网页正文全文高： ${document.body.scrollHeight}</div>
    <div>网页被卷去的高： ${document.body.scrollTop}</div>
    <div>网页被卷去的左： ${document.body.scrollLeft}</div>
    <div>网页正文部分上： ${window.screenTop}</div>
    <div>网页正文部分左： ${window.screenLeft}</div>
    <div>屏幕分辨率的高： ${window.screen.height}</div>
    <div>屏幕分辨率的宽： ${window.screen.width}</div>
    <div>屏幕可用工作区高度： ${window.screen.availHeight}</div>
    <div>屏幕可用工作区宽度： ${window.screen.availWidth}</div>
    `
    text1.insertAdjacentHTML('beforeend', h)

    var text2 = e('.text2')
    var time = new Date().toString().slice(16, 24)
    var t = examine(time)
    text2.innerHTML = `现在的时间是${time}, 现在是${t}`
    var text3 = e('.text3')
    var ip = returnCitySN["cip"]+','+returnCitySN["cname"]
    text3.innerHTML = `我的ip地址是${ip}`
}

f()