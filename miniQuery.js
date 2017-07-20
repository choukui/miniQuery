/**
 * Created by 95203 on 2017/7/19.
 */
(function (window) {
    var A = function (select, context) {
        return new A.fn.init(select, context)
    };
    A.fn = A.property = {
        //修正constructor指向
        constructor:A,
      init:function (select, context) {
            //设置上下文默认值
            context = context || document;
            //初始化对象长度为0
            this.length = 0;
          //如果为id选择器
          if(!select.indexOf('#')){
              this[0] = document.getElementById(select.slice(1));
              this.length = 1;
          }
          //如果是类选择器
          if (!select.indexOf('.')){
              var doms = [],className = select.slice(1);
              if (context.getElementsByClassName){
                  doms = context.getElementsByClassName(className);
              }
              //循环获取到的元素数组
              for (var i = 0; i < doms.length; i++){
                  //如果存在className并且className为传进来的className
                  if(doms[i].className && !doms[i].className.indexOf(className)){
                      this[this.length] = doms[i];
                      this.length++;
                  }
              }
          }
          this.context = context;
          this.select = select;
          console.log(this);
          return this
      }
    };
    A.fn.init.prototype = A.fn;

    //A.扩展方法
    /*
    * arguments[0]目标对象
    * arguments[1,2,....] 扩展对象
    * */
    A.extend = A.fn.extend = function () {
        var i = 1,len = arguments.length,target = arguments[0],j;
        //如果只有一个参数，则为当前对象拓展方法
        if(len === i){
            //设置目标对象为当前对象
            target = this;
            i--;
        }
        for (;i<len;i++){
            //遍历拓展方法中的方法和属性
            for (j in arguments[i]){
                //浅复制，如果对象的方法是引用类型的，无法复制
                target[j] = arguments[i][j];
            }
        }
        return target;
    };
    //
    A.extend({
        camelCase:function (str) {
            return str.replace(/\-(\w)/g,function (match, letter) {
                return letter.toUpperCase()
            })
        }
    });
    A.fn.extend({
        css:function () {
            var arg = arguments,len = arg.length;
            //如果无法获取到元素则返回
            if(this.length < 1){
                return this
            }
            if (len === 1){
                if(typeof arg[0] === 'string'){
                    if(this[0].currentStyle){
                        return arg[0].currentStyle[name]
                    }else {
                        return getComputedStyle(arg[0],false)[name]
                    }
                }else if(typeof arg[0] === 'object'){

                    for (var i in arg[0]){
                        console.log(i)
                        for (var j = this.length - 1; j>=0;j--){
                            this[j].style[A.camelCase(i)] = arg[0][i]
                        }
                    }
                }
            }
            return this;
        }

    });

    window.A = A;
})(window);