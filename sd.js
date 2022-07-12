
function run () {
    return new Promise (function(res,rej){
        if (running === false) {
            running = true;
            textBox.innerHTML += '<br><br>'
            i = 0
            textBox.nextSibling.classList.remove('off')
            textBox.nextSibling.classList.add('on')
            fakeBox.nextSibling.classList.remove('on')
            const typing = setInterval(() => {
                if (inputText.charAt(i) === '<') {
                    textBox.innerHTML += '<br>'
                    i = i + 4
                } else {
                    textBox.innerHTML += inputText.charAt(i)
                    i++;
                }
                consW.scrollBy(0, consW.scrollHeight)
                if (i === inputText.length) {
                    clearInterval(typing)
                    if (!mail) {
                        cBoxes.forEach(function (v, n) {
                            if (n + 1 == chk) {
                                v.classList.add('load')
                            }
                        })
                    }
                    textBox.nextSibling.classList.add('off')
                    fakeBox.nextSibling.classList.add('on')
                    input.focus();
                    inputText = '';
                    running = false;
                    contents.classList.remove('loading')
                    if (!mail) {
                        cBoxes.forEach(function (v, n) {
                            if (n + 1 == chk) {
                                v.classList.add('load')
                            }
                        })
                        chk=''
                    }
                }
            }, 1);
            res(typing)
        }
    })
}


if (mail===false) {
    if (Number.isInteger(Number(chk))) {
        if (Number(chk) >= 1 && Number(chk) <= 4) {
            success();
        } else {
            errorF();
        }
    } else {
        errorF();
    }
} else {
    success2();
}


function emailChk() {
    var text = document.getElementById('text').value;

    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regPhone.test(text) === true) {
        alert('입력된 값은 휴대전화번호입니다.');
    } else if (regEmail.test(text) === true) {
        alert('입력된 값은 이메일입니다.');
    } else {
        alert('올바른 핸드폰/이메일을 입력해주세요.');
    }
}