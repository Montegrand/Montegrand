window.onload = function() {
    
    let textC = ''
    
    textC += 'Welcome my PORTFOLIO<br><br>Thank you sincerely for your kind visit.<br>It meant a lot to me that you took the time to come by.<br>I know how busy you are, and i truly value the time we spent together<br><br>Please konw that I am very grateful for your kindness'
    let pageIndex = '<br><br>Page index<br><br> 1. MAIN <br> 2. ABOUT <br> 3. PROJECT <br> 4. CONTACT <br><br>Please enter the number of the page you want'
    textC += pageIndex
    
    let textBox = document.querySelector('.window > p > span');
    let from = 0;
    let to = 1;
    let consW = document.querySelector('.window')
    let input = document.querySelector('.window > input');
    let caret = document.querySelector('.window .cursor');
    // let caretX = input.getBoundingClientRect().left;
    let errorMessage = '' //입력 범위내의 숫자인지 확인해달라는 메세지
    errorMessage += 'Sorry'
    console.log(input.offsetTop)
    
    const typing = setInterval(() => {
        if (textC.slice(from,to)==='<') {
            textBox.innerHTML += '<br>'
            from = from + 4;
            to = to + 4;
        } else {
            textBox.append(textC.slice(from,to))
            from++
            to++
        }
        if (from===textC.length) {
            clearInterval(typing)
            caretY = input.offsetTop;
            caretX = input.getBoundingClientRect().left;
            console.log(caretY)
            caret.style.top = `calc(${caretY}px + 1rem)`;
            caret.style.left = caretX + 'px';
            textBox.nextSibling.classList.add('off')
            caret.classList.add('on')
            input.focus();
        }
    }, 1);
    
    input.addEventListener('focus',function() {
        input.addEventListener('keydown', function(e) {

        caret.classList.add('keydown')

            if (e.key==='Enter'){
                textBox.nextSibling.classList.remove('off')
                caret.classList.remove('on')
                let inputPage = input.value
                input.value = '';
                console.log(inputPage>=1&&inputPage<=4)
                if (inputPage>=1&&inputPage<=4) {
                    // contentsbox(inputPage).getbou를 0으로
                } else {
                    textBox.innerHTML = ''
                    errorMessage += pageIndex
                    from = 0
                    to = 1

                    textBox.innerHTML += '<br><br>'

                    const typing = setInterval(() => {
                        if (errorMessage.slice(from,to)==='<') {
                            textBox.innerHTML += '<br>'
                            from = from + 4;
                            to = to + 4;
                        } else {
                            textBox.append(errorMessage.slice(from,to))
                            from++
                            to++
                        }
                        if (from===errorMessage.length) {
                            clearInterval(typing)
                            caretY = input.offsetTop;
                            caretX = input.offsetLeft;
                            caret.style.top = `calc(${caretY}px + 1rem)`;
                            caret.style.left = caretX + 'px';
                            textBox.nextSibling.classList.add('off')
                            caret.classList.add('on')
                            input.focus();
                        }
                    }, 30);
                }
            }
        })
        input.addEventListener('keyup', function(e) {

            caret.classList.remove('keydown')

            let length = input.value.length
            let caretX = input.getBoundingClientRect().left;
            caret.style.left = `calc(${caretX}px + ${length*0.5}rem)`;
        })
    })

}