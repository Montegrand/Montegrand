window.onload = function () {

    let textC = '';

    textC += 'Welcome to my PORTFOLIO<br><br>Thank you sincerely for your kind visit.<br>It meant a lot to me that you took the time to come by.<br>I know how busy you are, and i truly value the time we spent together<br><br>Please know that I am very grateful for your kindness<br><br>';
    let pageIndex = 'Page index, <br><br>1. MAIN, <br> 2. ABOUT, <br> 3. PROJECT, <br> 4. CONTACT, <br><br>Please enter the number of the page you want<br>';
    let indexArr = pageIndex.split(",");
    indexArr.forEach(function(v,n){
        textC += v;
        if (n===1) {
            textC += ' (now)'
        }
    })

    let textBox = document.querySelector('.window > p:first-child > span');
    let i = 0;
    let consW = document.querySelector('.window');
    let input = document.querySelector('.window input');
    let fakeBox = document.querySelector('.window .fake');
    let error = '';
    let errorMessage = 'Please enter a single digit number within the range';
    let running = false;
    let cBoxes = document.querySelectorAll('.contents > .box');
    let warning = document.querySelector('.contents > .error');
    let contents = document.querySelector('.contents');
    let line = document.querySelector('.line');

    cBoxes.forEach(function (v, n) {
        v.addEventListener('mousemove', function (e) {
            let X = e.clientX;
            let Y = e.clientY;
            v.style.backgroundPosition = `${(X/v.offsetWidth)*100}% ${(Y/v.offsetHeight)*100}%`;
        })

        if (n!==0) {
            v.addEventListener('mouseenter',function(){
                v.classList.add('hover');
            })
            v.addEventListener('mouseleave',function(){
                v.classList.remove('hover');
            })
        }
    })

    if (running === false) {
        running = true;
        setTimeout(function () {
            contents.classList.add('loading');
            textBox.nextSibling.classList.add('on');
            const typing = setInterval(() => {
                if (textC.charAt(i) === '<') {
                    textBox.innerHTML += '<br>';
                    i = i + 4;
                } else {
                    textBox.innerHTML += textC.charAt(i)
                    i++;
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
                    contents.classList.remove('loading')
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
                if (running === false) {
                    warning.classList.remove('load')
                    warning.classList.add('load')
                    running = true;
                    error += 'error'
                    error += `<br><br>`
                    error += errorMessage;
                    indexArr.forEach(function(v,n){
                        error += v;
                    })
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
                cBoxes.forEach(function (v, n) {
                    v.classList.remove('load')
                })
                let pageChk = input.value
                textBox.nextSibling.classList.remove('off')
                fakeBox.nextElementSibling.classList.remove('on')
                textBox.innerHTML += input.value
                input.value = ''
                fakeBox.innerHTML = ''
                let pageMove = ''
                input.blur()

                let success = function () {
                    if (running === false) {
                        warning.classList.remove('load')
                        running = true;
                        pageMove += 'success<br><br>'
                        pageMove += `Go to page no.${pageChk}`
                        pageMove += `<br><br>`
                        indexArr.forEach(function(v,n){
                            pageMove += v;
                            if (n==pageChk) {
                                pageMove += ' (now)'
                            }
                        })
                        textBox.innerHTML += '<br><br>'
                        i = 0
                        textBox.nextSibling.classList.remove('off')
                        fakeBox.nextSibling.classList.remove('on')
                        contents.classList.add('loading')
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
                                fakeBox.nextSibling.classList.add('on')
                                cBoxes.forEach(function (v, n) {
                                    if (n + 1 == pageChk) {
                                        v.classList.add('load')
                                    }
                                })
                                input.focus();
                                pageChk = ''
                                pageMove = '';
                                running = false;
                                input.value = ''
                                contents.classList.remove('loading')
                            }
                            consW.scrollBy(0, consW.scrollHeight)
                        }, 30);
                    }
                }

                if (pageChk == 1) {
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
    let resize = function (e) {
        let cons = document.querySelector('.console')
        line.style.top = `${e.clientY-3}px`
        contents.style.height = `${line.offsetTop}px`
        cons.style.height = `${window.innerHeight - line.offsetTop + line.offsetHeight}px`
    }
    line.addEventListener('mousedown', function () {
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', function () {
            window.removeEventListener('mousemove', resize)
        })
    })
}