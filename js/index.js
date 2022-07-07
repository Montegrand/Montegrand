window.onload = function () {

    let textC = ''

    textC += 'Welcome my PORTFOLIO<br><br>Thank you sincerely for your kind visit.<br>It meant a lot to me that you took the time to come by.<br>I know how busy you are, and i truly value the time we spent together<br><br>Please konw that I am very grateful for your kindness'
    let pageIndex = '<br><br>Page index<br><br> 1. MAIN <br> 2. ABOUT <br> 3. PROJECT <br> 4. CONTACT <br><br>Please enter the number of the page you want'
    textC += pageIndex

    let textBox = document.querySelector('.window > p > span');
    let i = 0;
    let consW = document.querySelector('.window')
    let input = document.querySelector('.window > input');
    let caret = document.querySelector('.window .cursor');
    // let caretX = input.getBoundingClientRect().left;
    let error = '' //입력 범위내의 숫자인지 확인해달라는 메세지
    let errorMessage = 'Sorry'

    setTimeout(function () {
        textBox.nextSibling.classList.add('on')
        const typing = setInterval(() => {
            if (textC.charAt(i) === '<') {
                textBox.innerHTML += '<br>'
                i = i + 4;
            } else {
                textBox.innerHTML += textC.charAt(i)
                i++
                i
            }
            if (i === textC.length) {
                clearInterval(typing)
                caretY = input.offsetTop;
                caretX = input.getBoundingClientRect().left;
                caret.style.top = `calc(${caretY}px + 1rem)`;
                caret.style.left = caretX + 'px';
                textBox.nextSibling.classList.add('off')
                textBox.nextSibling.classList.remove('on')
                caret.classList.add('on')
                input.focus();
            }
        }, 30);
    }, 3000)


    input.addEventListener('focus', function () {
        input.addEventListener('keydown', function (e) {
            caret.classList.add('keydown')
            let length = input.value.length
            let caretX = input.getBoundingClientRect().left;
            caret.style.left = `calc(${caretX}px + ${length*0.4}rem)`;
        })
        input.addEventListener('keyup', function (e) {
            caret.classList.remove('keydown')
            let length = input.value.length
            let caretX = input.getBoundingClientRect().left;
            caret.style.left = `calc(${caretX}px + ${length*0.5}rem)`;
            let errorF = function () {
                textBox.innerHTML = ''
                error += errorMessage;
                error += pageIndex
                textBox.innerHTML += '<br><br>'
                i = 0
                textBox.nextSibling.classList.add('on')
                const typing = setInterval(() => {
                    if (error.charAt(i) === '<') {
                        textBox.innerHTML += '<br>'
                        i = i + 4
                    } else {
                        textBox.innerHTML += error.charAt(i)
                        i++;
                    }
                    if (i === error.length) {
                        clearInterval(typing)
                        caretY = input.offsetTop;
                        caretX = input.offsetLeft;
                        caret.style.top = `calc(${caretY}px + 1rem)`;
                        caret.style.left = caretX + 'px';
                        textBox.nextSibling.classList.add('off')
                        textBox.nextSibling.classList.remove('on')
                        caret.classList.add('on')
                        input.focus();
                        error = '';
                    }
                }, 30);
            }
            if (e.key == 'Enter') {
                textBox.nextSibling.classList.remove('off')
                caret.classList.remove('on')
                let inputPage = Number(input.value)
                input.value = '';
                if (Number.isInteger(inputPage)) {
                    if (inputPage >= 1 && inputPage <= 4) {
                        // contentsbox(inputPage).getbou를 0으로
                        inputPage = ''
                    } else {
                        errorF();
                    }
                } else {
                    errorF();
                }
            }

        })
    })
}