 /* 
               功能说明： 
               1. 点击向右（向左）的图标，平滑切换到下（上）一页
               2. 无线循环切换： 第一页的上一页为最后一页，最后一页的下一页是第一页
               3. 每隔3s 自动滑到下一页
               4. 当鼠标进入图片区域时，自动切换停止，当鼠标离开后，又开始自动切换
               5. 切换页面时，下面的原点也同步更新
               6. 点击圆点图标，切换到对应的页面
              */
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