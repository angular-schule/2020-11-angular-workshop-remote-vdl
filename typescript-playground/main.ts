class Test {
    /**
     * Tolle Test Klasse
     * @param zahl toller Zahl
     */
    constructor(public zahl: number) {
        console.log('Hallo 😎', this.zahl);
    }
}


const test = new Test(42);