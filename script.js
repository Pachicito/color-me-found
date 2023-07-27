var colorRange = document.querySelector('.color-range');
var randomRange = Math.floor(100*Math.random());
var colorChoice = document.getElementById("color-choice");
//var btn = document.querySelector('button');
//var resultPara = document.querySelector('.result');

var globalValue = 50;

window.onload = function() {
  //const queryString = window.location.search;
  const urlParams = new URLSearchParams(location.search);
  console.log('params:'+urlParams);
  if(urlParams != '') {
    globalValue = urlParams.get('h');
    console.log('value='+globalValue);
    /*
    if(navigator.userAgentData.mobile) {
      const h = urlParams.split('=');
      globalValue = h[1];
      console.log('mobile='+globalValue);
    } else {
      globalValue = urlParams.get('h');
      console.log('desktop='+globalValue);
    }*/
  } else {
    globalValue = randomRange;
    console.log('no Params');
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
      url: 'https://colormefound.com?h='+globalValue,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}

colorRange.addEventListener('input', function(e) {
  globalValue = this.value;
  var hue = ((globalValue/100)*360).toFixed(0)
  var hsl = "hsl("+ hue + ", 100%, 50%)"
  var bgHsl = "hsl("+ hue + ", 100%, 50%)"
  colorRange.style.color = hsl
  colorChoice.style.color = hsl
  colorChoice.innerHTML = hsl
  document.body.style.background = bgHsl
});

var event = new Event('input');
colorRange.dispatchEvent(event);