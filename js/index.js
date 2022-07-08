window.onload = function () {

    let textC = ''

    textC += 'Welcome my PORTFOLIO<br><br>Thank you sincerely for your kind visit.<br>It meant a lot to me that you took the time to come by.<br>I know how busy you are, and i truly value the time we spent together<br><br>Please konw that I am very grateful for your kindness<br>'
    let pageIndex = 'Page index<br><br> 1. MAIN <br> 2. ABOUT <br> 3. PROJECT <br> 4. CONTACT <br><br>Please enter the number of the page you want<br>'
    textC += pageIndex

    let textBox = document.querySelector('.window > p:first-child > span');
    let i = 0;
    let consW = document.querySelector('.window')
    let input = document.querySelector('.window input');
    let fakeBox = document.querySelector('.window .fake')
    // let caretX = input.getBoundingClientRect().left;
    let error = '' //입력 범위내의 숫자인지 확인해달라는 메세지
    let errorMessage = 'Please enter a single digit number within the range'
    let running = false
    let cBoxes = document.querySelectorAll('.contents > .box');

    if (running === false) {
        running = true;
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
                consW.scrollBy(0, consW.scrollHeight)
                if (i === textC.length) {
                    clearInterval(typing)
                    textBox.nextSibling.classList.add('off')
                    textBox.nextSibling.classList.remove('on')
                    fakeBox.nextElementSibling.classList.add('on')
                    input.focus();
                    running = false;
                    cBoxes[0].classList.add('load');
                }
            }, 30);
        }, 3000)
    }


    input.addEventListener('focus', function () {
        input.addEventListener('keydown', function (e) {
            fakeBox.nextElementSibling.classList.add('keydown')
            fakeBox.innerHTML = input.value
        })
        input.addEventListener('keyup', function (e) {
            fakeBox.nextElementSibling.classList.remove('keydown')
            fakeBox.innerHTML = input.value
            let errorF = function () {
                cBoxes.forEach(function(v,n){
                    v.classList.remove('load')
                    if (n===cBoxes.length) {
                        v.classList.add('load')
                    }
                })
                if (running === false) {
                    running = true;
                    error += 'error<br><br>'
                    error += errorMessage;
                    error += pageIndex
                    textBox.innerHTML += '<br><br>'
                    i = 0
                    textBox.nextSibling.classList.remove('off')
                    fakeBox.nextSibling.classList.remove('on')
                    const typing = setInterval(() => {
                        if (error.charAt(i) === '<') {
                            textBox.innerHTML += '<br>'
                            i = i + 4
                        } else {
                            textBox.innerHTML += error.charAt(i)
                            i++;
                        }
                        consW.scrollBy(0, consW.scrollHeight)
                        if (i === error.length) {
                            clearInterval(typing)
                            textBox.nextSibling.classList.add('off')
                            fakeBox.innerHTML = ''
                            fakeBox.nextSibling.classList.add('on')
                            input.focus();
                            error = '';
                            running = false;
                        }
                    }, 30);
                }
            }
            if (e.key == 'Enter') {
                //pageMove------------------------------------------------------
                cBoxes.forEach(function(v,n){
                    v.classList.remove('load')
                })
                let pageChk = input.value
                textBox.nextSibling.classList.remove('off')
                fakeBox.nextElementSibling.classList.remove('on')
                textBox.innerHTML += input.value
                input.value = ''
                let pageMove = ''

                let success = function () {
                    if (running === false) {
                        running = true;
                        pageMove += 'success<br><br>'
                        pageMove += `Go to page no.${pageChk}<br>`
                        pageMove += pageIndex
                        textBox.innerHTML += '<br><br>'
                        i = 0
                        textBox.nextSibling.classList.remove('off')
                        fakeBox.nextSibling.classList.remove('on')
                        console.log(pageMove)
                        const typing = setInterval(() => {
                            if (pageMove.charAt(i) === '<') {
                                textBox.innerHTML += '<br>'
                                i = i + 4
                            } else {
                                textBox.innerHTML += pageMove.charAt(i)
                                i++;
                            }
    
                            if (i === pageMove.length) {
                                clearInterval(typing)
                                textBox.nextSibling.classList.add('off')
                                fakeBox.innerHTML = ''
                                fakeBox.nextSibling.classList.add('on')
                                cBoxes.forEach(function(v,n){
                                    if(n+1==pageChk){
                                        v.classList.add('load')
                                    }
                                })
                                input.focus();
                                pageChk=''
                                pageMove = '';
                                running = false;
                                input.value = ''
                            }
                            consW.scrollBy(0, consW.scrollHeight)
                        }, 30);
                    }
                }

                if (pageChk == 1) {
                    // contentsbox(pageChk).getbound를 0으로
                    success();
                } else if (pageChk == 2) {
                    success();
                } else if (pageChk == 3) {
                    success();
                } else if (pageChk == 4) {
                    success();
                } else {
                    errorF();
                }
            }
        })
    })
}