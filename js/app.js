import { BinaryCalculator } from "./BinaryCalculator";
import { DecCalculator } from "./DecCalculator";

import "../scss/style.scss";



$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const decCalc = new DecCalculator(".dec-calculator");
})
