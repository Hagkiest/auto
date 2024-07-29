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

  

  