<template>
  <section class="timeline">
            <ol>

                <li>
                    <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 响应式设计，在屏幕宽度低于 768px 的情况下，会变成垂直的时间轴。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 支持左滑右滑操作，利用 Hammer.js 实现。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 支持左右方向键，左方向键的键码为 37， 而右方向键为 39。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 底下不用看了，因为都是复制的。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 这是一个水平时间轴，它有有很多优点，容我一一道来。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 响应式设计，在屏幕宽度低于 768px 的情况下，会变成垂直的时间轴。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 支持左滑右滑操作，利用 Hammer.js 实现。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 支持左右方向键，左方向键的键码为 37， 而右方向键为 39。
                    </div>
                </li>
                <li>
                    <div>
                    <time>2017</time> 底下不用看了，因为都是复制的。
                    </div>
                </li>

                <li></li>
            </ol>
            <div class="arrows">
                <button class="arrow arrow-pre disabled">
                    <img src="pre.svg" alt="pre timeline arrow">
                </button>

                <button class="arrow arrow-next">
                    <img src="next.svg" alt="next timeline arrow">
                </button>
            </div>
        </section>
</template>
<script>

import "@/assets/CompanyDetail/hammer.min.js";
import { scrypt } from 'crypto';
import { Script } from 'vm';
// import'@/assets/CompanyDetail/timeline.js'


export default {

  mounted() {
    const timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline ol div"),
      arrows = document.querySelectorAll(".arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow-pre"),
      arrowNext = document.querySelector(".timeline .arrows .arrow-next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline ol li:last-child"),
      xScrolling = 280,
      disabledClass = "disabled";

    window.addEventListener("load", init, false);
    function init() {
      setEqualHeight(elH);
      arrowPrev.disabled = true;
      animateTl(xScrolling, arrows, timeline);
      setSwipeFn(timeline, arrowPrev, arrowNext);
      setKeyboardFn(arrowPrev, arrowNext);
    }

    function setEqualHeight(el) {
      var largestHeight = (el[0] && el[0].offsetHeight) || 0,
        length = el.length;

      for (var i = 1; i < length; i++) {
        if (el[i].offsetHeight > largestHeight) {
          largestHeight = el[i].offsetHeight;
        }
      }

      for (var i = 0; i < length; i++) {
        el[i].style.height = largestHeight + "px";
      }
    }

    function animateTl(scrolling, el, tl) {
      for (var i = 0; i < el.length; i++) {
        var count = 0;
        el[i].addEventListener(
          "click",
          function() {
            if (!arrowPrev.disabled) {
              arrowPrev.disabled = true;
            }

            if (!arrowNext.disabled) {
              arrowNext.disabled = true;
            }

            var sign = this.classList.contains("arrow-pre") ? "" : "-";

            if (count === 0) {
              tl.style.transform = "translateX( -" + scrolling + "px )";
            } else {
              var tlStyle = getComputedStyle(tl),
                values =
                  parseInt(
                    tlStyle.getPropertyValue("transform").split(",")[4]
                  ) + parseInt(sign + scrolling);
              tl.style.transform = "translateX(" + values + "px )";
            }
            count += 1;

            setTimeout(() => {
              isElementInViewport(firstItem)
                ? setBtnState(arrowPrev)
                : setBtnState(arrowPrev, false);
              isElementInViewport(lastItem)
                ? setBtnState(arrowNext)
                : setBtnState(arrowNext, false);
            }, 1100);
          },
          false
        );
      }
    }

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    }

    function setSwipeFn(tl, prev, next) {
      const hammer = new Hammer(tl);
      hammer.on("swipeleft", () => {
        next.click();
      });
      hammer.on("swiperight", () => {
        prev.click();
      });
    }

    function setKeyboardFn(prev, next) {
      document.addEventListener("keydown", e => {
        if (e.which === 37 || e.which === 39) {
          var timelineOffsetTop = timeline.offsetTop,
            y = window.pageYOffset;

          if (timelineOffsetTop !== y) {
            window.scrollTo(0, timelineOffsetTop);
          }

          if (e.which === 37) {
            prev.click();
          }

          if (e.which === 39) {
            next.click();
          }
        }
      });
    }
  },
  }
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*box-sizing:content-box是默认值。
意思是：边框border和内边距padding的值是包含在被作用的标签的width和height之内的。
也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，
内容区的实际宽度会是width减去(border + padding)的计算值。
但是，要注意它不包括外边距margin的值在内。
大多数情况下这使得我们更容易的去设定一个元素的宽高。
*/

