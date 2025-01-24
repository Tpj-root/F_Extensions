let urls = [];
document.querySelectorAll('a[href$=".mp4"]').forEach(a => {
  urls.push(a.href);
});

let blob = new Blob([urls.join('\n')], { type: 'text/plain' });
let link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'mp4_urls.txt';
link.click();

