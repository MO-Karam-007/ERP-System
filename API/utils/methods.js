
exports.generateCode = () =>
{
    // Generate random letters
    const letters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 26));

    // Generate random numbers (3 or 4 digits)
    const numbers = Math.floor(Math.random() * 9000) + 1000;

    // Combine letters and numbers
    const code = letters + '_' + numbers;
    console.log(`Code : `, code);

    return code;
}


exports.findOneAndUpdate = ()=>{

    
}