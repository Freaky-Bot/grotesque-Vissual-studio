// DIALOGUE SYSTEM 
// aka: how cats say things in a cute way
// DO NOT TOUCH THIS IF YOU VALUE YOUR SANITY lol

export class DialogueSystem {
    // translation table cuz im lazy
    private static uwuMap: Record<string, string> = {
        'l': 'w',
        'r': 'w',
        'L': 'W',
        'R': 'W',
        'the ': 'teh ',
        'you': 'youw',
        'ing': 'iwng',
        'er': 'eww',
        'or': 'oww',
        'ur': 'uwuw',
        'ise': 'iwse',
        'ize': 'iwze'
    };

    // just slap uwu on everything lol
    static convertToUwu(text: string): string {
        let result = text;
        
        // go through the map and replace stuff
        for (const [key, value] of Object.entries(this.uwuMap)) {
            const regex = new RegExp(key, 'g');
            result = result.replace(regex, value);
        }

        // add random cat emojis cuz why not
        if (Math.random() > 0.5) {
            result += ' UwU';
        }
        if (Math.random() > 0.7) {
            result += ' 😸';
        }
        if (Math.random() > 0.8) {
            result += ' ✨';
        }

        return result;
    }

    // lil cat reactions to stuff
    static getRandomReaction(): string {
        const reactions = [
            'meow meow~ 💕',
            'purrrrrr~ UwU',
            'nyaaaa!! ✨',
            'mrow? 😸',
            'pls no hurt me pwease~ 🥺',
            'i am inevitable... *cat god noises*',
            'bottom text',
            'E',
            '...is this loss?',
            'sowwy fow the messiness uwu',
            'beep boop meow'
        ];

        return reactions[Math.floor(Math.random() * reactions.length)];
    }

    // make cat talk like an idiot
    static getIdiotCatSpeech(): string {
        const stupidThings = [
            "why is there water in my water bowl??? 🤔",
            "i punt the red dot but it wun away :(",
            "hwuman pls feed i am so hungy",
            "why do the hooman make big loud box sounds???",
            "i shall now sit in all your bags",
            "the zoomies have taken me!!!",
            "is pwain, why confuse?",
            "i headbutt now, it is law",
            "the law of cat: if it fits...",
            "i do not care about your 'rules' pwerson"
        ];

        return stupidThings[Math.floor(Math.random() * stupidThings.length)];
    }

    // sometimes cats just yell
    static getRandomYell(): string {
        const yells = [
            'MEOOOOOOOOWWWWWW',
            'AHHHHHHHHHHHHH',
            'REEEEEEEEE',
            'SCREEEEEECH',
            'the old gods awaken...',
            '※ ※ ※ ※',
            'NYAAAAAAAHHH'
        ];

        return yells[Math.floor(Math.random() * yells.length)];
    }
}
