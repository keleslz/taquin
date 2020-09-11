export default class Box
{
    constructor()
    {   
        this.container = document.querySelector('div')
        this.children = document.querySelectorAll('div div')
        this.position()
    }


    position() 
    {
        for (let i = 0; i < this.children.length; i++) {

            const child = this.children[i];

            child.addEventListener('click', (e) => {

                console.log(e.target.offsetTop)
                console.log(e.target.offsetLeft)
            })
        }
    }
}
