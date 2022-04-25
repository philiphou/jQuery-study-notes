# =========== jQuery 学习=============

1. jQuery 的两把利器： （jQuery 中文手册： https://jquery.cuishifeng.cn/)
    * jQuery 核心函数：
        - 简称 jQuery函数 （ $/jQuery）
        - jQuery 库向外直接暴露的就是 $/jQuery
        - 引入jQuery 库后，直接使用 $ 即可
            -- 当函数用： $(xxx)
            -- 当对象用： $.xxx()
    * jQuery 核心对象： 
        - 简称： jQuery 对象
        - 执行 jQuery/$ 函数，返回的就是 jQuery 核心对象
        - 使用  jQuery 对象： $obj.xxx()
    * 例子1. 
        <script>
            // 要实现功能，点击按钮，弹出提示框提示input 里输入的名字
            // js 原生版实现： 
            window.onload = function() {
                var btn1 = document.getElementById('btn1')
                btn1.onclick = function() {
                    var result = document.getElementById('username')
                    alert(result.value)
                }
            }
        </script>
    <!-- <script type='text/javascript' src='./jQuery.js'></script> // 可以下载jQuery后在当地引入 -->
    <!-- // 也可以CDN 引入 -->
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

                        <script>
                            // 用 jQuery实现： 
                            $(function() {
                                $('#btn2').click(function() {
                                    alert($('#username').val())
                                })
                            })
                        </script>
                    </head>

                    <body>
                        用户名： <input type="text" id="username">
                        <button id='btn1'>js 原生版</button>
                        <button id='btn2'>jQuery 版本</button>
                    </body>
