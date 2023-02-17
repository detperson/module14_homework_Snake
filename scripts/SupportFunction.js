// функции которые могут пригодиться в любом месте программы и не относятся к какому либо классу

export function getRandomInt(min, max) {
    return Math.floor( Math.random() * (max - min) + min)
}