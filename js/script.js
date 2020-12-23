const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const ul = document.querySelector('ul');
const items = [
    'Andela',
    'Apple',
    'Atom',
    'Backend',
    'Bing',
    'Chrome',
    'Computer',
    'Developer',
    'Ebay',
    'Facebook',
    'Frontend',
    'Full-stack',
    'Google',
    'Instagram',
    'Jumia',
    'Microsoft',
    'OPay',
    'Paypal',
    'Paystack',
    'Twitter',
    'Vanilla',
    'VS Code',
    'Web',
    'Whatsapp'];

// Move items as lists to the DOM
items.forEach(item => {
    const div = document.createElement('div');
    const a = document.createElement('a');
    a.textContent = item;
    const img = document.createElement('img');
    img.setAttribute('src', 'img/fly.svg');
    const badge = document.createElement('span');
    div.classList.add('dark-blue');
    div.appendChild(a);
    div.appendChild(badge);
    div.appendChild(img);
    ul.appendChild(div);
    div.setAttribute('onclick', `M.toast({ html: "${item}", classes: 'rounded toast-btn' })`);
});

const lists = document.querySelectorAll('a');
const divs = document.querySelectorAll('ul div');

// increase count of clicks and add badge color
divs.forEach(div => {
    div.addEventListener('click', e => {
        const count = div.querySelector('span');
        count.innerHTML = Number(count.innerHTML) + 1;
        if (count.classList.value !== 'white') {
            count.classList.add('white');
        }
    })
})

// Display list items randomly on the DOM
const displayItems = () => {
    const getItem = items[Math.floor(Math.random() * items.length)]; // randomly getting the index position

    // Toast List Items at random
    M.toast({ html: `${getItem}`, classes: 'rounded toast-btn' });

    // add and update badges
    lists.forEach(list => {
        if (list.textContent === getItem) {
            if (list.nextSibling.innerHTML === '') {
                list.nextSibling.classList.add('white');
            }
            list.nextSibling.innerHTML = Number(list.nextSibling.innerHTML) + 1;
            list.parentElement.classList.add('z-depth', 'border');
        }
        else {
            list.parentElement.classList.remove('z-depth', 'border');
        }
    })
}

// display list items on button click
const buttonToast = () => {
    let startToast;
    stopButton.classList.add('disable');
    startButton.addEventListener('click', e => {
        startButton.disabled = true;
        stopButton.disabled = false;
        startButton.classList.add('disable');
        stopButton.classList.remove('disable');
        ul.classList.remove('hide');
        startToast = setInterval(displayItems, 4500);
    });
    stopButton.addEventListener('click', e => {
        stopButton.classList.add('disable');
        stopButton.disabled = true;
        startButton.disabled = false;
        startButton.classList.remove('disable');
        ul.classList.add('hide');
        clearInterval(startToast);
    });
}

buttonToast();