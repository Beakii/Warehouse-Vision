export const rackCodeToIndexOrCode = (input) => {
    if (typeof input === "string") {
        // Convert rack code to index
        const code = input.toUpperCase();
        if (!/^[A-U][A-B]$/.test(code)) {
            throw new Error("Invalid rack code. First letter A–U, second letter A–B only.");
        }

        const first = code.charCodeAt(0) - 65;
        const second = code.charCodeAt(1) - 65;

        return first * 2 + second + 1;
    } else if (typeof input === "number") {
        // Convert index to rack code
        if (input < 1 || input > 42) {
            throw new Error("Index out of range (must be between 1 and 42).");
        }

        const adjusted = input - 1;
        const firstLetter = String.fromCharCode(65 + Math.floor(adjusted / 2));
        const secondLetter = String.fromCharCode(65 + (adjusted % 2));

        return `${firstLetter}${secondLetter}`;
    } else {
        throw new Error("Input must be either a string rack code or a number index.");
    }
};
