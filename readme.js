const fs = require('fs');

class Readme {
    constructor(question) {
        this.question = question;
        this.projectName = `# ${this.question.projectName}\r\n\r\n`;
        this.descriptionHeading = `## Description:\r\n\r\n`;
        this.description = `${this.question.description}\r\n`;
    }

    Write() {
        let readmeContent = this.projectName;
        readmeContent += this.descriptionHeading;
        readmeContent += this.description;

        fs.writeFile('Readme.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Readme file written successfully!')
        );
    }
}

module.exports = Readme;