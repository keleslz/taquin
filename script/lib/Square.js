export default class Square
{
    constructor ()
    {
        this.container = document.querySelector('div');
        this.children = document.querySelectorAll('div div');
        this.whiteSquare = document.querySelector('#_8');
        this.event();
    }
    
    /**
     * Manage good and bad move
     * @returns {void}
     */
    event ()
    {

        for (let i = 0; i < this.children.length; i++) {

            const child = this.children[i];

            child.addEventListener('click', (e) => {

                let target = e.target;

                let position = this.position(target);
                let numberPlace = this.numberPlace(position);
                let authorized = this.authorize(numberPlace);

                if (authorized === undefined)
                {
                    this.badMove(target);
                }else{
                    
                    this.move(target,this.whiteSquare);
                }

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

        if( !(whiteSquarePlace === 3 || whiteSquarePlace === 6) )
        {
            if(numberPlace === (whiteSquarePlace + 1 ) )
            {
                return whiteSquarePlace + 1;
            }
        }

        if( !(whiteSquarePlace === 4 || whiteSquarePlace === 7))
        {
            if(numberPlace === (whiteSquarePlace - 1 ) )
            {
                return whiteSquarePlace - 1;
            }
        }
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

    /**
     * 
     * @param {HTMLElemment} target the target of the click
     * @param {HTMLElement} whiteSquare the white square
     */
    move(target, whiteSquare)
    {   
        target.style.animation = 'none';
        whiteSquare.style.animation = 'none';

        let targetPos = this.position(target);
        let whiteSquarePos = this.position(whiteSquare);

        let whiteSquareNumberPlace =  this.numberPlace(whiteSquarePos)
        let targetNumberPlace =  this.numberPlace(targetPos)

        //TOP CLICK
        if(targetNumberPlace === (whiteSquareNumberPlace - 3))
        {
            if(targetPos.top < whiteSquarePos.top)
            {   
                target.style.top =  ( targetPos.top + 100 ) + 'px';
                whiteSquare.style.top =  ( whiteSquarePos.top - 100 ) + 'px';
            }
        }

        //BOTTOM CLICK
        if(targetNumberPlace === (whiteSquareNumberPlace + 3))
        {
            if(targetPos.top > whiteSquarePos.top)
            {
                target.style.top =  ( targetPos.top - 100 ) + 'px';
                whiteSquare.style.top =  ( whiteSquarePos.top + 100 ) + 'px';
            }
        }

        //LEFT CLICK
        if(targetNumberPlace === (whiteSquareNumberPlace - 1))
        {
            if(targetPos.left < whiteSquarePos.left)
            {
                target.style.left = (targetPos.left + 100) + 'px';
                whiteSquare.style.left = (whiteSquarePos.left - 100) + 'px';
            }
        }

        //RIGHT CLICK
        if(targetNumberPlace === (whiteSquareNumberPlace + 1))
        {
            if(targetPos.left > whiteSquarePos.left)
            {
                target.style.left = (targetPos.left - 100) + 'px';
                whiteSquare.style.left = (whiteSquarePos.left + 100) + 'px';
            }
        }
    }
}