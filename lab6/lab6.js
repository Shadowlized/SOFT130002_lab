/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    let beginSeconds = new Date().getSeconds();
    let timesRun = 0; let timesAlert = 0;
    let value = 1;
    console.log("第一题 " + 1 + " ");
    function doubleValue(){
        let nowSeconds = new Date().getSeconds();
        if ((nowSeconds > beginSeconds) && timesRun <= 9 && timesAlert === 0){
            value *= 2;
            timesRun++;
            console.log("第一题 " + value + " ");
        } else if ((nowSeconds <= 4) && timesRun >= 1 && timesRun <= 9 && timesAlert === 0){
            console.log("第一题 A new minute. Process ended.");
            timesAlert++;
        }
    }
    setInterval(doubleValue, 5000);
}
testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③!!!!!!!!!!!!!!邮箱字符串的正则匹配的理解需写入lab文档。!!!!!!!!!!!!!!!!!!!
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
    let patternTelephone = /[0-9]{11}/;
    let booTelephone = patternTelephone.test(telephone);
    let patternMail = /\w+[@]\w+[.]\w+/;
    let booMail = patternMail.test(mail);
    if (booTelephone && booMail){
        console.log("第二题 Both are right.");
    } else if (!booTelephone && !booMail){
        console.log("第二题 Both are wrong!");
    } else if (booTelephone && !booMail){
        console.log("第二题 The telephone is right and the mail is wrong!");
    } else {
        console.log("第二题 The mail is right and the telephone is wrong!");
    }

}
testMail("12233344441", "qwerty@126.");

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    console.log("第三题");
    let pattern = /\b([a-z]+) \1\b/ig;
    let doubleArray = str.match(pattern);
    if (doubleArray.length <= 10){
        let doubleSet = new Set(str.match(pattern));
        console.log(doubleSet);
    } else {
        //首字母排序
        let arrayNew = str.split(" ");
        arrayNew.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        //取前十项
        let newStr = arrayNew.join(" ");
        let newNewArray = newStr.match(pattern);
        for (let i = 10; i < newNewArray.length; i++){
            newNewArray[i] = undefined;
        }
        let newNewStr = newNewArray.join(" ");
        let doubleSet = new Set(newNewStr.match(pattern));
        console.log(doubleSet);
    }
}
testRedundancy("A a bo BO ccc ccc d D e e f f g g gh ga h h i i k k j j l l");

/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    let setAns = new Set();
    let redundant = 0;
    let wantArray = wantInput.split("");
    let actualArray = actualInput.split("");
    for (let i = 0; i < wantArray.length; i++){
        if (wantArray[i] !== actualArray[i - redundant]){
            setAns.add(wantArray[i].toUpperCase());
            redundant++;
        }
    }
    console.log("第四题");
    console.log(setAns);
}
testKeyBoard("7_This_is_a_test", "_hs_s_a_es");

/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let wordsArray = str.replace(/\s{2,}/g," ").split(" ");
    wordsArray.reverse();
    console.log("第五题 " + wordsArray.join(" "));
}
testSpecialReverse("the    sky   is blue!");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    console.log("第六题");
    let map = new Map();
    let ansArray = [];
    for (let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
        let num2 = map.get(target - nums[i])
        if (num2 !== undefined){
            ansArray.push(num2);
            ansArray.push(i);
            console.log(ansArray);
            ansArray = [];
        }
    }
}
twoSum([1,2,3,4], 5);

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map = new Map();
    map.set(-1, "NoMatchString");
    let lengthLongest = str.length;
    for (let i = 0; i < str.length; i++){
        map.set(i, str.charAt(i));
        if (map.get(i) === map.get(i - 1)){
            lengthLongest--;
        }
    }
    console.log("第七题 " + lengthLongest);
}
lengthOfLongestSubstring("abbbccccddefff");

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}

function DevelopingCountry() {
    Country.call(this);
    this.name = "发展中国家";
    this.sayHi = function(){return "第八题 Hi,i am a developing country.";}
}

function PoorCountry() {
}
PoorCountry.prototype = new Country();
PoorCountry.prototype.name = "最不发达国家";
PoorCountry.prototype.saySad = function(){return "第八题 I am a sad poor country.";}

function DevelopedCountry(){
    Object.create(Country.prototype);
    this.name = "发达国家";
}
DevelopedCountry.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy = function(){return "第八题 I am a Happy developed country.";}

let instanceDeveloping = new DevelopingCountry();
let instancePoor = new PoorCountry();
let instanceDeveloped = new DevelopedCountry();
console.log(instanceDeveloping.sayHi());
console.log(instancePoor.saySad());
console.log(instanceDeveloped.sayHappy());
