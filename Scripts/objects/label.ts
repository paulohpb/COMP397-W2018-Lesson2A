module objects {
    class Label extends createjs.Text {
        // Instants Variables 

        private _isCentered: boolean;


        // Public Properties

        // Constructor

        constructor(labelString: string, fontSize: string, fontFamily: string, fontColour: string, x: number = 0, y: number = 0,
            isCentered: boolean = false) {
            super(labelString, fontSize + " " + fontFamily, fontColour);

                if(isCentered){
                    this._isCentered = true;
                    this.regX = this.getMeasuredWidth() * 0,5;
                    this.regY = this.getMeasuredHeight() * 0,5;
                }

                this.x = x;
                this.y = y;

        }

        // Private Methods

        // Public Methods
    }
}