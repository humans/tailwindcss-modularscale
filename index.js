const ModularScale = require("modularscale-js");

module.exports = function({
    sizes = [
        { size: "sm", value: -1 },
        { size: "base", value: 0 },
        { size: "lg", value: 1 },
        { size: "xl", value: 2 },
        { size: "2xl", value: 3 },
        { size: "3xl", value: 4 },
        { size: "4xl", value: 5 }
    ],
    base = 16,
    ratio = 1.33,
    unit = "px",
    variants
}) {
    const ms = function(size) {
        const value = ModularScale(size, { base, ratio });

        if (unit === "px") {
            return Math.round(value) + unit;
        } else {
            return value.toFixed(2) + unit;
        }
    }

    return function({ addUtilities }) {
        const utilities = sizes.map(({ size, value }) => ({
            [`.ms-${size}`]: {
                fontSize: ms(value),
            },
        }));

        addUtilities(utilities, variants);
    }
}
