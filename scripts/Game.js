import Berry from './Berry.js'
import Canvas from './Canvas.js'
import GameLoop from './GameLoop.js'
import Score from './Score.js'
import Snake from './Snake.js'
import Config from "./Config.js";


class Game {

    constructor(container) {

        this.canvas = new Canvas(container)
        //создаем объекты классов
        this.snake = new Snake()
        this.berry = new Berry(this.canvas)
        this.score = new Score('.game-score .score-count', '.best-score', 0)
        // запускаем игровой цикл
        // цикл принимает 2 параметра update это какая то логика игры (например хотим изменить координаты змейки
        // то это будет в этом методе происходить
        // 2 параметр draw, он отвечает за всю отрисовку в канвасе
        new GameLoop(this.update.bind(this), this.draw.bind(this))

    }

    update() {
        this.snake.update(this.berry, this.score, this.canvas)

    }

    draw() {
        // очистка канваса
        this.canvas.context.clearRect(0, 0, this.canvas.element.width, this.canvas.element.height)

        // отрисовка змейки и ягоды
        this.snake.draw(this.canvas.context)
        this.berry.draw(this.canvas.context)

    }

}

new Game(document.querySelector('.canvas-wrapper'))
