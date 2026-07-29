const { spawn } = require('child_process');
const { execSync } = require('child_process');

async function preview() {
  try {
    const child = spawn('cloudflared', ['tunnel', '--url', 'http://localhost:3000'], { stdio: 'pipe' });

    let stdout = '';
    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    await new Promise((resolve, reject) => {
      child.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`Command exited with code ${code}`));
        }
        resolve();
      });
    });

    const tryCloudflareUrl = stdout.match(/https:\/\/trycloudflare\.com\/[a-zA-Z0-9]+/)[0];
    console.log('Try Cloudflare URL:', tryCloudflareUrl);

    execSync(`echo "${tryCloudflareUrl}" | pbcopy`);
    console.log('URL copied to clipboard');

    execSync(`open ${tryCloudflareUrl}`);
  } catch (error) {
    console.error('Error during preview:', error.message);
  }
}

preview();
