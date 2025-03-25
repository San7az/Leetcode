// 操作数组
// slice方法: 不改变原数组，返回一个新数组。
// start表示开始的位置(数组下标),end 表示结束的位置(不包括在新生成的数组中)
Array.prototype.slice = function (start, end) {}

// splice方法:改变原数组,可以添加删除和更改元素。
//start：表示开始位置(数组下标)，deleteCount表示删除的个数，如果为0则表示不会删除
// 后面的参数是似push方法，可以添加多个元素。
// 返回值：
// 为一个包含了删除的元素的数组。
// 如果只移除一个元素，则返回一个元素的数组。
// 如果没有删除任何元素，则返回一个空数组。
Array.prototype.splice = function (start, deleteCount, item1, item2) {}

// reduce方法:
Array.prototype.reduce = function (callback, initialValue) {}

// 迭代器方法:这些方法的返回值都是一个数组迭代器对象,所以可以通过Array.from()方法浅拷贝一个新数组。
Array.prototype.keys()
Array.prototype.values()
Array.prototype.entries()

// 迭代方法
// map方法:返回一个新的数组,数组中的元素为经过回调函数处理后的值
Array.prototype.map(() => {})

// filter方法:根据条件会返回一个新的数组
Array.prototype.filter(() => {})

// split() 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表
// 将这些子串放入一个数组，并返回该数组。
String.prototype.split = function (separator, limit) {}

// hasOwnProperty() 方法返回一个布尔值
// 表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。
Object.prototype.hasOwnProperty()

//Object.entries() 静态方法返回一个数组
// 包含给定对象自有的可枚举字符串键属性的键值对。
Object.entries()
