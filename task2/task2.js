import * as fs from 'fs';
import fetch from 'node-fetch';
import axios from 'axios';
import AdmZip from 'adm-zip';
import sha from 'js-sha3';
import * as  path from 'path';

const { sha3_256 } = sha;
// Define your email
const email = 'rami.ror279@gmail.com'.toLowerCase();

// Download the ZIP file from Dropbox
async function downloadZip() {
  const url = 'https://www.dropbox.com/s/oy2668zp1lsuseh/task2.zip?dl=1';
  const response = await axios(url);
  //console.log('Axios Response:', response.data);
    // en el response.data viene el archivo zip


  //const buffer = await response.arrayBuffer();
  const zip = new AdmZip(response.data);
  const tempDir = './tempFiles';

  // Extract files from the zip into a temporary directory
  zip.extractAllTo(tempDir, true);

  return tempDir;
}

// Calculate SHA3-256 hash for each file
function calculateFileHashes(directory) {
  const files = fs.readdirSync(directory).filter(file => fs.statSync(path.join(directory, file)).isFile());
  const fileHashes = [];

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const fileBuffer = fs.readFileSync(filePath);

    // Calculate SHA3-256 hash (output 64 hex digits, lower case)
    const fileHash = sha3_256(fileBuffer);
    fileHashes.push(fileHash);
  });

  console.log('File hashes:', fileHashes);
  return fileHashes;
}

// Sort hashes, concatenate them, append email, and calculate final SHA3-256
function processHashes(hashes) {
    console.log('Hashes:', hashes);
  hashes.sort(); // Sort hashes lexicographically

  // Concatenate sorted hashes without a separator
  const concatenatedHashes = hashes.join('');
  console.log('Concatenated hashes:', concatenatedHashes);

  // Append the email in lowercase
  const finalString = concatenatedHashes + email;

  // Calculate the SHA3-256 of the final string
  const finalHash = sha3_256(finalString);

  return finalHash;
}

async function main() {
  try {
    //const directory = await downloadZip();

    // Step 1: Calculate SHA3-256 hashes for each file
    const fileHashes = calculateFileHashes('./task2');

    // Step 2: Process the hashes and calculate the final hash
    const finalHash = processHashes(fileHashes);

    // Step 3: Output the final 64 hex digits in lower case
    console.log('Final hash:', finalHash);
    console.log(`!task2 ${email} ${finalHash}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
