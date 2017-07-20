/**
 * Created by 95203 on 2017/7/19.
 */
(function (window) {
    var miniQ = function (select, context) {
        return new miniQ.fn.init(select, context)
    };
    miniQ.fn = miniQ.property = {
        //修正constructor指向
        constructor: miniQ,
        init: function (select, context) {
            //设置上下文默认值
            context = context || document;
            //初始化对象长度为0
            this.length = 0;
            //如果为id选择器
            if (!select.indexOf('#')) {
                this[0] = document.getElementById(select.slice(1));
                this.length = 1;
            }
            //如果是类选择器
            if (!select.indexOf('.')) {
                var doms = [], className = select.slice(1);
                if (context.getElementsByClassName) {
                    doms = context.getElementsByClassName(className);
                }
                //循环获取到的元素数组
                for (var i = 0; i < doms.length; i++) {
                    //如果存在className并且className为传进来的className
                    if (doms[i].className && !doms[i].className.indexOf(className)) {
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
    miniQ.fn.init.prototype = miniQ.fn;

    //miniQ.扩展方法
    /*
     * arguments[0]目标对象
     * arguments[1,2,....] 扩展对象
     * */
    miniQ.extend = miniQ.fn.extend = function () {
        var i = 1, len = arguments.length, target = arguments[0], j;
        //如果只有一个参数，则为当前对象拓展方法
        if (len === i) {
            //设置目标对象为当前对象
            target = this;
            i--;
        }
        for (; i < len; i++) {
            //遍历拓展方法中的方法和属性
            for (j in arguments[i]) {
                //浅复制，如果对象的方法是引用类型的，无法复制
                target[j] = arguments[i][j];
            }
        }
        return target;
    };
    //
    miniQ.extend({
        //判断是不是数组
        isArray: Array.isArray || function (obj) {
            return typeof obj === 'array';
        },
        //转化驼峰 a-bcd => aBcd
        camelCase: function (str) {
            return str.replace(/\-(\w)/g, function (match, letter) {
                return letter.toUpperCase()
            })
        },
        //简化for循环
        for:function (arr,callback) {
            var i = 0,len = arr.length;
            for(;i<len;i++){
                callback && callback(arr[i],i,arr)
            }
        },
        forIn:function (obj, callback) {
            var _val;
            for ( _val in obj){
                callback && callback(_val,obj[_val],obj)
            }
        }
    });
    miniQ.fn.extend({
        css: function () {
            var arg = arguments, len = arg.length;
            //如果无法获取到元素则返回
            if (this.length < 1) {
                return this
            }
            //如果只有一个参数，
            if (len === 1) {
                //检查第一个参数是不是字符串，代表获取css
                if (typeof arg[0] === 'string') {
                    //能力检查
                    if (this[0].currentStyle) {
                        return this[0].currentStyle[arg[0]]
                    } else {
                        return getComputedStyle(this[0], false)[arg[0]]
                    }
                } else if (typeof arg[0] === 'object') {//如果是一个对象则是设置css
                    //循环对象里面所有值
                    for (var i in arg[0]) {
                        //循环为所有的元素设置style
                        for (var j = this.length - 1; j >= 0; j--) {
                            this[j].style[miniQ.camelCase(i)] = arg[0][i]
                        }
                    }
                }
                //如果有两个参数，
            } else if (len === 2) {
                for (var i = 0; i < this.length; i++) {
                    this[i].style[miniQ.camelCase(arg[0])] = arg[1]
                }
            }
            return this;
        }
    });

    window.miniQ = miniQ;
})(window);