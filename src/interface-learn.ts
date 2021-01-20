interface ClockInterface {
  tick(): void
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, minute: number) {}
  tick() {
    console.log('beep beep')
  }
}

let clock = new Clock(7, 22)
clock.tick()
