function analyzeText() {
    const text = document.getElementById("inputText").value;

    // Basic counts
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const newlineCount = (text.match(/\n/g) || []).length;
    const tabCount = (text.match(/\t/g) || []).length;
    const special = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    // Whitespace count (spaces + newlines + tabs as 4 spaces)
    const totalWhitespace = spaceCount + newlineCount + (tabCount * 4);

    // Tokenization and group counts
    const pronouns = ['i','you','he','she','it','we','they','me','him','her','us','them','my','your','his','their','our','its'];
    const prepositions = ['in','on','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','over','under'];
    const articles = ['a','an'];

    let pronounCount = {};
    let prepCount = {};
    let articleCount = {};

    const tokens = text.toLowerCase().match(/\b\w+\b/g) || [];
    tokens.forEach(token => {
        if (pronouns.includes(token)) {
            pronounCount[token] = (pronounCount[token] || 0) + 1;
        }
        if (prepositions.includes(token)) {
            prepCount[token] = (prepCount[token] || 0) + 1;
        }
        if (articles.includes(token)) {
            articleCount[token] = (articleCount[token] || 0) + 1;
        }
    });

    // Output
    const outputDiv = document.getElementById("analysisOutput");
    outputDiv.innerHTML = `
        <h3>Text Analysis</h3>
        <ul>
            <li><strong>Letters:</strong> ${letters}</li>
            <li><strong>Words:</strong> ${words}</li>
            <li><strong>Spaces:</strong> ${spaceCount}</li>
            <li><strong>Newlines:</strong> ${newlineCount}</li>
            <li><strong>Tabs:</strong> ${tabCount} (counted as ${tabCount * 4} spaces)</li>
            <li><strong>Special Symbols:</strong> ${special}</li>
            <li><strong>Total Whitespace (spaces + newlines + tabs as 4 spaces):</strong> ${totalWhitespace}</li>
        </ul>
        <h4>Pronoun Counts:</h4>
        <pre>${JSON.stringify(pronounCount, null, 2)}</pre>
        <h4>Preposition Counts:</h4>
        <pre>${JSON.stringify(prepCount, null, 2)}</pre>
        <h4>Indefinite Article Counts:</h4>
        <pre>${JSON.stringify(articleCount, null, 2)}</pre>
    `;
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("analysisOutput").innerHTML = "";
}
