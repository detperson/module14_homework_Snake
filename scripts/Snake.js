import Config from './Config.js'

export default class Snake {
    constructor() {

        this.config = new Config()
        // x и y - это кординаты
        // dx и dy скорость по вертикали и горизонтали
        this.x = 160
        this.y = 160
        this.dx = this.config.sizeCell
        this.dy = 0
        // tails масив ячеек под контролем змейки
        this.tails = []
        this.maxTails = 3

        // метод control отвечает за управление змейкой
        this.control()

    }

    update(berry, score, canvas, speed) {
        this.x += this.dx
        this.y += this.dy

        if (this.x < 0) {
            this.x = canvas.element.width - this.config.sizeCell
        } else if (this.x >= canvas.element.width) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = canvas.element.height - this.config.sizeCell
        } else if (this.y >= canvas.element.height) {
            this.y = 0
        }

        this.tails.unshift( {x: this.x, y: this.y} )

        if ( this.tails.length > this.maxTails ) {
            this.tails.pop()
        }

        this.tails.forEach((el, index) => {

            //проверка, когда голова змейки попадает на яблоко, увеличиваем очки и заного создаем яблоко в новом месте
            if (el.x === berry.x && el.y === berry.y ) {
                this.maxTails++
                score.incScore(speed)
                berry.randomPosition()
            }

            // проверка на соприкрсновение змейки с хвостом
            for ( let i = index + 1; i < this.tails.length; i++) {

                if ( el.x == this.tails[i].x && el.y == this.tails[i].y ) {
                    score.saveBest()
                    this.death()
                    score.setToZero()
                    berry.randomPosition()
                }

            }
        } )

    }

    draw(context) {

        this.tails.forEach((el, index) => {
            if (index == 0) {
                context.fillStyle = '#abd904'
            } else {
                context.fillStyle = '#3ba000'
            }
            context.fillRect( el.x, el.y, this.config.sizeCell, this.config.sizeCell )
        } )
    }

    // метод отвечает за смерть змейки и обнуление значений
    death() {
        this.x = 160
        this.y = 160
        this.dx = this.config.sizeCell
        this.dy = 0
        this.tails = []
        this.maxTails = 3
    }


    control() {

        // добавляем события для обработки клавиш
        document.addEventListener('keydown', (e) => {
            if ( e.code == 'ArrowUp' ) {
                this.dy = -this.config.sizeCell
                this.dx = 0
            } else if ( e.code == 'ArrowLeft' ) {
                this.dx = -this.config.sizeCell
                this.dy = 0
            } else if ( e.code == 'ArrowDown' ) {
                this.dy = this.config.sizeCell
                this.dx = 0
            } else if ( e.code == 'ArrowRight' ) {
                this.dx = this.config.sizeCell
                this.dy = 0
            }
        })

    }

}