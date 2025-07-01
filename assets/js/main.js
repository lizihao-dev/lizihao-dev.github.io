// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
  // 初始化星空背景
  for(let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = (Math.random() * 2.5) + 's';
    document.getElementById('stars').appendChild(star);
  }

  // 进入按钮事件
  document.getElementById('enter-btn')?.addEventListener('click', function() {
    document.getElementById('healing-home').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('healing-home').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      loadContent();
    }, 800);
  });

  // 安全加载图片
  function safeLoadImage(img, src) {
    img.src = src;
    img.onerror = function() {
      this.src = '/images/placeholder.jpg';
      this.alt = '图片加载失败';
    };
  }
});

// 内容加载
async function loadContent() {
  try {
    const response = await fetch('/desc.json');
    const data = await response.json();
    renderContent(data);
  } catch (error) {
    console.error('加载失败:', error);
  }
}