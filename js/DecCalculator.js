import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    changeNumber(root){
        let activeElement = root.find('.active');

        activeElement.attr("contenteditable", "true");
        activeElement.trigger('focus');

        this.$calculatorDOMElement.find('.tooltip').fadeIn();
    }

    add(numberX, numberY) {
        const sumX = numberX.reduce((prev, curr) => prev.toString() + curr.toString());
        const sumY = numberY.reduce((prev, curr) => prev.toString() + curr.toString());
        const sumAll = parseInt(sumX) + parseInt(sumY);

        let result = [...sumAll.toString()];
        const resultLength = result.length;

        for(let j = 0; j < 9 - resultLength; j++){
            result.unshift(0);
        }
        result = result.map(value => parseInt(value));
        return result;
    }


    updateResult() {
        let root =  this.$calculatorDOMElement;
        let $resultElements = root.children(".group-number").children(".result-bit");
        for(let i = this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {
            let valueResult = $resultElements.eq(j).find(".active");
            valueResult.text(this.resultNumberArray[i]);
        }
    }

    initEvents() {
        this.$calculatorDOMElement.find(".display-number").on('click', (event) => {
            const parentLabel = $(event.target).parent(".display-number");
            this.changeNumber(parentLabel);
        })
        this.$calculatorDOMElement.find(".operator-bar").find("span").on('click', (e) => {
            this.checkNumber();
            this.updateResult();

        })
    }

}

export {DecCalculator};


