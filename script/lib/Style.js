export default class Style
{   
    /**
     * Create a div element and his children
     */
    constructor()
    {
        this.container = document.createElement('div');
        this.container.id = 'div-container';
        document.body.appendChild(this.container);

        this.bigSquare(this.container);
        this.littlesquare();
    }

    /**
     * Generate a random number, (9 - 1) + 1 min and max value authorized
     * @returns {array}
     */
    generateNumbers()
    {
        let tab = [];
        let i = 0;

        while ( i <= 7)
        {   
            let number = Math.floor( Math.random() * (9 - 1) + 1 );
            
            if(tab.includes(number))
            {
                tab[i] = Math.floor( Math.random() * (9 - 1) + 1 );
            }else {
                
                tab[i] = number;
                i++;
            }
        }
        return  tab;
    }
    
    /**
     * Set big div style
     * @param {HTMLElement} container the parent
     * @returns {void}
     */
    bigSquare(container)
    {
        container.style.width = '300px';
        container.style.height = '300px';
    }

    /**
     * Set little divs style
     * @returns {void}
     */
    littlesquare()
    {   
        let top = [8, 8, 8, 108 , 108, 108, 208, 208, 208];
        let left = [8, 108, 208, 8, 108, 208 , 8, 108, 208];

        let number = this.generateNumbers();

        for (let i = 0; i < 9; i++) {

            let div = document.createElement('div');
            this.container.appendChild(div);
            
            div.style.display = 'inline-block';
            div.style.width = '100px';
            div.style.height = '100px';
            div.style.position = 'absolute';
            div.style.top = top[i] + 'px';
            div.style.left = left[i] + 'px';
            div.style.backgroundColor =  '#' + i +  i +  i ;
            div.style.color = '#fff'; 
            div.style.fontSize = '40px';
            div.style.cursor ='pointer'
            div.innerHTML = number[i];
            div.id = '_' + i;
        }
        
        let whiteSquare = document.querySelector('#_8');
        whiteSquare.style.backgroundColor = '#fff';
        whiteSquare.style.color = '#fff';
        whiteSquare.innerHTML = 'X' ;
    }

}
