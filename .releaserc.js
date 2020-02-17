const { promisify } = require('util')
const dateFormat = require('dateformat')
const readFileAsync = promisify(require('fs').readFile)
const path = require('path')
// Given a `const` variable `TEMPLATE_DIR` which points to "<semantic-release-gitmoji>/lib/assets/templates"

// the *.hbs template and partials should be passed as strings of contents
// const template = readFileAsync(path.join(TEMPLATE_DIR, 'default-template.hbs'))
// const commitTemplate = readFileAsync(path.join(TEMPLATE_DIR, 'commit-template.hbs'))

module.exports = {
    plugins: [
        [
            'semantic-release-gitmoji', {
                releaseRules: {
                    major: [':boom:'],
                    minor: [':sparkles:'],
                    patch: [
                        ':bug:',
                        ':ambulance:',
                        ':lock:'
                    ]
                }
            }
        ],
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md",
                "changelogTitle": "# my-changelog-test"
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            "@semantic-release/git",
            {
                "assets": [
                    "src",
                    "dist",
                    "CHANGELOG.md",
                    "package.json",
                    "yarn.lock"
                ]
            }
        ]
    ]
}