2. $ 用法： 
    - 作为一般函数调用： $(param)
        1). 参数为函数： 当DOM加载完成后，执行此回调函数
        2). 参数作为选择器字符串： 查找所有匹配的标签，并将它们封装成 jQuery 对象
        3). 参数为DOM 对象： 将DOM 对象封装成 jQuery 对象
        4). 参数为 html 标签字符串（用得少）： 创建标签对象并封装成 jQuery 对象
    - 作为对象使用： $.xxx()
        1). $.each() : 隐式遍历数组
        2). $.trim() : 去除两端的空格
    - 例子： 
                    <!-- 需求1. 点击按钮，显示按钮的文本，显示一个新的输入框 -->
                    <!-- 需求2. 遍历输出数组中所有元素值 -->
                    <!-- 需求3. 去掉 " philip " 两端的空格 -->
                <script>
                     // 需求1：          
                    // 第一步： 相当于 window.onload = function(){}; 等待文档加载完毕：$(function(){})相当于 绑定文档加载完成的监听：
                    // 用法1.1 参数为函数： 当DOM加载完成后，执行此回调函数
                    $(function() {
                        // <!-- 需求1. 点击按钮，显示按钮的文本，显示一个新的输入框 -->
                        //用法1.2 参数作为选择器字符串： 查找所有匹配的标签，并将它们封装成 jQuery 对象
                        $('#btn').click(function() {
                            // 将返回的jQuery 对象 $('btn') 作为载体，调用属性方法 click 并传入回调函数作为参数，绑定监听；
                            alert(this.innerHTML); // 此处 this 是发生事件的dom元素<button>，不是 jQuery 对象，
                            alert($(this).html()); // 用法1.3 参数为DOM 对象： 将DOM 对象封装成 jQuery 对象； 读写合一，读就不用传参，写就传
                            $("<input type='text' name = 'msg2 '/><br>").appendTo('div') // 用法: 参数为 html 标签字符串（用得少）： 创建标签对象并封装成 jQuery 对象
                                // 上面 appendTo 是 $ 对象的属性方法，可以传参，内插到DOM 中；
                        })
                    });
                    // <!-- 需求2. 遍历输出数组中所有元素值 -->
                    var arr = [3, 5, 8, 9, 10, 'hello'];
                    $.each(arr, function(index, item) { // 遍历数组，传两个参数，一个是数组 arr, 一个是回调函数， 回调函数里两个参数： 下标和数组元素值；
                            console.log(index + ': ' + item)
                        }) // 输出： 0:3 1:5 2:8 3:9 4:10 5：hello
                    var str = ' philip '
                    console.log('----' + $.trim(str) + '------') // 输出： ----philip------ 没有空格了。
                </script>
            </head>
            <body>
                <div>
                    <button id="btn">测试按钮</button><br>
                </div>
            </body
    - jQuery 核心对象： 
        * 理解： 
            -- 即执行$核心函数返回的对象
            -- $ 对象内部包含的是 dom 元素对象的伪数组（可能只有一个元素）
            -- $ 对象拥有很多有用的属性和方法，让程序员更方便的操作 dom
        * .属性/方法： 
            -- 基本行为： size()/length; [index]/get(index); each(); index();
            -- 属性； CSS; 文档；筛选；事件；效果... 
        * 伪数组： 
            -- 是一个 object 对象
            -- 有 length 属性 和 数值下标属性
            -- 没有真正数组特有的方法：比如 forEach, splice， push 等；

        * 例子： 
                <script>
                        $(function() {
                            // 需求1. 统计一共多少个按钮： 
                            var $buttons = $('button'); // $ 开头的 $buttons 表示变量 $buttons 是一个由jQuery 函数返回的对象，此处对象是个伪数组，包含所有button
                            console.log($buttons.length) // 输出 4  .size() 方法已经弃用
                                // 需求2. 取出第二个 button
                            console.log($buttons[1].innerHTML) // 输出 按钮2
                            console.log($buttons.get(1).innerHTML) // 输出 按钮2
                                // 需求3. 输出所有button 标签的文本：
                            $buttons.each(function(index, domele) {
                                    console.log(index, domele.innerHTML, this)
                                }) // 输出： 0按钮1 <button>按钮1</button> ... 此处 this 就是对应的每个dom 元素
                                // 需求4. 输出按钮3是所有兄弟元素中的第几个
                                // .index() 会得到所在兄弟元素中的下标
                            console.log($('#btn3').index()) //输出4， 因为此处 <br> 也算是一个元素!
                            console.log($buttons instanceof Array) //输出： false 是伪数组
                        })
                                    </script>
                </head>
                <body>
                    <div>
                        <button>按钮1</button><br>
                        <button>按钮2</button><br>
                        <button id='btn3'>按钮3</button><br>
                        <button>按钮4</button><br>
                    </div>
                    <script>
                        // 创建一个伪数组： 
                        var pseudoArr = {};
                        pseudoArr.length = 0; // 添加 length 属性
                        pseudoArr[0] = 'atguigu'
                        pseudoArr.length = 1;
                        pseudoArr[1] = 'hello';
                        pseudoArr.length = 2;
                        for (var i = 0; i < pseudoArr.length; i++) {
                            var obj = pseudoArr[i];
                            console.log(obj)
                        } // 输出: atguigu hello
                        // 伪数组没有 pseduArr.forEach 方法；因为不是真正的数组；
                    </script>
    - 选择器： 参考： https://jquery.cuishifeng.cn/index.html
        -- 选择器本身只是一个由特定语法规则的字符串，没有实质用处
        -- 它的基本语法规则使用的是CSS的选择器语法，并对其进行了扩展
        -- 只有调用 $， 并将选择器作为参数传入才能起作用
        -- $(selector) 作用： 根据选择器规则在整个文档中查找所有匹配的标签的类数组，并封装成 jQuery 对象。
        * 基础选择器： 例子： 
                <body>
                <div id="div1" class="box">div1(class='box')</div>
                <div id="div2" class="box">div2(class='box')</div>
                <div id="div3">div3</div>
                <span class='box'>span(class='box')</span>
                <br>
                <ul>
                    <li>AAAAA</li>
                    <li title="hello">BBBBB(title = 'hello')</li>
                    <li class='box'>CCCCC (class = 'box')</li>
                    <li title='hello'>DDDDD (title='hello')</li>
                </ul>
                <script>
                    // 选择id 为div1的元素： 
                    console.log($('#div1').html()) // 输出： div1(class='box')
                    $('#div1').css({
                            color: 'white',
                            background: 'grey'
                        }) // 给 div1 做渲染
                    // 选择所有的 div 元素： 用 element 选择器
                    $('div').each(function() {
                            console.log(this.innerHTML)
                        }) // 输出： div1(class='box') div2(class='box') div3
                    $('div').css('background', 'red')
                    // 选择所有class 属性为box的元素： 
                    $('.box').each(function() {
                            console.log(this.innerHTML)
                        }) // 输出： span(class='box') CCCCC (class = 'box')
                    // 选择所有的div 和 span  元素 （并集选择器）
                    $('div,span').each(function() {
                        console.log(this.innerHTML)
                    })
                    $('div,span').css('background', 'red')
                    // 选择所有class属性为box 的 div: 用交集选择器
                    $('div.box').css('background', 'green')
                </script>
        * 层次选择器： 
            -- 用来查找子孙后代和兄弟： parent descender; father>child; brother +next; brother ~ brothers;
            -- 例子1： 
                <body>
                    <ul>
                        <li>AAAAA</li>
                        <li class='box'>CCCCC (class = 'box')</li>
                        <li title='hello'><span> BBBBB</span></li>
                        <li title='hello'><span> DDDDD</span></li>
                        <span>EEEEE</span>
                    </ul>
                    <script>
                        // 选中 ul 下所有的span
                        $('ul span').css({
                                background: 'red',
                                color: 'yellow'
                            })
                            // 选中ul下所有的子元素 span
                        $('ul>span').css({
                                background: 'red',
                                color: 'black'
                            })
                            // 选中class 为 box 的下一个li
                        $('.box +li').css('background', 'blue')
                            // 选中ul 下的class 为 box 的元素后的所有兄弟元素
                        $('ul .box ~*').css('background', 'green')
                    </script>

                </body>
        * 过滤选择器
            -- 在原有的选择器匹配的元素中进一步进行过滤的选择器
             -- 例子：
                                <body>
                        <div id="div1" class="box">class 为 box 的 div1 </div>
                        <div id="div2" class="box">class 为 box 的 div2 </div>
                        <div id="div3">div3 </div>
                        <ul>
                            <li>AAAAA</li>
                            <li title='hello'>BBBBB</li>
                            <li class='box'>CCCCCC</li>
                            <li title='hello'>DDDDD</li>
                            <li title='two'>BBBBBB</li>
                            <li style='display:none'>我本来是隐藏的</li>
                        </ul>
                        <script>
                            // 选择第一个 div
                            $('div:first').css({
                                    background: 'red',
                                    color: 'yellow'
                                })
                                // 选择最后一个class 为 box 的元素：
                            $('.box:last').css({
                                    background: 'red',
                                    color: 'black'
                                })
                                // 选择所有 class 属性不为 box 的div
                            $('div:not(.box)').css('background', 'blue') // 没有class 属性也可以
                                // 选中第二个和第三个li
                            $('li:nth-child(2),li:nth-child(3)').css('background', 'green')
                                // 或者: gt(0) 表示 index 大于0， lt(2) 表示 index 小于2： 过滤选择器不是同时执行的， 会先选择大于0 的取出来，然后再选新list里面小于2 的； 
                            $('li:gt(0):lt(2)').css('background', 'orange')
                                // 选择内容为 BBBBB的li
                            $('li:contains("BBBBB")').css('background', 'grey')
                                // 选择隐藏的 li
                            console.log($('li:hidden').length, $('li:hidden')[0].innerHTML) // 输出： 1 '我本来是隐藏的'
                                // 选择有 title 属性的li元素： 
                            $('li[title]').css('color', 'pink')
                                // 选择所有含有属性 title 且属性值是 hello 的 li 
                            $('li[title="hello"]').css('background', 'lime')
                        </script>
                    </body>
                -- 例子2：对表格实行各行变色： 
                   // 将 tbody 里吗的奇数行 tr 北京颜色变成 grey :
                      $('#table>tbody>tr:nth-child(odd)').css('background','#bfa')
        * 表单选择器： :input; :text; :password; :radio; :reset; :hidden; :button; 等， 表单对象属性： :enabled; :disabled; :checked; :selected; 
            -- 例子： 
            // 选择不可用的文本输入框
              $(':text:disabled').css('background','red')
            // 显示选择爱好的个数： 
              console.log($(':checkbox:checked').length)
            // 显示选择的城市的名称： 
                $(':submit').click(function(){
                    console.log($('select>option:selected').html())
                })
            // 显示选择的城市的id： 
                $(':submit').click(function(){
                    console.log($('select>option:selected').vals())
                })
        * 复习： 
            - 了解jQuery： 
                * 是什么？ 
                 -- 一个JS函数库，write less, do more
                 -- 封装简化DOM 操作（CRUD) / Ajax
                * 为什么用它？ why? 
                 -- 强大的选择器：方便快速查找DOM 元素
                 -- 隐式遍历（迭代）： 一次性绑定多个元素的事件监听
                 -- 读写合一： .val(); .html()
                 -- 事件处理
                 -- 链式调用
                 -- DOM 操作（CUD)
                 -- 样式操作
                * 如何使用？
                 -- 引入 jQuery 库： 本地引入 和 CDN 远程引入，远程引入更好一些
                 -- 测试版本和生产版本（压缩版本）
                 -- 使用 jQuery 函数： $/jQuery; 
                 -- 使用 jQuery 对象： $xxx(执行$()得到); 
            - jQuery 的两把利器
                * jQuery 函数： $/jQuery
                 -- jQuery 向外暴露的就是 jQuery 函数，可以直接使用；
                 -- 当成函数使用： 
                    - $(param): 
                       1. param 是函数，相当于 window.onload = function(){};文档加载完成的监听
                       2. param 是选择器字符串： 查找所有匹配的 dom  元素，返回包含所有 dom 元素的 jQuery 对象
                       3. param  是 dom 元素，将dom 元素包装成 jQuery 对象返回： $(this)
                       4. param 是标签字符串： 创建标签 DOM 元素对象，并包装成 jQuery 对象返回
                      
                 -- 当成对象使用： 
                    - .each(obj/arr, fucntion(key,value){}) 隐式遍历
                    - .trim()
                * jQuery 对象
                 -- 包含所有匹配的n个DOM 元素的伪数组对象
                 -- 执行 $(); 返回的就是 jQuery 对象
                 -- 基本行为： 
                    1. length 属性： 得到 DOM 元素的个数
                    2. [index] 得到指定下标对应的 DOM 元素
                    3. each(function(index,domEle){}): 遍历所有dom 元素
                    4. .index()： 得到当前DOM元素在所有兄弟中的下标；
            - 选择器：
                * 是什么？
                 -- 具有特定语法规则（CSS 选择器）的字符串
                 -- 用来查找某个或者某些DOM 元素： $(selector)
                * 分类
                 -- 基本
                    1. #id
                    2. tagName / * 
                    3. .class
                    4. selector1,selector2,selector3  并集
                    5. selector1selector2selector3  交集
                 -- 层次
                    1. 找子孙后代，兄弟元素
                       - selecotr1>selector2: 找子元素
                       - selector1 selector2 : 找所有后代元素
                 -- 过滤
                    * 在原有匹配元素中，筛选出其中一些： 
                        - :first
                        - :last
                        - :eq(index)
                        - :gt(index) / :lt(index)
                        - :not(selector)
                        - :odd / :even
                        - :hidden / :visible
                        - :[attrName] 属性过滤
                        - :[attrName = value] 属性过滤
                 -- 表单
                    - :input
                    - :text
                    - :checkbox
                    - :checked 找的选中的
                    - :radio
            - 属性: 
                * 操作标签的属性，标签体文本
                    - .attr(name,value) / attr(name): 操作非布尔值属性 attr('class',odd)
                    - .prop(name,value) / prop(name) : 操作布尔值属性: prop('checked',ture)
                    - .removeAttr(name) / .removeProp(name)  删除任意属性
                    - .removeClass(name) / addClass(name) : 移除或者添加指定的 class
                    - .val() 读写合一 标签的value
                    - .html() 读写标签体文本
    - jQuery_CSS
        -- 得到第一个p标签的颜色： 
         console.log($('p:first').css('color')) // 输出： rgb(0,0,25)
        -- 设置所有p标签的文本颜色： 
            $('p').css('color'，'yellow')
        -- 设置第二个p 的字体颜色（##ff0011) 背景（blue) 宽（330px) 高（30px)
            $('p:eq(1)').css({
                color: '##ff0011',
                background: 'blue',
                width:330px, // 也可以不加 px
                height: 30px
            })
    - jQuery_offset 和 position
        -- 点击 btn1
           1. 打印 div1 相对于页面左上角的位置: offset 获取匹配元素在当前窗口的相对偏移， 返回的对象包含两个整形属性： top 和 left 只对可见元素有效： 
           $('#btn').click(function(){
               var offset = $('.div1').offset() // offset 是一个对象，作为 .offset() 返回
               console.log(offset.top,offset.left)
           })
           2. 打印 div1 相对于父元素左上角的位置： .position() 方法
              var postion = $(.div1).postion()
             console.log(position.left,position.top)
           3. 给 box1设置offset属性： 
            $('#box1').offset({top:10,left:30})
    - jQuery_scroll: 
        -- 得到 div 或者页面滚动条的坐标： scrollTop() 读取/设置滚动条的Y坐标  
           $('#btn').scrollTop() // 返回数值 
           $('body').scrollTop(300) // 给页面设置滚动位置 300
        -- 效果1： 让页面瞬间滚到顶部： 
            $('#to_top').click(function(){
                $('body').scrollTop(0)
            })
        -- 效果2： 让页面慢慢的滚到顶部： 将一个大的变化分成N个小的变化，每个小的变化瞬间完成，但是肉眼看不到；
           $('#to_top').click(function(){
               // 得到总的滚动距离
               var distance = $('body').scrollTop();
               // 确定总时间
               var time = 500;
               // 确定间隔时间，求出每次动多少
               var timestep = 50;
               var itemDistance = distance/(time/timestep)
               // 反复应用，使用循环定时器不断滚动
                var  interval = setInterval(function(){
                    distance-=itemDistance
                    if(distance<=0>){
                      distance = 0 // 修正以下，到达顶点了
                      // 到达顶部，停止定时器
                      clearInverval(interval)
                    }
                    $('body').scrollTop(distance)
                },timestep)
               if
           })
    - jQuery 元素的尺寸
        -- 内容尺寸： height() ; width()
        -- 内部尺寸： innerHeight(); innerWidth(); 结果是 height + padding; 或者 width+padding
        -- 外部尺寸： 
            1. outerHeight(false/true) : height+padding+border; 如果是 true, 再加上 margin
            1. outerWidth(false/true) : width+padding+border; 如果是 true, 再加上 margin
    - jQuery 对象的过滤： 
        var $lis = $('ul>li') // $lis 是一个 jQuery对象，
        -- 寻找 ul 下 第一个 li 标签
            $lis.first() // 这是返回的一个 jQuery 对象； ： 
            $lis.first().css('background','red') // 这就是 jQuery对象的链式调用
            $lis[0] // 这个返回的是一个 DOM 元素对象， 和上面的不同！
            $lis[0].style.background = 'red'
        -- ul 下 li 标签的最后一个： 
            $lis.last()
        -- ul 下 li 标签的第二个： 
           $lis.equ(1)
        -- ul 下 li 标签中 title 属性为hello 的 li: 
            $lis.filter('[title=hello]')
        -- ul 下 li 标签中 title 属性不是 hello 的 li: 
            $lis.not('[title=hello]')
            或者：   $lis.filter('[title=!hello]')
            如果必须有title: 
                 $lis.filter('[title][title!=hello]') 交集选择器
                 或者 $lis.filter('[title!=hello]').filter('[title]') 链式调用
        -- ul 下 li 标签中有 span 子标签的 li
            $lis.has('span') // 返回的是li的 jQuery对象
    - jQuery 对象的查找： 
        -- 例子： 
                <body>
            <div>
                <ul>
                    <span>span 文本1</span>
                    <li>AAAAA</li>
                    <li title='hello'>BBBBB</li>
                    <li class='box' id="cc">CCCCCC</li>
                    <li title='hello'>DDDDD</li>
                    <li title='two'><span>span 文本2</span></li>
                    <span> span 文本3</span>
                </ul>
                <span> span 文本4</span>
                <li>eeeee</li>
                <li>EEEEE</li>
            </div>
            <script>
                var $ul = $('ul')
                    //寻找 ul标签的第2个span 子标签: .children() 查找子标签
                $ul.children('span:eq(1)').css('background', 'red')
                    // 查找 ul 标签的第2个span后代元素： .find() 查找后代元素
                $ul.find('span:eq(1)').css('background', 'yellow')
                    // ul 标签的父标签： 
                $ul.parent().css('background', 'grey')
                    // id 为 cc 的 li 标签的前面的所有 li 元素
                $('#cc').prevAll('li').css('color', 'yellow')
                    // id 为 cc 的li标签的所有兄弟 li 标签： 
                $('#cc').siblings('li').css('color', 'lime')
            </script>
        </body>
    - 练习： 爱好选择器
            <script>
                var $checkedAllBox = $('#checkedAllBox')
                var $items = $(':checkbox[name=items]')
                    // 点击全选按钮，选中所有爱好： 
                $('#checkedAllBtn').click(function() {
                        $items.prop('checked', true) // 隐式遍历所有 item ,biang将其 checked 属性设置为 true
                    })
                    // 点击全不选按钮，不选中任何爱好： 
                $('#checkedNoBtn').click(function() {
                        $items.prop('checked', false) // 隐式遍历所有 item ,biang将其 checked 属性设置为 false
                    })
                    // 反选： 将爱好选择状态改变
                $('#checkedRevBtn').click(function() {
                        $items.each(function() {
                                this.checked = !this.checked;
                            }) // 自行遍历所有 item ,并将其 checked 属性翻转；
                    })
                    // 设置全选box 状态： 首先统计有没有不选中的 Item
                $checkedAllbox.prop('checked', $items.filter(':not(:checked)').length === 0)
                    // 点击提交按钮，提示所有勾选的爱好： 
                $('#submit').click(function() {
                        $items.filter(':checked').each(function() {
                            this.value
                        })
                    })
                    // 点击全选/全不选： 选中所有爱好或者全部选中： 
                $checkedAllBox.click(function() {
                        $items.prop('checked', this.checked)
                    })
                    // 点击某个爱好时候，必要时更新‘全选、全不选’ 按钮： 
                    // 需要给每一个 Item 隐式遍历装上监听，一旦不选中，全选按钮也不选定
                $items.click(function() {
                    $checkedAllBox.prop('checked', $items.fileter('not(:checked)').length === 0)
                }
                })
            </script>
    - jQuery 文档增删改
         -- 例子： 
                            <body>
                    <ul id="ul1">
                        <li>AAAAA</li>
                        <li title="hello">BBBBB</li>
                        <li class="box">CCCCC</li>
                        <li title="hello">DDDDD</li>
                        <li title="two">EEEEE</li>
                        <li>FFFFF</li>
                    </ul>
                    <br><br>
                    <ul id="ul2">
                        <li>aaaaa</li>
                        <li title="hello">bbbbb</li>
                        <li class="box">ccc</li>
                        <li title="hello">ddd</li>
                        <li title="two">eee</li>
                        <li>fff</li>
                    </ul>
                    <script>
                        // 实现以下需求： 
                        var $ul1 = $('#ul1')
                            // 向 id 为 ul1 的 ul 下 添加一个 span(最后): 内部插入： append(); prepend()
                        $ul1.append('<span> 我是 append 的 span1 </span>')
                        $('<span> 我是 append 的 span2 </span>').appendTo($ul1)
                            //  // 向 id 为 ul1 的 ul 下 添加一个 span(最前)
                        $ul1.prepend('<span> 我是 prepend 的 span1 </span>')
                        $('<span> 我是 prepend 的 span2 </span>').prependTo($ul1)
                            // 在 id 为 ul1 的 ul 下的 li （title 为 hello) 的前面添加 span 外部插入： .before(); .after()
                        $ul1.children('li[title=hello]').before('<span> 我是 li 前面插入的span</span>')
                            // 在 id 为 ul1 的 ul 下的 li （title 为 hello) 的后添加 span 外部插入： .before(); .after()
                        $ul1.children('li[title=hello]').after('<span> 我是li 后面的 span</span>')
                            // 将 id 为 ul2 的 ul 下的 li (title 为 hello) 全部替换为 p : 替换方法： .replaceWith(content)
                        var $ul2 = $('#ul2')
                        $ul2.children('li[title=hello]').replaceWith('<p> replaceAll 替换的 P </p>')
                            // 移除 id 为 ul2 下面所有的 li: empty(); empty() 是掏空，li 还在，只是文本内容空了， remove(expr)： remove 是删除：
                        $ul2.children('li').empty() // li 标签还在，但是文本内容没有了；掏空了心， 皮还在
                        $ul2.children('li').remove() // li 标签也没有了，全部删除了。心和皮都没有了
                            // 也可以用： 
                        $ul2.empty() // 掏空了 ul2 的心， ul2 的标签还在； 里面的子元素都没有了
                    </script>
                </body>
    - jQuery 添加删除记录：（toDo list) : 
        -- 例子： 
                            <script>
                    /* 实现功能： 
            1. 点击 submit 实现添加
            2. 点击 delete 实现 删除
            */
                    // 需求1：添加功能：        
                    $('#addEmpBtn').click(function() {
                            // 收集input表单输入的信息： 
                            var $name = $('#empName')
                            var $emai = $('#empEmail')
                            var $salary = $('#salary')
                            var name = $name.val()
                            var emai = $emai.val()
                            var salary = $salary.val()
                                // 生成统计表的tr 
                                // 创建新的tr 并将input表单 信息插入到对应td;
                                // tr结构内部插入到 tbody  里
                            $('<tr></tr>').append('<td>' + name + '</td>') // 拼串！动态值拼串
                                .append('<td>' + email + '</td>')
                                .append('<td>' + salary + '</td>')
                                .append('<td href="deletename?id="' + Date.now() + '>Delete</td>') //新的拼串模式：  "xyz"'+mn+'
                                .appendTo('#employTable>tbody') // 利用内部插入到后面：此时 整个tr 封装完成 
                                .find('a')
                                .click(clickDelete)  // 继续在新建的 tr 查找后代元素 a(delete) 并为其绑定监听添加回调函数
                                // 或者用事件委托，这样可以省略上面 .find('a').click(clickDelete): 
                                // 利用 table 实现对所有 a 的 click 事件委托： 
                                // $('#employTable').delegate('a','click',clickDelete)
                            // 清除输入数据
                            $name = $('#empName').empty()
                            $emai = $('#empEmail').empty()
                            $salary = $('#salary').empty()
                        })
                        // 需求2： 删除
                        // 对每一行的 delete 绑定监听 （隐式遍历）
                    $('#employTbale a').click(clickDelete)
                    // 创建点击删除tr 的 回调函数
                    function clickDelete() {
                        var $trtoDelete = $(this).parent().parent() // 由 a 找到父亲 td ，再找到父亲 tr
                        var $nametoDelete = $trtoDelete.children(':first').html()
                        if (confirm('确定要删除： ' + $nametoDelete + '的信息吗？')) {
                            $trtoDelete.remove()
                        }
                        return false; // 取消默认行为：
                    })
                </script>
    - jQuery 事件处理： 
        * 页面载入： 
            -- 在页面完成加载时候运行代码，jQuery 可以写成： 
               $(document).ready(function(){...你的代码...})
               也可以简写成： $(function(){})
            -- 相当于: window.onload = function(){}
        * 其他应用例子： 
            -- 实例： 
                   <script>
                // 需求1. 给 .out 绑定监听： 方式1：
                $('.out').click(function() {
                        console.log('click out')
                    })
                    // 或者方式2： 
                $('.out').on('click', function() {
                        console.log(' on 绑定的 click')
                    })
                    // 需求2：给 .inner 绑定鼠标移入和移出的事件监听： 方式1： 
                $('.inner').mouseenter(function() {
                        console.log('mouse enter1')
                    }).mouseleave(function() {
                        console.log('mouse leave1')
                    })
                    // 方式2： .on('事件名'，callback)
                $('.inner').on('mouseenter', function() {
                        console.log('mouse enter2')
                    }).on('mouseleave', function() {
                        console.log('mouse leave2')
                    })
                    // 方式3： .hover(fn1,fn2)
                $('.inner').hover(function() {
                        console.log('mouse enter3')
                    }, function() {
                        console.log('mouse out3')
                    })
                    // 需求3： 点击 btn1 解除 .inner 上的所有事件监听 : .off() 解除所有事件监听
                $('#btn1').click(function() {
                        $('.inner').off();
                    })
                    // 需求4. 点击 btn2, 解除 .inner 上的 mouseenter 事件监听: .off('事件名')
                $('#btn2').click(function() {
                        $('.inner').off('mouseenter')
                    })
                    // 需求4. 点击 btn3, 得到事件坐标： 事件对象event是默认参数，传入回调函数; 事件坐标包括： event.clientX (窗口视图左上角为原点); 
                    //event.pageX (页面左上角为原点); event.offsetX(当前发生事件的元素的左上角为原点); (还有Y)
                $('#btn3').click(function(event) {
                        console.log(event.offsetX, event.clientX, event.pageX)
                        console.log(event.offsetY, event.clientY, event.pageY)
                    })
                    // 需求5.点击 .inner 区域，外部点击监听不响应: 现在点击 inner 区域，由于 .inner 在 div 里， div 的监听事件也响应了
                    // 如果只想要 .inner 区域的事件响应（阻止事件冒泡）， 我们需要： event.stopPropagation() 停止事件冒泡；
                    // 如果是停止事件默认行为，我们需要： event.preventDefault()
                $('.inner').click(function(event) {
                        // 停止事件冒泡：需要传入event 作为参数！
                        event.stopPropagation()
                    })
                    // 需求6. 点击链接，如果当前时间不是偶数，则不跳转
                $('#link').click(function(event) {
                    if (Date.now() % 2 === 0) {
                        console.log(Date.now())
                        event.preventDefault() // 阻止事件的默认行为
                    }
                })
            </script>
    - jQuery 事件面试题：
        * 区别 mouseover 与 mouseenter 两个事件？
            -- mouseover: 在移入子元素时也会触发，对应 mouseout； 相当于进入子元素后就离开了当前的元素，触发了mouseout 事件
             -- mouseenter: 只有在移入当前元素时候才会触发，对应 mouseleave
                hover() 使用的就是 mouseenter() 和 mouseleave()
            -- 如果不存在子元素，两个事件没有区别。
       
    - jQuery 事件委托：
        * 事件委托（委派/代理） 
            - 将多个子元素（li) 的事件监听委托给父辈元素 (ul) 处理
            - 监听回调是加在了父辈元素上
            - 当操作任何一个子元素 (li) 时， 事件会冒泡到父辈元素（ul)
            - 父辈元素不会直接处理事件，而是根据 event.target（发生事件的元素） 得到发生事件的子元素 （li),通过这个子元素回应此事件; 
            - 祖先元素也可以实现委派，只要是委派的子孙后代就可以
        * 事件委托的两方： 
            - parent.delegate(children,eventname,fn)
            - children
        * 使用事件委托的好处： 
            - 添加新的子元素，自动有事件响应绑定
            - 减少事件监听的数量： n --->1
        * jQuery 的事件委派 API
            - 设置事件委托： $(parentSelector).delegate(childrenSelector,eventName,callback)
            - 移除事件委托： $(parentSelector).undelegate(eventName)
        * 例子： 
                    <body>
                <ul>
                    <li>ccdax</li>
                    <li>ccdax</li>
                    <li>ccdax</li>
                    <li>ccdax</li>
                    <li>ccdax</li>
                </ul>
                <button id="btn1">按钮1</button>
                <script>
                    // 需求1. 点击 li, 让其背景颜色变成红色： 
                    $('ul>li').click(function() {
                            this.style.background = 'red'
                        })
                        // 需求2： 点击 #btn1 添加一个 Li:
                    $('#btn1').click(function() {
                            $('<li>点击btn 添加的 li</li>').appendTo('ul')
                        })
                        // 需求3， 给点击btn1 新添加的 li 也加上监听，点击li 后背景颜色变成红色： 事件的委派/事件代理、事件委派
                    $('ul').delegate('li', 'click', function() {
                        console.log(this) // this 在这 是 <li></li>
                        this.style.background = 'green'
                    })
                </script>
            </body>
    - 复习
        * CSS 模块
            - style 样式
                -- 操作元素的 style 样式，位置坐标，尺寸
                -- css(styleName) : 根据样式名，得到对应的值
                -- css(styleName,value): 设置一个样式
                -- css ({多个样式对}) ： 设置多个样式
                -- css() 执行完后返回的依然是 jQuery 对象，可以继续链式调用
            - 位置坐标：
                -- offset()： 读/写当前元素的坐标（原点是页面左上角）
                -- position(): 读当前元素坐标（原点是父元素左上角）
                -- scrollTop() / scrollLeft() : 读/写元素或页面的滚动条坐标
            - 尺寸： 
                -- width()/ height():  得到内容的尺寸 width 和 height
                -- innerWidth(true/false) / innerHeight(true/false) ：width+padding+border+margin(如果是 true)
        * 筛选模块
            - 过滤
                -- 在当前jQuery 对象的内部元素中找出部分匹配元素，并封装成新的 jQuery 对象返回；
                -- fisrt(); last(); eq(); 根据下标过滤
                -- filter('selector'): 根据选择器过滤， 对当前元素提要求
                -- not('selector')
                -- has('selector') 例如： $('h1').has('h2') 就是寻找带有 h2 的 h1 标签； 
            - 查找
                -- 查找 jQuery 对象内部的元素的 子孙/兄弟/父母 元素，并封装成新的jQuery 对象返回
                -- children('selector') 寻找子元素并筛选
                -- find('selecotr') 寻找子孙后代元素并筛选
                -- prevAll('selector') 寻找前面的所有兄弟并筛选
                -- siblings('selector') 所有兄弟元素并筛选
                -- parent() 父元素
        * 文档处理模块
            - 增加
                -- 内部插入： append(); appendTo(); prepend(); prependTo() 插入到后部/前部
                -- 外部插入： before(); after()
            
            - 删除
                -- empty() 掏空内容，自己还在；
                --  remove() 全部删除
            - 更新
                -- replaceWith() 
        * 事件模块
            - 绑定事件
                -- eventName(callback)
                -- on('eventName', callback)
                -- 常用事件： click, mouseenter, mouseleave, mouseover, mouseover, focus/blur, hover(fn1,fn2)
            - 解绑事件
                -- off('eventName')
            - 事件委派
                -- 理解：
                    --将子元素的事件委托给祖先元素或者父辈元素
                    -- 事件监听绑定在祖先元素上
                    --  当事件发生在子元素上时， 由于冒泡规则，事件会冒泡到父辈元素触发事件
                    -- 最终调用事件回调函数的是子元素，利用（event.target) 定位到发生事件的子元素
                -- 好处： 
                    -- 新增的元素没有事件监听
                    -- 减少监听的数量（n-->1)
                -- 编码： 
                    -- 设置委托： parent.delegate(children,eventname,callbackfn) // 回调函数内部的 this 是发生事件的子元素
                    -- 解除委托： parent.undelegate('eventName') 如果不传eventName, 就会解除所有委托
            - 事件坐标
                -- 事件对象： event 是回调函数里的默认形参
                    -- event.offsetX 原点是当前元素左上角
                    -- event.clientX 原点是 窗口左上角
                    -- event.pageX  原点是页面左上角
            - 事件相关
                -- 停止事件冒泡： event.stopPropagation()
                -- 阻止事件默认行为: event.preventDefault()
    - jQuery 轮播图
     -- 轮播图 js
                /* 
                    功能说明： 
                    1. 点击向右（向左）的图标，平滑切换到下（上）一页
                    2. 无线循环切换： 第一页的上一页为最后一页，最后一页的下一页是第一页
                    3. 每隔3s 自动滑到下一页
                    4. 当鼠标进入图片区域时，自动切换停止，当鼠标离开后，又开始自动切换
                    5. 切换页面时，下面的原点也同步更新
                    6. 点击圆点图标，切换到对应的页面
                */
        <script>
        $(function() {
            var $container = $('#container')
            var $list = $('#list')
            var $points = $('#pointsDiv>span')
            var $prev = $("#prev")
            var $next = $("#next")
            var pagewidth = 280;
            var Time = 280; // 翻页的持续时间
            var timestep = 20; // 单元移动的间隔时间；
            var imgCount = $points.length // 有几张图就有几个原点
            var timer;
            var index = 0; // 当前下标
            var target_index = 0;
            var moving = false; // 标识是否正在翻页，默认没有
            // 1. 点击向右（向左）的图标，平滑切换到下（上）一页
            $next.click(function() {
                // 平滑翻到下一页
                nextPage(true)
            })
            $prev.click(function() {
                    // 平滑翻到上一页
                    nextPage(false)
                })
                // 3. 每隔2s中自动翻页到下一页： 定时调用翻页函数
            timer = setInterval(function() { nextPage(true) }, 1000)
                // 4. 当鼠标移入图片区域时候，自动切换停止，当鼠标离开时，自动切换开始： 
            $container.hover(function() {
                    // 鼠标移入，清除定时器
                    clearInterval(timer)
                }, function() {
                    // 鼠标移出，启动定时器
                    timer = setInterval(function() { nextPage(true) }, 1000)
                })
                // 6. 点击圆点图标，切换到对应的图片：
            $points.click(function() {
                    // 计算出目标页的下标： 
                    var target_index = $(this).index() // 得到点击的圆点的index
                        // 只有点击的不是当前页圆点时候
                    if (target_index != index) {
                        nextPage(target_index)
                    }
                })
                // 7. 修复快速点击的 bug， 因为快速点击翻页时候，有可能取到的 .position().left 是正在翻页过程中，取到半截了，修复思路就是在翻页进行时，点击翻页按钮无效
            // 定义平滑翻页方法： 传入参数next，如果为 true, 是下一页，如果为 false 是到下一页， 如果是 index, 则传到 index 页
            function nextPage(next) {
                /*2. 实现平滑翻页： 
                    1.总的偏移量 offset： 2. 总的时间 T，3. timestep
                    4. 每步偏移量: item = offset/(T/timestep)
                    5. 启动循环定时器，不断更新 $list 的 left
                    6. 到达目标处，停止定时器；
                    */
                // 首先判断是否正在翻页， 如果正在翻页，直接结束，
                if (moving) { // 已经正在翻页中
                    return
                }
                moving = true; // 标识正在翻页
                var intervalId;
                var offset = 0;
                // 计算 Offset
                if (typeof next === 'boolean') {
                    offset = next ? -pagewidth : pagewidth
                } else {
                    offset = -(next - index) * pagewidth
                }
                // 计算单元移动偏移量：
                var item_offset = offset / (Time / timestep)
                    // 得到当前list 的 left  值；
                var currentleft = $list.position().left
                    // 计算出目标处的left 值
                var target_left = currentleft + offset
                    // 启动循环定时器不断更新： 
                intervalId = setInterval(function() {
                        // 每循环一次就更新一次 currentleft 的值；
                        currentleft += item_offset
                        if (Math.round(currentleft, 0) === Math.round(target_left, 0)) {
                            currentleft = target_left;
                            // 清除定时器
                            clearInterval(intervalId)
                                // 翻页结束： 
                            moving = false;
                            // 如果到达了最右面的图片：（右1.jpg),要瞬间转到最左边的第二张（左1.jpg）
                            if (Math.round(currentleft, 0) === -(imgCount + 1) * pagewidth) {
                                console.log(currentleft)
                                currentleft = -pagewidth;
                                console.log(currentleft)
                            } else if (Math.round(currentleft, 0) === 0) {
                                // 如果到达了最左面的图片：（左5.jpg),要瞬间转到最右边的第二张（右5.jpg）
                                currentleft = -imgCount * pagewidth
                            }
                        }
                        // 设置left
                        $list.css('left', currentleft)
                    }, timestep)
                    // 5. 切换页面时候，圆点同步更新： 
                updatePoints(next);
            }
            function updatePoints(next) {
                // 计算目标圆点的下标，index， 
                if (typeof next === 'boolean') {
                    if (next) {
                        target_index = target_index + 1 // 范围 [0,imgCount-1]
                        if (target_index > (imgCount - 1)) {
                            target_index = 0 // 变成第一个圆点
                        }
                        console.log('target index: ' + target_index)
                    } else {
                        target_index = target_index - 1 // 范围 [0,imgCount-1]
                        if (target_index < 0) { // -1 圆点
                            target_index = imgCount - 1 // 变成最后一个圆点
                        }
                        console.log('target index: ' + target_index)
                    }
                } else {
                    target_index = next
                }
                // 更新圆点颜色，将当前index 的 <span> 的 .on class 移除
                $points.eq(index).removeClass('on')
                    //$points[index].className = ''
                // 给目标圆点<span> 添加 .on calss 属性
                $points.eq(target_index).addClass('on')
                    //$points[target_index].className = 'on'
                    // 将 index  更新为 target Index
                index = target_index
                console.log('current index: ' + index)
            }
        })
         </script>
    -- 轮播图 html
                <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script type="text/javascript" src="./lunbotu.js"></script>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        text-decoration: none;
                    }
                                        body {
                        padding: 20px;
                    }
                                        #container {
                        width: 280px;
                        height: 420px;
                        overflow: hidden;
                        position: relative;
                        margin: 0 auto;
                    }
                                        #list {
                        width: 1960px;
                        height: 420px;
                        position: absolute;
                        z-index: 1;
                        left: 0px;
                    }
                                        #list img {
                        width: 280px;
                        height: 420px;
                        float: left;
                    }
                                        #pointsDiv {
                        position: absolute;
                        height: 10px;
                        width: 100px;
                        z-index: 2;
                        bottom: 20px;
                        left: 100px;
                    }
                    /*所有圆点的 span*/
                                        #pointsDiv span {
                        cursor: pointer;
                        float: left;
                        border: 1px solid #fff;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background: #333;
                        margin-right: 5px;
                    }
                    /* 第一个 span  on */
                                        #pointsDiv .on {
                        background: orangered;
                    }
                    /* 切换图标<a> */
                                        .arrow {
                        cursor: pointer;
                        display: none;
                        line-height: 22px;
                        text-align: center;
                        font-size: 10px;
                        font-weight: bold;
                        width: 20px;
                        height: 20px;
                        position: absolute;
                        z-index: 2;
                        top: 190px;
                        background-color: grey;
                        color: greenyellow;
                    }
                    /* 鼠标移动到切换图标上时候 */
                                        .arrow:hover {
                        background-color: rgba(0, 0, 0, 0.7);
                    }
                    /* 鼠标移动到整个div 区域时候 */
                                        #container:hover .arrow {
                        display: block;
                    }
                    /* 上一个切换图标的左外边距 */
                                        #prev {
                        left: 20px;
                    }
                    /* 下一个切换图标的右外边距 */
                                        #next {
                        right: 20px;
                    }
                </style>
            </head>
            <body>
                <div id="container">
                    <div id="list" style="left:-280px">
                        <img src="./image/5.webp" alt="'5">
                        <img src="./image/1.webp" alt="'1">
                        <img src="./image/2.webp" alt="'2">
                        <img src="./image/3.webp" alt="'3">
                        <img src="./image/4.webp" alt="'4">
                        <img src="./image/5.webp" alt="'5">
                        <img src="./image/1.webp" alt="'1">
                    </div>
                    <div id="pointsDiv">
                        <span index="1" class="on"></span>
                        <span index="2"></span>
                        <span index="3"></span>
                        <span index="4"></span>
                        <span index="5"></span>
                    </div>
                    <a href="javascript:;" id="prev" class="arrow">&#9664</a>
                    <a href="javascript:;" id="next" class="arrow">&#9654</a>
                </div>
                <!--  /* 
                功能说明： 
                1. 点击向右（向左）的图标，平滑切换到下（上）一页
                2. 无线循环切换： 第一页的上一页为最后一页，最后一页的下一页是第一页
                3. 每隔3s 自动滑到下一页
                4. 当鼠标进入图片区域时，自动切换停止，当鼠标离开后，又开始自动切换
                5. 切换页面时，下面的原点也同步更新
                6. 点击圆点图标，切换到对应的页面
                */ -->

            </body>

            </html>
    -- jQuery 内置动画： 
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    text-decoration: none;
                }
                                #container {
                    background: yellowgreen;
                    width: 200px;
                    height: 200px;
                    margin: 20px auto;
                }
                                #buttons {
                    margin: 10px 330px;
                }
                                button {
                    display: flex;
                    margin: 10px;
                }
            </style>
            <script>
                $(function() {
                    var $div = $('#container')
                    var $btn1 = $('#btn1');
                    var $btn2 = $('#btn2');
                    var $btn3 = $('#btn3');
                    var $btn4 = $('#btn4');
                    var $btn5 = $('#btn5');
                    var $btn6 = $('#btn6');
                    var $btn7 = $('#btn7');
                    var $btn8 = $('#btn8');
                    var $btn9 = $('#btn9');
                    var $btn10 = $('#btn10');
                    $btn1.click(function() {
                        console.log('hello')
                        $div.fadeOut(1000)
                            // 改变的是 style 的 opacity 值 1到0 逐渐降低，然后到 display 样式，变成 none, 实现隐藏div显示； 参数是speed, 可以传 字符串 ： 'slow', 'normal', or 'fast'
                    })
                    $btn2.click(function() {
                        // 慢慢淡入： 
                        $div.fadeIn('3000', function() {
                            alert('动画淡入完成')
                        })
                    })
                    $btn3.click(function() {
                            $div.fadeToggle()
                        })
                        // 滑动动画是不断改变元素的高度实现；
                    $btn4.click(function() {
                        $div.slideUp(3000) // 向上收缩收起来
                    })
                    $btn5.click(function() {
                        $div.slideDown() // 向下展开铺开来
                    })
                    $btn6.click(function() {
                        $div.slideToggle(2500) // 
                    })
                    $btn7.click(function() {
                        console.log('hello')
                        $div.show() // 
                    })
                    $btn8.click(function() {
                        $div.show(2500) // 
                    })
                    $btn9.click(function() {
                        $div.hide(2500) // 
                    })
                    $btn10.click(function() {
                        $div.toggle(2000) // 
                    })
                })
            </script>
        </head>
        <body>
            <div id="container">
            </div>
            <div id="buttons">
                <button id="btn1">btn1慢慢淡出</button>
                <button id="btn2">btn2慢慢淡入</button>
                <button id="btn3">btn3淡出/淡入</button>
                <button id="btn4">btn4慢慢收缩</button>
                <button id="btn5">btn5慢慢展开</button>
                <button id="btn6">btn6收缩/展开切换</button>
                <button id="btn7">btn7立即显示</button>
                <button id="btn8">btn8慢慢显示</button>
                <button id="btn9">btn9慢慢隐藏</button>
                <button id="btn10">btn10切换显示隐藏</button>
            </div>
        </body>
        </html>
    -- 自定义动画： 
                    <script>
                    $(function() {
                        var $div = $('#container')
                        var $btn1 = $('#btn1');
                        var $btn2 = $('#btn2');
                        var $btn3 = $('#btn3');
                        var $btn4 = $('#btn4');
                        $btn1.click(function() {
                            // 设置大小
                            // 调用属性方法： .animate() 参数传style 对象，不用加px 单位，jQuery 不需要写 px, 如果加单位要写成字符串形式 '200px'
                            $div.animate({
                                    height: 200,
                                    width: 200,
                                }, 2000) // 高宽同时增大到200
                                // 如果想先变宽，再变高： 
                            $div.animate({
                                width: 200
                            }, 1000).animate({
                                height: 200
                            }, 1000)
                        })
                        $btn2.click(function() {
                            // 移动到指定位置： {left, top} 位置作为参数：
                            // 移动到{500,100}
                            $div.animate({
                                left: 500,
                                top: 100
                            }, 2000)
                        })
                        $btn3.click(function() {
                            // 移动指定距离： {left,top}
                            // 指定移动距离：{left:100, top:50}
                            $div.animate({
                                left: '+=100',
                                top: '+=50'
                            })
                        })
                        $btn4.click(function() {
                            // 停止动画
                            $div.stop()
                        })
                    })
                </script>
            </head>
            <body>
                <div id="container">
                    爱在西元前，学在尚硅谷
                </div>
                <div id="buttons">
                    <button id="btn1">btn1逐渐扩大</button>
                    <button id="btn2">btn2移动到指定位置</button>
                    <button id="btn3">btn3移动到指定距离</button>
                    <button id="btn4">btn4停止动画</button>
                </div>
            </body>
            </html>
        -- 下拉菜单效果实现： 
        $('#navigation>ul>li:has(ul)').hover(function(){
            // 下拉菜单： 
            $(this).children('ul').stop().slideDown()
            },function(){
            // 收起菜单：
             $(this).children('ul').stop().slideUp()
        })
    -- 多库共存：
        -- 问题： 如果有两个库都有 $ , 就存在冲突
        -- 解决： jQuery 库可以释放 $ 的使用权，让另一个库可以正常使用，此时 jQuery 库只能使用 jQuery 了
        -- API: jQuery.noConflict()
    -- window.onload = function(){} 与 $(function(){}) 或者： $(document).ready(function(){}) 区别：
        -- 例子： 
          console.log('直接'，$('#logo').width()); 
          window.onload = function() {
               console.log('onload'，$('#logo').width()); 
          }
          $(function(){
               console.log('ready jQuery'，$('#logo').width()); 
          })
         执行结果是： 
         直接 0 
         ready jQuery 0
         onload 200 
        -- 执行结果顺序说明 只有 onload 得到了宽度结果，说明图片加载完成才调用的 Onload 里的回调函数；
        也可以： 利用on 绑定事件监听，事件是 'onload' 事件， 然后调用回调函数
        $('#logo').on('load',function(){
            console.log('img load',$(this).width())
        })
        这次执行顺序是： 
        直接0
        ready 0
        img load 200
        onload 200
        // 执行结果顺序说明， window.onload 是要等到所有东西包括图片加载完成之后才会执行；
         总结： 
         1. windo.onload 是包括页面的图片加载完成后才会回调（晚）， 只能有一个监听回调
         2. $(document).ready(): 等同于$(function(){}), 是页面加载完成就回调不管图片，执行回调比window.onload的早，可以有多个监听回调；
    -- jQuery 插件扩展
        -- 给 $ 添加4个工具方法： 
            * .min(a,b) 返回较小的值：
             调用方法： $.min()

             
        -- 给 jQuery 对象添加功能方法： 
            * .checkAll() : 全选
             调用方法： $().checkAll()
        -- 例子： 
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
            -- 使用： 
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                    <script src='./myjQuery_plugin.js'></script>
                    <script>
                        console.log($.min(3, 5), $.max(3, 5))
                        var str = ' atguigu'
                        console.log('----' + $.leftTrim(str))
                        var items = $(':checkedbox[name=items]')
                        $('#checkallbox').click(function(){
                            $items.checkAll()
                        })
                         $('#uncheckallbox').click(function(){
                            $items.unCheckall()
                        })
                          $('#reversecheckbox').click(function(){
                            $items.reverseCheck()
                        })
                    </script>
    -- jQuery 插件： 参考： https://plugins.jquery.com/
        -- jQuery -validation 表单验证插件，参考“菜鸟教程”学习
            --例子： 对表单 #myform 进行验证；叫做声明式验证，只需要声明验证规则，可以自定义验证错误信息
            $('#myForm').validate({
                messages:{
                    username:{
                        reuired:'the username is required',
                        minlength:'the minimum length is 6'
                            },
                    pwd1:{
                        required: '密码是必须的'，
                        minlength: '密码最少6位'，
                        maxlength: ' 密码最多8位'
                    }
                    pwd2:{
                        equalto:'必须与密码相同'
                }
            }) //传一个message对象， 对象是自定义错误提示; pwd1,pwd2,username 等都是表单的 name 值
        -- jQuery UI: 参考网站： https://plugins.jquery.com/ userInterface: 用户界面
            -- 例子： 菜单收缩展开效果等；
        -- laydate (日期选择框)
        -- 显示隐藏二级菜单： 
        functon hoverSubMenu(){
            $('#category_items>div').hover(function(){$(this).children(':last').show()},function(){$(this).children(':last').hide()})
        }
        -- 搜索框： 获取焦点 有匹配元素时候显示，失去焦点(keyup)时隐藏 事件监听： keyup/focus blur, 可以用 on 方法一次性绑定多个事件监听，事件用空格隔开，此处 keyup 和 focus 事件作用相同，都是获取焦点： blur 是失去焦点事件监听， 可以链式调用
          function search(){
              $('#txtSearch').on('keyup focus' (function(){
                  // 如果输入框有文本，才显示列表：
                  var txt = this.value.trim() // 得到文本，空格清除； DOM 得到的 value字符串本事就有 trim() 方法去掉两边空格；也可以写成: $.trim(this.value) jQuery 函数属性方法： 也可以; $(this).val().trim()
                  if(txt){
                      $('#search_helper').show()
                  }
              })
              .blur(function(){
                  // 失去焦点，隐藏列表： 
                    $('#search_helper').hide()

              })
          }
          -- 分享隐藏或展开： 
            function share(){
                var isOpen = false // 定义一个布尔值，表示是否展开或关闭；标识当前状态 初始是关闭
                var $shareMore = $('#shareMore')
                var $parent = $shareMore.parent()
                // 找到前面的所有兄弟的页面最后两个兄弟元素;  找前面的兄弟 往上找，index 是从下往上依次为 0,1,2,3...
                var $ as = $shareMore.prevAll('a:lt(2)') 
                var $b = $shareMore.children()
                $('#sharemore').click(function(){
                    if(isOpen){
                        //去关闭：
                         $shareMore.css('width',155)
                         $as.hide()
                         $b.removeClass('backward')
                    }else{
                        // 去打开
                        $shareMore.css('width',200)
                         $as.show()
                         $b.addClass('backward')
                    }
                    isOpen = !isOpen
                })
            }
            -- 鼠标移入移出实现地址切换： 
                function address(){
                    var $select = $('#store_select')
                    $select.hover(function(){
                        $('this').children(':gt(0)').show()
                    },function(){
                          $('this').children(':gt(0)').hide()
                    })
                }.children(':last').click(function(){
                      $select.children(':gt(0)').hide()
                })
              function clickTab(){
                  var $stores = $('#store_tabs>li')
                  $stores.click(function(){
                      $stores.removeClass('hover') // 或者： $stores.attr('class')
                      this.className = 'hover' // 或者： $(this).addClass('hover')
                  })
              }
            -- 鼠标移入移出切换显示迷你购物车
             function hoverMinicart () {
                 $('#minicart').hoverr(function(){
                     this.className= 'minicart'
                     $(this).children(':last').show()
                 },function(){
                         this.className= ''
                           $(this).children(':last').hide()
                 })
             }
            -- 点击切换产品选项
              function clickProductTabs(){
                  var $lis = $('#product_detail>ul>li')
                  var $contents = $('#product_detail>div:gt(0)')
                  $lis.click(function(){
                     var index = $(this).index()
                      $lis.removeClass('current')
                      this.className = 'current'
                    $contents.hide()
                     $contents.eq(index).show() // 用jQuery 对象方法查找下标对象的 jQuery 对象，原生的： $contents[index].style.display = 'block' 找到的是 DOM
                    })

              }
            -- 移动小图片： 
                function moveMiniImg(){
                   var $as =  $('#preview>h1>a')
                   var $backward = $as.first()
                   var $forward = $as.last()
                   var $ul = $('#icon_list')
                   var ShowCount = 5
                   var imgCount = $ul.children('li').length
                   var moveCount = 0 // 移动次数，点击向右为正，点击向左为负数，每次移动宽度为 一个li 的宽度
                   var liwidth = $ul.children(':first').width()
                     // 初始化更新： 
                    if(imgCount>ShowCount){
                        $forward.attr('class', 'forward') // 更改class 属性值 或者： $forward[0].className = 'forward'
                    }
                    // 给向右按钮绑定事件监听： 
                   $forward.click(function(){
                       // 判断是否可以移动：如果不需要直接结束
                       if(moveCount === imgCount -showCount){
                           return
                       }
                       moveCount++
                       $backward.attr('class','backward')
                       if(moveCount===imgCount-showCount){
                           $forward.attr('class','forward_disabled')
                       }
                       })
                       $ul.css({
                           left: -moveCount*liwidth
                       })
                }
                // 给向左按钮绑定监听： 
                   $backward.click(function(){
                       // 判断是否可以移动：如果不需要直接结束
                       if(moveCount ===0){
                           return
                       }
                       moveCount--
                       $forward.attr('class','forward')
                       if(moveCount===0){
                           $backward.attr('class','backward_disabled')
                       }
                       })
                       $ul.css({
                           left: -moveCount*liwidth
                       })
                }
            -- 切换小图时候，中图随之更新： 
             functio updateMedimg (){
                 var $lis = $('#icon_list>li')
                 $lis.hover(function(){
                     var $img = $(this).children()
                     this.children()[0].className = 'hoveredThumb' 
                     // 或者： $(this).children().attr('class','hoveredThumb') 
                     // 显示对应的中图： 
                     var src = $img.attr('str').replace('.jpg','-m.jpg') //读取 src 属性值； 读写合一 然后稍作更改得到中图src的值；
                     $('#medimImg').attr('src',src)
                      },function(){
                        $img.removeClass('hoveredThumb') 
                 }
             }
            
            -- 图片局部放大效果： 弄一个外部容器，中图中鼠标移动截取部分图片，然后放在外面的大容器中: 大容器中放大图，overflow 部分不显示，中图中有鼠标移动框选中图片某一部分；两个div 移动时 尺寸按照整个图片的比例同时位移
            鼠标移入移出 hover 事件加载在 medium img 中，大图的 src 就是把小图的 -m.jpg 替换成： -l.jpg, 大的容器只是大图的四分之一size；
             function bigImg(){
                 var $meidumImg = $('#mediumImg')
                 var $mask = $('#mask') // 跟随鼠标在中图上移动的小框
                 var $maskTop = $('#maskTop') // 覆盖在中图上的透明框，小框在上面移动，加入hover 监听
                 var $largeImgContainer = $('#largeImgContainer')
                 var $loading = $('#loading')
                 var $largeImg = $('largeImg')
                 var maskWidth =  $mask.width()
                 var maskHeight =  $mask.Height()
                 var maskTopWidth = $maskTop.width()
                 var maskTopHeight = $maskTop.height()
           
                 $maskTop.hover(function(){
                     $mask.show() // 移入鼠标，显示小框
                     // 动态加载对应的大图： 
                      var src = $('#mediumImg').attr('src').replace('-m','-l') // 得到中图的 src 属性值,并通过replace 得到大图的 src
                      // 将找到的src 设置到大图中去： 
                      $largeImg.attr('src',src)
                      // 绑定大图加载完成的监听
                      $largeImg.on('load',function(){
                          // 得到大图尺寸
                          var largeImgWidth = $('#largeImg').width()
                          var largeImgHeight = $('#largeImg').height()
                       
                          // 给大图的 largeContainer 设置尺寸： 
                          $largeContainer.css({
                              width:largeImgWidth/2,
                              height:largeImgHeight/2
                          })
                          // 显示大图： 
                             $largeImg.show()
                        // 隐藏 loading: 
                        $loading.hide()
                           // 监视鼠标移动，绑定 mousemove 监听： 
                     $maskTop.mousemove(function(event){
                           // 移动鼠标，让小框跟随移动： 计算出小框的坐标值，根据event target 设定： （注意此时要绑定 mousemove 事件监听，获取实时坐标）
                           var left =0
                           var top =0
                           // 给小框重新定位： offsetX 是指原点是发生事件的元素的左上角：
                           left = event.offsetX-0.5*maskWidth
                           top = event.offsetY-0.5*maskHeight
                           // left 值得区间：[0,mastTopWidth-maskWidth]
                           // top 值得区间：[0,mastTopHeight-maskHeight]
                           if(left<0>){
                               left=0
                           }else if (left>(mastTopWidth-maskWidth)){
                               left = mastTopWidth-maskWidth
                           }
                           if(top<0>){
                               top = 0
                           } else if (top >mastTopHeight-maskHeight){
                               top = mastTopHeight-maskHeight
                           }
                           left = -left*($largeImg.width()/$mediumImg.width()) // 按比例放大尺寸
                           height = -height*($largeImg.height()/$mediumImg.height()) // 按比例放大尺寸 大图的宽高尺寸比例应该和中图的宽高比列一致，这样可以等比放大！
                     $mask.css({
                         left:left
                         top: top
                     });
                     // 开始移动大图： 
                    $largeImg.css({
                        left: left,
                        top: top
                    })
                         })
                      })
                     ，function(){
                     $mask.hide();
                     $largeContainer.hide()
                     $largeImg.hide()
                 })
             }






               





