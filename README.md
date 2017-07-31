# 迷你版jQuery（不断完善中）

说明：根据以前所做项目遇到的js功能，编写此项目，以前做项目是没有想到这么做，全凭回忆逐渐添加完善功能。功能不是很完善，会慢慢添加和完善此项目；

引用方式：

1：下载到本地
  
2：<script src='miniQuery.js'></script>


## 功能说明：

1:miniQ('#box') 获取id元素

2:miniQ('.box') 获取class元素

3:miniQ('.box').css('color','red') 设置style /miniQ('.box').css({color:'red'}) 设置style / miniQ('.box').css('color') 获取style

4:miniQ.isArray() //判断是不是数组

5:miniQ.camelCase() //转驼峰

6:miniQ.for(arr,function(val,index,arr){}) //数组循环 callback三个参数：数组值，每一项的下标，数组本身

7:miniQ.forIn(obj,function(val,key,obj){}) //对象循环 callback三个参数：键，值，对象本身
