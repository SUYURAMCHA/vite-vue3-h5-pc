// rem等比适配配置文件
// 基准大小
// baseSize = 16 （fontSize = 16）

// 获取是否为移动端
const isMobile = () => {
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return !!flag
}
// 设置 rem 函数
function setRem() {
    // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
    if(!isMobile()) {
        var scale = document.documentElement.clientWidth / 750;
        if(scale > 2) {
            scale = 2;
        }
    }
    document.documentElement.style.fontSize = 16 * Math.min(scale, 2) + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem();
    // window.location.reload();
};