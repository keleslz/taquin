export default class Square
{
    constructor ()
    {
        this.container = document.querySelector('div');
        this.children = document.querySelectorAll('div div');
        this.event();
    }

    event ()
    {
        let whiteSquare = document.querySelector('#_8');

        for (let i = 0; i < this.children.length; i++) {

            const child = this.children[i];

            child.addEventListener('click', (e) => {
                
                let target = e.target;
                let whiteSquarePlace = this.numberPlace( this.position(whiteSquare) ); 
                
                let position = this.position(target);
                let numberPlace = this.numberPlace(position);
                let authorized = this.authorize(numberPlace);
                let unauthorized = this.unauthorized(authorized);
                
                console.log(authorized, unauthorized);

                if (authorized === undefined)
                {   
                    // console.log(this.getElementByPosition(authorized))
                    this.badMove(target);
                }

                // if(isNaN(authorized))
                // {
                //     console.log(target)
                // }

            })
        }
    }

    /**
     * Thanks to that we know the information of an square
     * @param {DOMRect} target an object with clientRects information
     * @return {DOMRect} an object
     */
    position (target)
    {
        return target.getClientRects()[0];
    }

    /**
     * Return a number. That is location of a square in container
     * @param {DOMRect} target an DOMRect object
     * @returns {number} The number of the place
     */
    numberPlace (target)
    {   
        if(target.top === 8 && target.left === 8)
        {
            return 1
        }
        
        if(target.top === 8 && target.left === 108)
        {
            return 2
        }
        
        if(target.top === 8 && target.left === 208)
        {
            return 3
        }
        
        if(target.top === 108 && target.left === 8)
        {
            return 4
        }
        
        if(target.top === 108 && target.left === 108)
        {
            return 5
        }
        
        if(target.top === 108 && target.left === 208)
        {
            return 6
        }
        
        if(target.top === 208 && target.left === 8)
        {
            return 7
        }
        
        if(target.top === 208 && target.left === 108)
        {
            return 8
        }
        
        if(target.top === 208 && target.left === 208)
        {
            return 9
        }
    }

    /**
     * Return a number for a move location authorized else return undefined
     * @param {number} numberPlace the click target
     * @returns {(number|undefined)} return a number location or undefined
     */
    authorize(numberPlace)
    {
        let whiteSquare = document.querySelector('#_8');
        let whiteSquarePlace = this.numberPlace( this.position(whiteSquare) ); 
        
        if(numberPlace === (whiteSquarePlace - 3 ) )
        {
            return whiteSquarePlace - 3 ;
        }
        
        if(numberPlace === (whiteSquarePlace + 3 ) )
        {
            return whiteSquarePlace + 3 ;
        }

        if(numberPlace === (whiteSquarePlace + 1 ) )
        {
            return whiteSquarePlace + 1;
        }
        
        if(numberPlace === (whiteSquarePlace - 1 ) )
        {
            return whiteSquarePlace - 1;
        }
    }

    /**
     * Unthorize a move according to the position of the white square element  
     * @param {number} numberPlace 
     * @returns {number}
     */
    unauthorized(numberPlace)
    {   
        // Right unhautorized
        if(  numberPlace === 3 || numberPlace === 6 )
        {
            return numberPlace + 1;
        }

        // Left unhautorized
        if( numberPlace === 4 || numberPlace === 7 )
        {            
            return numberPlace - 1;
        }
    }

    getElementByPosition(number)
    {   
        return document.querySelector('#div-container').children[(number - 1)] ; 
    }

    /**
     * Bad move animation
     * @param {HTMLElement} target 
     */
    badMove(target)
    {
        let whiteSquare = document.querySelector('#_8');

        if(target.id !== whiteSquare.id )
        {
            setTimeout(() => {

                target.style.transition ='.2s ease-in .1s'
                let backgroundColor =  target.style.backgroundColor;
                target.style.backgroundColor = '#f33';

                setTimeout(() => {

                    target.style.backgroundColor = backgroundColor;
                }, 290);
            }, 10);
        }
    }

    goodMove(target)
    {
        setTimeout(() => {

            target.style.transition ='.2s ease-in .1s'
            let backgroundColor =  target.style.backgroundColor;
            target.style.backgroundColor = '#8f8';

            setTimeout(() => {

                target.style.backgroundColor = backgroundColor;
            }, 290);
        }, 10);
    }
}