/*“::selection”用来改变在浏览器中选中文本后的设置。*/
/*如，被选中后的背景色为红色，被选中后的字体颜色为蓝色*/
::selection {
  background-color: red;
  color: blue;
}

/*white-space：它的属性用来设置如何处理元素内的空白。
默认值为，nornmal，空白会被浏览器给忽略。
pre，空白会被浏览器保留，同<pre>标签的作用类似。
nowrap，文本不会换行，在同一行上继续显示，直到遇到换行符。
pre-wrap，保留空白，但是 正常地进行换行。*/

/*overflow-x，用来设置，如果元素中内容的左右边缘，溢出元素的内容区域的话怎么办？
auto：如果溢出框，则应该提供滚动机制。
hidden：    裁剪内容 - 不提供滚动机制。
scroll：裁剪内容 - 提供滚动机制。*/
.timeline {
  background-color: #456990 !important;
  line-height:1.5;
white-space: nowrap;
overflow-x: hidden;
}
.timeline ol {
font-size: 0;
padding: 250px 0;
width: 100vw;
transition: all 1s;
}
.timeline ol li {
position: relative;
display: inline-block;
width: 160px;
height: 3px;
list-style-type: none;
background-color: #fff;
}
.timeline ol li:last-child {
width: 280px;
}
.timeline ol li:not(:first-child) {
margin-left: 14px;
}
.timeline ol li:not(:last-child)::after {
content: "";
position: absolute;
top: 50%;
transform: translateY(-50%);
left: calc(101%);
width: 12px;
height: 12px;
border-radius: 50%;
background-color: #F45B69;
}
.timeline ol li div {
position: absolute;
left: calc(107%);
width: 280px;
padding: 15px;
font-size: 1rem;
white-space: normal;
color: #333;
background-color: #fff;
}
.timeline ol li div::before {
content: '';
position: absolute;
top: 100%;
left: 0;
width: 0;
height: 0;
border-style: solid;
}
.timeline ol li:nth-child(odd) div {
top: -16px;
transform: translateY(-100%);
}
.timeline ol li:nth-child(odd) div::before {
top: 100%;
border-width: 8px 8px 0 0 ;
border-color: #fff transparent transparent transparent;
}
.timeline ol li:nth-child(even) div {
top: 16px;
}
.timeline ol li:nth-child(even) div::before {
top: -8px;
border-width: 0 8px 8px 0;
border-color: transparent transparent #fff transparent;
}
.timeline div.arrows {
display: flex;
justify-content: center;
margin-bottom: 20px;
}
.timeline div.arrows button {
border: none;
background-color: #F45B69;
width: 48px;
height: 48px;
border-radius: 50%;
outline: none;
cursor: pointer;
}
.timeline div.arrows button.arrow-pre {
margin-right: 20px;
}
.timeline div.arrows button.disabled {
opacity: .5;
}
@media screen and (max-width: 768px) {
.timeline ol {
  width: auto;
  padding: 0;
  transform: 0 !important;
}
.timeline ol li {
  width: auto;
  height: auto;
  display: block;
  background-color: transparent;
}
.timeline ol li:first-child {
  margin-top: 20px;
}
.timeline ol li:not(:first-child) {
  margin-left: auto;
}
.timeline ol li div {
  width: 94%;
  height: auto !important;
  margin: 0 auto 25px;
  position: static;
}
.timeline ol li:nth-child(odd) div {
  transform: none;
}
.timeline ol li:nth-child(odd) div::before,
.timeline ol li:nth-child(even) div::before,
.timeline ol li:not(:last-child)::after {
  display: none;
}
.timeline div.arrows {
  display: none;
}
}
</style>
