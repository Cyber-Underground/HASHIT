document.addEventListener('DOMContentLoaded', function () {
    const hashButton = document.getElementById('hash-button');
    const hashedOutput = document.getElementById('hashed-output');

    hashButton.addEventListener('click', function () {
        const inputString = document.getElementById('input-string').value;
        const hashAlgorithm = document.getElementById('hash-algorithm').value;

        const hash = hashString(inputString, hashAlgorithm);
        hashedOutput.textContent = `Hashed value: ${hash}`;
    });

    function hashString(inputString, algorithm) {
        const hashFunction = CryptoJS[algorithm.toUpperCase()];
        const hash = hashFunction(inputString);

        return hash.toString(CryptoJS.enc.Hex);
    }
});
