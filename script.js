var colorRange = document.querySelector('.color-range');
var randomRange = Math.floor(100*Math.random());
var colorChoice = document.getElementById("color-choice");
//var btn = document.querySelector('button');
//var resultPara = document.querySelector('.result');

var globalValue = 50;

window.onload = function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if(urlParams.size > 0) {
    globalValue = urlParams.get('h');
  } else {
    globalValue = randomRange;
  }
    colorRange.value = globalValue;
    var hue = ((globalValue/100)*360).toFixed(0)
    var hsl = "hsl("+ hue + ", 100%, 50%)"
    var bgHsl = "hsl("+ hue + ", 100%, 50%)"
    colorRange.style.color = hsl
    colorChoice.style.color = hsl
    colorChoice.innerHTML = hsl
    document.body.style.background = bgHsl
};

/*
btn.addEventListener('click', async () => {
  try {
    await navigator.share('http://colormefound.com')
    resultPara.textContent = 'Link shared successfully'
  } catch(err) {
    resultPara.textContent = 'Error: ' + err
  }
});

function shareLink() {
  console.log('start');
  var promise = navigator.share('poop');
  console.log(promise);
}
*/

function shareLink() {
  if (navigator.share) {
    navigator.share({
      title: 'Color Me Found',
      text: 'Look for this color in the crowd',
      url: 'https://colormefound.com',
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}

colorRange.addEventListener('input', function(e) {
  var hue = ((this.value/100)*360).toFixed(0)
  globalHue = hue;
  var hsl = "hsl("+ hue + ", 100%, 50%)"
  var bgHsl = "hsl("+ hue + ", 100%, 50%)"
  colorRange.style.color = hsl
  colorChoice.style.color = hsl
  colorChoice.innerHTML = hsl
  document.body.style.background = bgHsl
});

var event = new Event('input');
colorRange.dispatchEvent(event);