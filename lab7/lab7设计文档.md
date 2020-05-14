# Lab7 设计文档

**吴逸昕 19302010013**

-----------------

### 困难与解决方法

- `header` 无id只有class名，可先使用 `getElementById` 获得其子元素 `nav` 的位置，再通过 `parentElement` 获得 `header` 位置

- 将新建 `section` 并为之 `appendChild()` 的过程放在一个循环中，以此来生成四个 `section`

- `appendChild()` 需逐级添加

- 新建HTML元素需使用 `document.createElement("elementName")` ，新建文本内容使用 `createTextNode("text")` 方法，使用点操作符访问新建的元素的属性

- 为新建的元素设置 `className` 属性以使用样式

- 设置 `authorName.style.display = "inline"` `lifetime.style.display = "inline"` 以使得这两个 `heading` 位于同一行中，通过 `style` 属性改变其中的 `margin` 以达到左右空格效果

- 通过 `for (let e in works[i].photos){}` 遍历未知个数的图片，记得设置 `src` 属性！

-----------------
