(function() {
    /* 
    1. 给 $ 添加4个工具方法： 
        -  min(a,b) 返回较小的值
        -  max(c,d) 返回较大的值
        -  leftTrim() 去掉字符串左边的空格
        - rightTrim() 去掉字符串右面的空格
         */
    $.extend({
            min: function(a, b) {
                return a < b ? a : b
            },
            max: function(a, b) {
                return a > b ? a : b
            },
            leftTrim: function(str) {
                return str.replace(/^\s+/, '')
            },
            rightTrim: function() {
                return str.replace(/\s+$/, '')
            }
        })
        /*
        2. 给 jQuery 对象 $()添加3个功能方法： 
          -  checkAll() 全选
          - unCheckall() 全不选
          - reverseCheck() 全反选
        */

    $.fn.extend({
        checkAll: function() {
            this.prop('checked', true) // 此处 this 是 jQuery 对象， 其可以直接调用 .prop()

        },
        unCheckall: function() {
            this.prop('checked', false)

        },
        reverseCheck: function() {
            this.each(function() { // each 前面的 this 是 jQuery 对象， each（）里面的是遍历的 DOM 元素对象
                this.checked = !this.checked // 取反
            })

        }
    })

})()