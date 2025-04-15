function analyzeText() {
    const text = document.getElementById("inputText").value;

    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
    const newlines = (text.match(/\n/g) || []).length;
    const special = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

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

    const outputDiv = document.getElementById("analysisOutput");
    outputDiv.innerHTML = `
        <h3>Basic Counts</h3>
        <ul>
            <li><strong>Letters:</strong> ${letters}</li>
            <li><strong>Words:</strong> ${words}</li>
            <li><strong>Spaces:</strong> ${spaces}</li>
            <li><strong>Newlines:</strong> ${newlines}</li>
            <li><strong>Special Symbols:</strong> ${special}</li>
        </ul>

        <h3>Pronouns</h3>
        <pre>${JSON.stringify(pronounCount, null, 2)}</pre>

        <h3>Prepositions</h3>
        <pre>${JSON.stringify(prepCount, null, 2)}</pre>

        <h3>Indefinite Articles</h3>
        <pre>${JSON.stringify(articleCount, null, 2)}</pre>
    `;
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("analysisOutput").innerHTML = "";
}