document.querySelector('.about-btn').addEventListener('click', function() {  
    window.location.href = 'About.html'; // 跳转到Download.html页面  
});
document.addEventListener('wheel', function(event) {  
    // 阻止默认滚动行为（可选，如果你想要完全自定义滚动行为）  
    // event.preventDefault();  
    
    // event.deltaY 提供了滚轮垂直移动的距离  
    // 向上滚动时，deltaY 为负值；向下滚动时，deltaY 为正值  
    var delta = event.deltaY * -0.01; // 调整滚动速度  
    window.scrollBy(0, delta); // 滚动页面  
    
    // 注意：如果你想要平滑滚动，而不是即时滚动，你可能需要使用  
    // window.requestAnimationFrame 或其他平滑滚动库/方法  
  });  
    
  // 示例：使用 requestAnimationFrame 实现平滑滚动（简化版）  
  // 注意：这只是一个非常基础的示例，实际中可能需要更复杂的逻辑来处理动画和边界条件  
  function smoothScroll(targetY, duration) {  
    let startTime = null;  
    
    function animation(currentTime) {  
      if (startTime === null) startTime = currentTime;  
      const timeElapsed = currentTime - startTime;  
      const run = easeInOutQuad(timeElapsed, 0, targetY, duration);  
      window.scrollTo(0, run);  
      if (timeElapsed < duration) requestAnimationFrame(animation);  
    }  
    
    requestAnimationFrame(animation);  
  }  
    
  function easeInOutQuad(t, b, c, d) {  
    t /= d / 2;  
    if (t < 1) return c / 2 * t * t + b;  
    t--;  
    return -c / 2 * (t * (t - 2) - 1) + b;  
  }  
    
  // 示例用法：平滑滚动到页面顶部（需要调整目标Y值和持续时间）  
  // smoothScroll(0, 1000); // 1000毫秒内平滑滚动到页面顶部

  document.querySelector('.download-btn').addEventListener('click', function() {  
    document.getElementById('modal').style.display = "block";  
  });  
    
  // 获取 <span> 元素，设置关闭按钮  
  var span = document.getElementsByClassName("close")[0];  
    
  // 点击 <span> (x), 关闭模态框  
  span.onclick = function() {  
    document.getElementById('modal').style.display = "none";  
  }  
    
  // 当用户点击模态框外部时，关闭它  
  window.onclick = function(event) {  
    var modal = document.getElementById('modal');  
    if (event.target == modal) {  
      modal.style.display = "none";  
    }  
  }