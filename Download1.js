function openTab(evt, tabName) {  
    // 隐藏所有选项卡内容  
    var i, tabcontent, tablinks;  
    tabcontent = document.getElementsByClassName("tabcontent");  
    for (i = 0; i < tabcontent.length; i++) {  
      tabcontent[i].style.display = "none";  
    }  
    
    // 移除所有选项卡按钮的"active"类  
    tablinks = document.getElementsByClassName("tablink");  
    for (i = 0; i < tablinks.length; i++) {  
      tablinks[i].className = tablinks[i].className.replace(" active", "");  
    }  
    
    // 显示当前选项卡内容，并添加"active"类到对应的按钮  
    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";  
  }  
    
  // 假设您想默认显示第一个选项卡（Xiaoma）  
  document.getElementsByClassName("tablink")[0].click();

// JavaScript 用于检测设备类型并隐藏details元素
function hideDetailsOnMobile() {
  const detailsElements = document.querySelectorAll('.details');
  if (window.innerWidth <= 600) {
      detailsElements.forEach(element => {
          element.style.display = 'none';
      });
  } else {
      detailsElements.forEach(element => {
          element.style.display = '';
      });
  }
}

// 监听窗口尺寸变化事件
window.addEventListener('resize', hideDetailsOnMobile);

// 页面加载时运行
window.addEventListener('load', hideDetailsOnMobile);


  