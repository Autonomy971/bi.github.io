// 小动物结果库（可自己添加/修改）
const animalResults = [
    "你是一只软萌的小猫咪🐱！粘人又傲娇～",
    "你是一只治愈的小狗狗🐶！忠诚又热情～",
    "你是一只慵懒的小熊猫🐼！爱吃竹子超可爱～",
    "你是一只灵动的小兔子🐰！蹦蹦跳跳无烦恼～",
    "你是一只憨憨的小企鹅🐧！走路摇摇摆摆萌化了～",
    "你是一只机灵的小松鼠🐿️！藏松果小能手～",
    "你是一只温柔的小绵羊🐑！软乎乎超好rua～",
    "你是一只霸气的小老虎🐯！外表凶内心暖～",
    "你是一只可爱的小仓鼠🐹！圆滚滚爱囤粮～",
    "你是一只自由的小鸟🐦！快乐翱翔无束缚～"
];

// 从本地存储读取已保存的结果
let savedResult = localStorage.getItem("animalTestResult");
const resultDom = document.getElementById("result");

// 若已有保存的结果，直接显示
if (savedResult) {
    resultDom.innerHTML = `<<i class="fas fa-paw"></</i> ${savedResult}`;
}

// 长按事件监听（1秒触发）
let pressTimer;
resultDom.addEventListener("mousedown", () => {
    pressTimer = setTimeout(() => {
        if (!savedResult) {
            // 随机选择一个结果
            const randomIndex = Math.floor(Math.random() * animalResults.length);
            const randomResult = animalResults[randomIndex];
            // 显示结果并保存到本地
            resultDom.innerHTML = `<i class="fas fa-paw"></i> ${randomResult}`;
            localStorage.setItem("animalTestResult", randomResult);
            savedResult = randomResult;
        }
    }, 1000);
});

// 取消长按（鼠标松开/移开）
resultDom.addEventListener("mouseup", () => clearTimeout(pressTimer));
resultDom.addEventListener("mouseleave", () => clearTimeout(pressTimer));

// 移动端适配（触摸事件）
resultDom.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => {
        if (!savedResult) {
            const randomIndex = Math.floor(Math.random() * animalResults.length);
            const randomResult = animalResults[randomIndex];
            resultDom.innerHTML = `<<i class="fas fa-paw"></</i> ${randomResult}`;
            localStorage.setItem("animalTestResult", randomResult);
            savedResult = randomResult;
        }
    }, 1000);
});

resultDom.addEventListener("touchend", () => clearTimeout(pressTimer));
resultDom.addEventListener("touchcancel", () => clearTimeout(pressTimer));
// 在script.js中添加长按进度功能
let progress = 0;
let progressInterval;

// 修改鼠标按下事件
resultDom.addEventListener("mousedown", () => {
    if (!savedResult) {
        // 重置进度
        progress = 0;
        resultDom.innerHTML = `<i class="fas fa-paw"></i> ${progress}%`;
        
        // 启动进度条动画
        progressInterval = setInterval(() => {
            progress += 5;
            resultDom.innerHTML = `<i class="fas fa-paw"></i> ${progress}%`;
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                // 显示结果
                const randomIndex = Math.floor(Math.random() * animalResults.length);
                const randomResult = animalResults[randomIndex];
                resultDom.innerHTML = `<i class="fas fa-paw"></i> ${randomResult}`;
                localStorage.setItem("animalTestResult", randomResult);
                savedResult = randomResult;
            }
        }, 50);
    }
});

// 修改触摸开始事件（移动端）
resultDom.addEventListener("touchstart", () => {
    if (!savedResult) {
        // 重置进度
        progress = 0;
        resultDom.innerHTML = `<i class="fas fa-paw"></i> ${progress}%`;
        
        // 启动进度条动画
        progressInterval = setInterval(() => {
            progress += 5;
            resultDom.innerHTML = `<i class="fas fa-paw"></i> ${progress}%`;
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                // 显示结果
                const randomIndex = Math.floor(Math.random() * animalResults.length);
                const randomResult = animalResults[randomIndex];
                resultDom.innerHTML = `<i class="fas fa-paw"></i> ${randomResult}`;
                localStorage.setItem("animalTestResult", randomResult);
                savedResult = randomResult;
            }
        }, 50);
    }
});

// 在取消长按事件中清除进度条
resultDom.addEventListener("mouseup", () => {
    clearInterval(progressInterval);
    if (!savedResult) {
        resultDom.innerHTML = `<i class="fas fa-paw"></i> 0%`;
    }
});

resultDom.addEventListener("mouseleave", () => {
    clearInterval(progressInterval);
    if (!savedResult) {
        resultDom.innerHTML = `<i class="fas fa-paw"></i> 0%`;
    }
});

resultDom.addEventListener("touchend", () => {
    clearInterval(progressInterval);
    if (!savedResult) {
        resultDom.innerHTML = `<i class="fas fa-paw"></i> 0%`;
    }
});

resultDom.addEventListener("touchcancel", () => {
    clearInterval(progressInterval);
    if (!savedResult) {
        resultDom.innerHTML = `<i class="fas fa-paw"></i> 0%`;
    }
});