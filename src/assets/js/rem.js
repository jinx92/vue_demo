/*
    # 按照宽高比例设定html字体, width=device-width initial-scale=1版
    # @pargam win 窗口window对象
    # @pargam option{
      designWidth: 设计稿宽度，必须
      designHeight: 设计稿高度，不传的话则比例按照宽度来计算，可选
      designFontSize: 设计稿宽高下用于计算的字体大小，默认20，可选
      callback: 字体计算之后的回调函数，可选
    }
    # return Boolean;
    # xiaoweili@tencent.com
    # ps:请尽量第一时间运行此js计算字体
    # 计算方式：以iPhone6设计稿的尺寸为标准 除以100
*/
console.time("test");
! function (f, b) {
    var e = 0,
        n = b.designWidth,
        m = b.designHeight || 0,
        a = b.designFontSize || 20,
        j = b.callback || null,
        h = document.documentElement,
        c = document.body,
        g, d, l, k;
 
    function i() {
        var o = f.innerWidth > 800 ? 800 : f.innerWidth;
        var p = m !== 0 ? Math.min(o / n, f.innerHeight / m) : o / n;
        return p * a * 2
    }! function () {
        var o = f.innerWidth > 800 ? 800 : f.innerWidth;
        g = h.getBoundingClientRect().width;
        k = k ? k : arguments.callee;
        if (g !== o && e < 20) {
            f.setTimeout(function () {
                e++;
                k()
            }, 0)
        } else {
            d = Math.floor(i());
            if (d + "px" !== getComputedStyle(h)["font-size"]) {
                h.style.fontSize = d + "px";
                return j && j(d)
            }
        }
    }();
    f.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
        clearTimeout(l);
        l = setTimeout(function () {
            k()
        }, 200)
    }, false)
}(window, {
    designWidth: 750,
    designFontSize: 100,
    callback: function (a) {}
});