const fs = require('fs');
const path = require('path');
const readline = require('readline');

function getInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input.trim());
    });
  });
}

function copyFile() {
  getInput('Enter the path of the directory you want to copy from or type "exit" to terminate the program:')
    .then((firstPath) => {
      if (firstPath.toLowerCase() === "exit") {
        console.log('Program terminating...\n\nSee you later');
        return;
      }

      fs.readdir(firstPath, (err, files) => {
        if (err) {
          console.log('Directory Not Found');
          copyFile();
        } else {
          console.log('Directory Found');
          const jpegFiles = files.filter((file) => {
            return path.extname(file) === ".jpeg";
          });

          getInput('Enter the path of the directory you want to copy to or type "exit" to terminate the program:')
            .then((secondPath) => {
              if (secondPath.toLowerCase() === "exit") {
                console.log('Program terminating...\n\nSee you later');
                return;
              }

              fs.access(secondPath, fs.constants.F_OK, (error) => {
                if (error) {
                  console.log('File does not exist or is not accessible');
                  copyFile();
                } else {
                  console.log('File exists!');
                  jpegFiles.forEach((jpeg) => {
                    const sourceFilePath = path.join(firstPath, jpeg);
                    const destinationFilePath = path.join(secondPath, jpeg);
                    fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
                      if (err) {
                        console.error('Error copying file:', err);
                      } else {
                        console.log(`File ${jpeg} copied successfully!`);
                      }
                    });
                  });
                }
              });
            });
        }
      });
    });
}

copyFile();