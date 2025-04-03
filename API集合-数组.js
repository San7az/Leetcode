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
// callbackFn
// 该函数被调用时将传入以下参数：
// element
// 数组中当前正在处理的元素。
// index
// 正在处理的元素在数组中的索引。
// array
// 调用了 map() 的数组本身。
// thisArg 可选
// 执行 callbackFn 时用作 this 的值。
Array.prototype.map((callbackFn, thisArg) => {})

// filter方法:根据条件会返回一个新的数组
Array.prototype.filter(() => {})

// split() 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表
// 将这些子串放入一个数组，并返回该数组。
String.prototype.split = function (separator, limit) {}

//every() 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。
Array.prototype.every(() => {})

// parseInt() 方法可解析一个字符串，并返回一个整数。
parseInt(string, radix)

//Math.floor() 函数总是返回小于等于一个给定数字的最大整数。
console.log(Math.floor(5.95))
// Expected output: 5
