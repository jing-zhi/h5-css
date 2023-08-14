//等dom渲染完毕
window.addEventListener('load', function() {
    // 获取元素
    var tel = document.querySelector('#tel');
    var name = document.querySelector('#name');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');

    // 定义正则
    var regTel = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    var regName = /^[\u4e00-\u9fa5]{2,6}$/;
    var regMsg = /^\d{6}$/;
    var regPwd =/^[a-zA-Z0-9\W]{6,16}$/;
    // 包含（纯字母、数字、字符）
    // var _regNum = /\d+/;
    // var _regLetter = /[a-zA-Z]+/;
    // var _regSpe = /\W+/;

    // 调用验证函数
    getReg(tel, regTel);
    getReg(name, regName);
    getReg(msg, regMsg);
    getReg(pwd, regPwd);

    // 封装验证函数
    function getReg(obj, myreg) {
        obj.addEventListener('keyup', function() {
            // 如果文本框内容为空，对验证提示进行隐藏。否则显示
            if (obj.value.trim() == 0) {
                this.nextElementSibling.style.display = 'block';
            } else {
                this.nextElementSibling.style.display = 'block';
                // 验证通过改变兄的节点样式（正确），否则错误
                if (myreg.test(this.value)) {
                    this.nextElementSibling.className = 'chulai';
                    // this.nextElementSibling.innerHTML = ' <i class="success_icon"></i>验证通过';
					this.nextElementSibling.style.display="none";
                } else {
                    this.nextElementSibling.className = 'chulai';
                    this.nextElementSibling.style.vis
                }
            }

        })
    };


    // 验证两次密码是否一致（与验证函数相似）
    surepwd.addEventListener('keyup', function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            // this.nextElementSibling.innerHTML = ' <i class="success_icon"></i>密码一致';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="error_icon"></i>两次输入密码不一致'
        }
    });
})


// /*校验电话码格式 */
// function isTelCode(str) {
// 	var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
// 	return reg.test(str);
// }

// /*校验邮件地址是否合法 */
// function IsEmail(str) {
// 	var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
// 	return reg.test(str);
// }

// // 校验是否为昵称
// function isnicheng(str) {
// 	var reg=/^(?!\d+$)(?![A-Za-z]+$)[\u4E00-\u9FA5][a-zA-Z0-9]{1,12}$/;   /*定义验证表达式*/
// 	return reg.test(str);     /*进行验证*/
// }

// // 校验是否为密码
// function ispsd(str) {
// 	var reg=/^[a-zA-Z0-9\W]{6,16}$/;   /*定义验证表达式*/
// 	return reg.test(str);     /*进行验证*/
// }

// // 校验密码是否一致
// function isquerenpsd(str) {
// 	var reg=/^[a-zA-Z0-9\W]{6,16}$/;   /*定义验证表达式*/
// 	return reg.test(str);     /*进行验证*/
// }

// /*校验身份证号格式 */
// function isIDnumber(str) {
// 	var reg= /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// 	return reg.test(str);
// }

// /*校验是否中文名称组成 */
// function ischina(str) {
// 	var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
// 	return reg.test(str);     /*进行验证*/
// }

// function  fun1(){
// 	if(!isTelCode(document.getElementById("tel").value)){
// 		// alert("电话号码不对");
// 		x = document.getElementById("sjhm-chulai")
// 		x.style.display="block";
// 		document.getElementById("tel").focus();
// 		return false;  
// 	}else{
// 		x.style.display="none";
// 	}

// 	if(!isnicheng(document.getElementById("nicheng").value)){
// 		x = document.getElementById("nicheng-chulai")
// 		x.style.display="block";
// 		document.getElementById("nicheng").focus();
// 		return false;  
// 	}else{
// 		x.style.display="none";
// 	}

// 	var psd = document.getElementById("psd").value
// 	var querenpsd = document.getElementById("querenpsd").value
// 	if(!ispsd(document.getElementById("psd").value)){
// 		x = document.getElementById("psd-chulai")
// 		x.style.display="block";
// 		document.getElementById("psd").focus();
// 		return false;  
// 	}else{
// 		x.style.display="none";
// 	}

// 	if(!isquerenpsd(document.getElementById("querenpsd").value)&&ped!=querenpsd){
// 		x = document.getElementById("querenpsd-chulai")
// 		x.style.display="block";
// 		document.getElementById("querenpsd").focus();
// 		return false;  
// 	}else{
// 		x.style.display="none";
// 	}

// 	if(!isIDnumber(document.getElementById("IDnumber").value)){
		
// 		x = document.getElementById("IDnumber-chulai")
// 		x.style.display="block";
// 		document.getElementById("IDnumber").focus();
// 		return false;  
// 	}else{
// 		x.style.display="none";
// 	}

// 	if(!ischina(document.getElementById("username").value)){
// 		x = document.getElementById("xingming-chulai")
// 		x.style.display="block";
// 		document.getElementById("username").focus();
// 		return false;  
// 	}else{
// 		x.style.display="none";
// 	}

	
// 	alert("提交成功")
// 	return false;   // 这边设置禁止提交，实际项目需要改
// }