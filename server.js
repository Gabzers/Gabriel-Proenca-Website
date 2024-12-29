const express = require('express');
const fetch = require('node-fetch').default; // Ensure node-fetch is correctly imported
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/github/repos', async (req, res) => {
    const username = 'Gabzers';
    const token = process.env.GITHUB_TOKEN;

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                'Authorization': `token ${token}`
            }
        });

        if (response.status === 403) {
            return res.status(403).json({ error: 'Rate limit exceeded' });
        }

        const repos = await response.json();
        if (!Array.isArray(repos)) {
            console.error('Unexpected response format:', repos);
            return res.status(500).json({ error: 'Unexpected response format' });
        }

        res.json(repos);
    } catch (error) {
        console.error('Error fetching GitHub repos:', error.message);
        console.error('Error details:', error);
        res.status(500).json({ error: 'Error fetching GitHub repos' });
    }
});

app.get('/api/github/token', (req, res) => {
    const token = process.env.GITHUB_TOKEN;
    res.json({ token });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
