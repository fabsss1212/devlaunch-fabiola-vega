type Fansize = 'small' | 'medium' |'large'
type FanColor = 'white' | 'black' |'gray'
type FanSpeed = 0 | 1 | 2 | 3

class Fan {
  public speed: FanSpeed
  constructor (
    public size: Fansize,
    public type: string,
    public color: FanColor

  ) {
    this.type = type
    this.size = size
    this.color = color
    this.speed = 0



  }


}

const fan1 = new Fan ('small', 'Sony','white')

console.log (fan1.speed)