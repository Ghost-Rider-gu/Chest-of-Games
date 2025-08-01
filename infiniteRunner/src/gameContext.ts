import kaplay from 'kaplay';

const gameContext = kaplay({
    width: 1280,
    height: 720,
    letterbox: true,
    global: false,
    buttons: {
        jump: {
            keyboard: ['Space'],
            mouse: 'left',
        }
    },
    touchToMouse: true,
    debug: true,
    pixelDensity: window.devicePixelRatio
})

export default gameContext;
