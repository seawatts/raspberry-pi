import Gpio from 'onoff';

const LED = new Gpio.Gpio(17, 'out');
const blinkInterval = setInterval(blinkLED, 550);

function blinkLED() {
  if (LED.readSync() === 0) {
    LED.writeSync(1);
  } else {
    LED.writeSync(0);
  }
}

function endBlink() {
  clearInterval(blinkInterval);
  LED.writeSync(0);
  LED.unexport();
}

setTimeout(endBlink, 5000);

