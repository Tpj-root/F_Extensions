(async () => {
    for (let i = 1; i <= 20; i++) {
        let url = `https://www.isaimini.meme/tamil-2022-movies/?page=${i}`;
        console.log(`Checking: ${url}`);

        try {
            let response = await fetch(url);
            let text = await response.text();
            let parser = new DOMParser();
            let doc = parser.parseFromString(text, "text/html");

            let links = [...doc.querySelectorAll('a[href^="/"]')];
            for (let link of links) {
                if (link.textContent.toLowerCase().includes("beast")) {
                    console.log(`"Beast" found on page ${i}: ${link.href}`);
                }
            }
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
        }
    }
})();

