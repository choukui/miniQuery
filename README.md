# 迷你版jQuery（不断完善中）

1:miniQ('#box') 获取id元素
2:miniQ('.box') 获取class元素
3:miniQ('.box').css('color','red') 设置style /miniQ('.box').css({color:'red'}) 设置style / miniQ('.box').css('color') 获取style
4:miniQ.isArray() //判断是不是数组
5:miniQ.camelCase() //转驼峰
6:miniQ.for(arr,function(val,index,arr){}) //数组循环 callback三个参数：数组值，每一项的下标，数组本身
7:miniQ.forIn(obj,function(val,key,obj){}) //数组循环 callback三个参数：键，值，对象本身