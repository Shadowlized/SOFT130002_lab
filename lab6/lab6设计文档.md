# Lab6 ����ĵ�

**����� 19302010013**

-----------------

## Ч����ͼ

![markdown](scn1.png)

## Github��ͼ

![markdown](scn2.png)

----------------

### ������ʽ

- ������ʽ�趨����һ��б����

- `[0-9]`��ʾ��ȡ0-9������֣�`{11}`��ʾƥ��ǰһ��11��

- `\w`��ʾ��ȡa-zA-Z0-9����ַ��� `+`��ʾƥ��ǰһ��һ�λ��Σ� 
`*`��ʾƥ��ǰһ����λ��Σ� `[@]` `[.]`��ƥ�������ַ���
 
- `\b`ȷ��ֻ��⵽һ�������ʣ�`[a-z]+`��ʾƥ��һ��������ĸ��
`\1`ָ����һ����ƥ�����β��`i`��ʾ�����ִ�Сд��`g`��ʾ�����ܶ��ƥ��

- `/\s{2,}/g`��ʾ�ҳ����еĴ��ڵ��������Ŀո�

-----------------

### ��ͬ�̳з�ʽ

<ol>
<li>ԭ����������ԭ����һ���������ͼ̳���һ���������͵����Ժͷ���

```
Subtype.prototype = new SuperType();
```

<li>���ù��캯�����������͹��캯�����ڲ����ó����͹��캯��

```
function SubType(){
    SuperType.call(this);
}
```  

<li>��ϼ̳У���ԭ�����ͽ�Ϲ��캯���ļ�����ϵ�һ�飬ʹ��ԭ����ʵ�ֶ�ԭ�����Ժͷ����ļ̳У���ͨ�����ù��캯����ʵ�ֶ�ʵ�����Եļ̳�

```
function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    alert(this.age);
};
```

<li>ԭ��ʽ�̳У�����ԭ�ͻ������ж��󴴽��¶���

```
function object(o){
    function F(){ }
    F.prototype = o;
    return new F();
}
```

ʹ��`Object.create()`ʱ��

```$xslt
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = Object.creat(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
```

<li>����ʽ�̳У�����һ�������ڷ�װ�̳й��̵ĺ������ú������ڲ���ĳ�ַ�ʽ��ǿ�������շ��ض���

```$xslt
function createAnother(original){
    var clone = object(original);
    clone.sayHi = function(){
        alert("hi");
    };
    return clone;
}
```

<li>�������ʽ�̳У�ͨ�����ù��캯�����̳����ԣ�ͨ��ԭ�����Ļ����ʽ���̳з���

```$xslt
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
```

</ol>

----------------------

### Map��Set��Array��������ʹ��

- Map��Ϊһ������ֵ�ԣ�����ͬSet��Arrayһ���洢ֵ���⻹�洢��ֵ��Ӧ�ļ����������ڻ���Ƶ����ȡ�����ݣ���ͨ��get(����)���е���

- Set�еĳ�Աֵ����Ψһ�ģ����ڼ��ĳһֵ�Ƿ���ڣ����˵��ظ�������

- ArrayΪ���飬���ڴ���һϵ���໥���ڹ�����ֵ���зḻ�Ĳ�������