const { exec } = require('child_process');
const { clipboardWriteSync, clipboardReadSync } = require('clipboardy');

async function preview() {
  try {
    const { stdout } = await new Promise((resolve, reject) => {
      exec('cloudflared tunnel --url http://localhost:3000', (error, stdout, stderr) => {
        if (error) {
          reject(error);
        }
        resolve({ stdout, stderr });
      });
    });

    const tryCloudflareUrl = stdout.match(/https:\/\/trycloudflare\.com\/[a-zA-Z0-9]+/)[0];
    console.log('Try Cloudflare URL:', tryCloudflareUrl);

    clipboardWriteSync(tryCloudflareUrl);
    console.log('URL copied to clipboard');

    exec(`open ${tryCloudflareUrl}`);
  } catch (error) {
    console.error('Error during preview:', error.message);
  }
}

preview();
