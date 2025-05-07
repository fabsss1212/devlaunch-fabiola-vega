type InstrumentType = 'viento' | 'cuerda' | 'percusion'

abstract class Instrument {
    constructor(public type: InstrumentType) {
        
    }
    play() {}
}

class Guitar extends Instrument {
    constructor() {
            super('cuerda')
        }
        play() {
            console.log ("Strum, strum...🎸")
        }
}


class Flaute extends Instrument {
    constructor() {
        super('viento')
    }
    play() {
        console.log ("flusssh, flushhh...🪈")
    }
    
}


class Drums extends Instrument {
    constructor(){
        super ('cuerda')
    } 
    console.log ("boom, boom...🥁 ")
    
   

}
  
  



class Artist {
    constructor() {}

    playInstrumeent (Instrument: Instrument ) {
        Instrument.play()
        console.log(Instrument.type)
    }
}


const guitar1 = new Guitar() 
const flaute1 = new Flaute ()

const artist1 = new Artist

guitar1.play()
flaute1.play ()
artist1.playInstrumeent()
