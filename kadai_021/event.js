const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
  setTimeout(()=> {
    const moji = document.getElementById('text');
    moji.textContent = 'ボタンをクリックしました';
  }, 2000);
})