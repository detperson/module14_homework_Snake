import Config from './Config.js'

export default class GameLoop {

    //update это изменения в игре
    //draw это отрисовка на экране
    constructor(update, draw) {

        this.update = update
        this.draw = draw

        this.config = new Config()

        // привязка к контексту и запускаем игровой цикл (?)
        this.animate = this.animate.bind(this)
        this.animate()

    }

    animate() {

        requestAnimationFrame(this.animate)
        if ( ++this.config.step < this.config.maxStep) {
            return
        }
        this.config.step = 0

        this.update()
        this.draw()

    }

}