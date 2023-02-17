export default class Score {
    constructor(scoreBlock, bestScore, score = 0) {

        this.scoreBlock = document.querySelector(scoreBlock)
        this.bestScore = document.querySelector(bestScore)
        this.score = score

        this.draw()

    }

    // метод увеличения очков
    incScore() {
        this.score++
        this.draw()
    }

    // метод обнуления очков (если змейка съела себя)
    setToZero() {
        this.score = 0
        this.draw()
    }


    //метод записи лучшего результата
    saveBest() {
        if (+(localStorage.getItem('best')) < this.score) {
            localStorage.setItem('best', this.score)
        }
    }

    // метод который выводит очки на страницу
    draw() {
        this.scoreBlock.innerHTML = this.score
        if (localStorage.getItem('best') == null) {
            // если в localstorage нет записи лучших очков, то ничего не отображать
            // this.bestScore.innerHTML = 'Best: 0'
        } else {
            this.bestScore.innerHTML = 'Best:' + localStorage.getItem('best')
        }

    }
}