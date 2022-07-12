









let success = function () {
    if (Number(chk) !== 4) {
        if (running === false) {
            warning.classList.remove('load')
            running = true;
            inputText += 'success<br><br>'
            inputText += `Go to page no.${chk}`
            inputText += `<br><br>`
            indexArr.forEach(function (v, n) {
                inputText += v;
                if (n == chk) {
                    inputText += ' (now)'
                }
            })
            textBox.innerHTML += '<br><br>'
            i = 0
            textBox.nextSibling.classList.remove('off')
            fakeBox.nextSibling.classList.remove('on')
            contents.classList.add('loading')
            const typing = setInterval(() => {
                if (inputText.charAt(i) === '<') {
                    textBox.innerHTML += '<br>'
                    i = i + 4
                } else {
                    textBox.innerHTML += inputText.charAt(i)
                    i++;
                }

                if (i === inputText.length) {
                    clearInterval(typing)
                    textBox.nextSibling.classList.add('off')
                    fakeBox.nextSibling.classList.add('on')
                    cBoxes.forEach(function (v, n) {
                        if (n + 1 == chk) {
                            v.classList.add('load')
                        }
                    })
                    input.focus();
                    chk = ''
                    inputText = '';
                    running = false;
                    input.value = ''
                    contents.classList.remove('loading')
                }
                consW.scrollBy(0, consW.scrollHeight)
            }, 30);
            return false;
        }
        return false;
    } else {
        if (running === false) {
            warning.classList.remove('load')
            running = true;
            inputText += 'success<br><br>'
            inputText += `Go to page no.${chk}`
            inputText += `<br><br>`
            console.log(indexArr)
            indexArr.forEach(function (v, n) {
                if (n < (indexArr.length - 2)) {
                    inputText += v
                    if (n === Number(chk)) {
                        inputText += ' (now)<br><br>'
                    }
                }
            })
            textBox.innerHTML += '<br><br>'
            inputText += `If you want to move another page, enter another number.<br><br> 1. To page index<br> 2. To leave me Massage.`
            i = 0
            textBox.nextSibling.classList.remove('off')
            fakeBox.nextSibling.classList.remove('on')
            contents.classList.add('loading')
            const typing = setInterval(() => {
                if (inputText.charAt(i) === '<') {
                    textBox.innerHTML += '<br>'
                    i = i + 4
                } else {
                    textBox.innerHTML += inputText.charAt(i)
                    i++;
                }

                if (i === inputText.length) {
                    clearInterval(typing)
                    textBox.nextSibling.classList.add('off')
                    fakeBox.nextSibling.classList.add('on')
                    cBoxes.forEach(function (v, n) {
                        if (n + 1 == chk) {
                            v.classList.add('load')
                        }
                    })
                    input.focus();
                    chk = ''
                    inputText = '';
                    running = false;
                    input.value = ''
                    contents.classList.remove('loading')
                    mail = true;
                }
                consW.scrollBy(0, consW.scrollHeight)
            }, 30);
            return false;
        }
    }
}

let success2 = function () {
    if (running === false) {
        if (chk == 1) {
            running = true;
            inputText += 'success<br><br>'
            inputText += `Go to page index`
            inputText += `<br><br>`
            textBox.innerHTML += '<br><br>'
            i = 0
            textBox.nextSibling.classList.remove('off')
            fakeBox.nextSibling.classList.remove('on')
            contents.classList.add('loading')
            const typing = setInterval(() => {
                if (inputText.charAt(i) === '<') {
                    textBox.innerHTML += '<br>'
                    i = i + 4
                } else {
                    textBox.innerHTML += inputText.charAt(i)
                    i++;
                }

                if (i === inputText.length) {
                    clearInterval(typing)
                    textBox.nextSibling.classList.add('off')
                    fakeBox.nextSibling.classList.add('on')
                    input.focus();
                    chk = ''
                    inputText = '';
                    running = false;
                    input.value = ''
                    contents.classList.remove('loading')
                }
                consW.scrollBy(0, consW.scrollHeight)
            }, 30);
            return false;
        } else if (chk == 2) {

        }
    }
}



const run = function () {

    if (running === false) {
        warning.classList.remove('load')
        warning.classList.add('load')
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
                textBox.innerHTML += error.charAt(i)
                i++;
            }
            consW.scrollBy(0, consW.scrollHeight)
            if (i === inputText.length) {
                clearInterval(typing)
                textBox.nextSibling.classList.add('off')
                fakeBox.nextSibling.classList.add('on')
                input.focus();
                inputText = '';
                running = false;
            }
        }, 30);
    }

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