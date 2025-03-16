function changeFont(fontName) {
    document.body.style.fontFamily = fontName;
    localStorage.setItem('selectedFont', fontName); // 存储字体到 localStorage
}

// 监听字体切换点击事件
document.querySelectorAll('.font-switcher').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        changeFont(this.dataset.font);
    });
});

// 页面加载时检查 localStorage 并应用字体
window.addEventListener('DOMContentLoaded', function() {
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
        document.body.style.fontFamily = savedFont;
    } else {
        document.body.style.fontFamily = 'NLXJT-Regular, "Microsoft YaHei", Helvetica, "Meiryo UI", "Malgun Gothic", "Segoe UI", "Trebuchet MS", Monaco, monospace, Tahoma, STXihei, 华文细黑, STHeiti, "Helvetica Neue", "Droid Sans", "wenquanyi micro hei", FreeSans, Arimo, Arial, SimSun, 宋体, Heiti, 黑体, sans-serif';
    }
});