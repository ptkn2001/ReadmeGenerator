const fs = require('fs');

class Readme {
    constructor(question) {
        this.question = question;
        this.projectName = `# ${this.question.projectName}\r\n\r\n`;
        this.description = `${this.question.description}\r\n`;
        this.installation = `${this.question.installation}\r\n`;
        this.usage = `${this.question.usage}\r\n`;
        this.license = `${this.question.license}\r\n`;
        this.contributing = `${this.question.contributing}\r\n`;
        this.tests = `${this.question.tests}\r\n`;
        this.username = `${this.question.username}`;
        this.email = `${this.question.email}`;
    }

    tableOfContentHeading = `## Table of Contents\r\n\r\n`;
    descriptionHeading = `## Description\r\n\r\n`;
    installationHeading = `## Installation\r\n\r\n`;
    usageHeading = `## Usage\r\n\r\n`;
    licenseHeading = `## License\r\n\r\n`;
    contributingHeading = `## Contributing\r\n\r\n`;
    testsHeading = `## Tests\r\n\r\n`;
    questionsHeading = `## Questions\r\n\r\n`;
    licenseISC = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\r\n\r\n`;
    licenseMIT = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\r\n\r\n`;
    licenseODbL = `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)\r\n\r\n`;

    Write() {
        let readmeContent = this.projectName;
        readmeContent += this.tableOfContentHeading;
        readmeContent += `[1. Description](#description)\r\n\r\n`
        readmeContent += `[2. Installation](#installation)\r\n\r\n`
        readmeContent += `[3. Usage](#usage)\r\n\r\n`
        readmeContent += `[4. License](#license)\r\n\r\n`
        readmeContent += `[5. Contributing](#contributing)\r\n\r\n`
        readmeContent += `[6. Tests](#tests)\r\n\r\n`
        readmeContent += `[7. Questions](#questions)\r\n\r\n`
        readmeContent += this.descriptionHeading;
        readmeContent += this.description;
        readmeContent += this.installationHeading;
        readmeContent += this.installation;
        readmeContent += this.usageHeading;
        readmeContent += '```\r\n';
        readmeContent += this.usage;
        readmeContent += '```\r\n';
        readmeContent += this.licenseHeading;
        if (this.license.toLowerCase() === "isc") {
            readmeContent += this.licenseISC;
            readmeContent += `This project used ISC license.\r\n\r\n`
        } else if (this.license.toLowerCase() === "mit") {
            readmeContent += this.licenseMIT;
            readmeContent += `This project used MIT license.\r\n\r\n`
        } else {
            readmeContent += this.licenseODbL;
            readmeContent += `This project used ODbL license.\r\n\r\n`
        }
        readmeContent += this.contributingHeading;
        readmeContent += this.contributing;
        readmeContent += this.testsHeading;
        readmeContent += this.tests;
        readmeContent += `![Howto video](howto.bmp)\r\n\r\n`
        readmeContent += this.questionsHeading;
        readmeContent += `My Github Profile: [${this.username}](https://github.com/${this.username})\r\n\r\n`;
        readmeContent += `For questions please email [${this.email}](mailto://${this.email})`;

        fs.writeFile('Readme.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Readme file written successfully!')
        );
    }
}

module.exports = Readme;