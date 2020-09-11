function numbers()
{
    let tab = [];
    let i = 0;

    while ( i <= 7)
    {   
        let number = Math.floor( Math.random() * (9 - 1) + 1 )
        
        if(tab.includes(number))
        {
            tab[i] = Math.floor( Math.random() * (9 - 1) + 1 )
        }else {
            
            tab[i] = number
            i++
        }
    }
    return  tab
}

let container = document.createElement('div');

document.body.appendChild(container);
container.style.width = '300px';
container.style.height = '300px';
container.style.border = '1px solid #000';

let number = numbers();

for (let i = 0; i < 8; i++) {

    let div = document.createElement('div');
    container.appendChild(div);

    div.style.display = 'inline-flex';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor =  '#' + i +  i +  i ;
    div.style.color = '#fff'; 
    div.style.fontSize = '40px'; 
    div.style.justifyContent = 'center'; 
    div.style.alignItems = 'center'; 
    div.innerHTML = number[i]
}
