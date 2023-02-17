import Config from './Config.js'
import { getRandomInt } from "./SupportFunction.js";

export default class Berry {
    constructor(canvas) {

        this.x = 0
        this.y = 0
        this.canvas = canvas

        this.config = new Config()
        // установка ягоды в рандомную позицию
        this.randomPosition()
    }

    draw(context, score) {

        context.beginPath()
        context.fillStyle = '#A00034'
        context.arc(this.x + (this.config.sizeCell / 2), this.y + (this.config.sizeCell / 2), this.config.sizeBerry, 0, 2 * Math.PI)
        context.fill()

    }

    // функция для получения рандомных значений ягоды
    randomPosition() {
        this.x = getRandomInt(0, this.canvas.element.width / this.config.sizeCell) * this.config.sizeCell
        this.y = getRandomInt(0, this.canvas.element.width / this.config.sizeCell) * this.config.sizeCell

    }
}