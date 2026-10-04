import './style.css';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let toastTimer,gameTimer=null,remaining=30,score=0;
function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.classList.remove('show'),2100)}
$$('.nav').forEach(b=>b.onclick=()=>{$$('.nav').forEach(x=>x.classList.toggle('active',x===b));$$('.page').forEach(p=>p.classList.toggle('active',p.id===b.dataset.page));scrollTo({top:0,behavior:'smooth'})});
$('#check').onclick=()=>toast('Demo check only: connect native Android telemetry for real readings.');
$('#launch').onclick=()=>toast('Native installed-game launch integration is not connected in web preview.');
$('#addGame').onclick=$('#slot').onclick=()=>toast('Next native module: Android package discovery and game picker.');
$('#aboutBtn').onclick=()=>toast('Insane Booster v1.1 · Red + Black');
$$('.tile').forEach(b=>b.onclick=()=>toast(b.dataset.tip));
$$('.profile').forEach(b=>b.onclick=()=>{$$('.profile').forEach(x=>x.classList.toggle('selected',x===b));toast(`${$('b',b).textContent} profile selected (recommendations only).`)});
$$('.row').forEach(b=>b.onclick=()=>toast('Native Android settings shortcut will be wired in Android build.'));
$$('.switch').forEach(b=>b.onclick=()=>{b.classList.toggle('on');b.setAttribute('aria-pressed',String(b.classList.contains('on')))});
const ch=$('#crosshair');function updateCross(){const size=+$('#size').value,gap=+$('#gap').value,thick=+$('#thickness').value;ch.style.setProperty('--s',size+'px');ch.style.setProperty('--g',gap+'px');ch.style.setProperty('--t',thick+'px');$('#sizeOut').value=size;$('#gapOut').value=gap;$('#thickOut').value=thick}
['size','gap','thickness'].forEach(id=>$('#'+id).addEventListener('input',updateCross));
$$('.swatches button').forEach(b=>b.onclick=()=>{$$('.swatches button').forEach(x=>x.classList.toggle('selected',x===b));ch.style.setProperty('--c',b.dataset.color)});
$('#saveCross').onclick=()=>{const p={color:getComputedStyle(ch).getPropertyValue('--c').trim(),size:$('#size').value,gap:$('#gap').value,thickness:$('#thickness').value};try{localStorage.setItem('ib-crosshair',JSON.stringify(p));toast('Practice preset saved on this device.')}catch{toast('Preset preview updated.')}};
$('#start').onclick=()=>{if(gameTimer){clearInterval(gameTimer);gameTimer=null}score=0;remaining=30;$('#score').textContent='SCORE 0';$('#time').textContent='30 SEC';$('#hint').textContent='TAP THE TARGET';moveTarget();$('#target').style.display='block';gameTimer=setInterval(()=>{remaining--;$('#time').textContent=remaining+' SEC';if(remaining<=0){clearInterval(gameTimer);gameTimer=null;$('#target').style.display='none';$('#hint').textContent=`SESSION COMPLETE · ${score} HITS`;toast(`Practice complete: ${score} hits`) }},1000)};
function moveTarget(){const a=$('#arena'),t=$('#target'),maxX=Math.max(0,a.clientWidth-40),maxY=Math.max(0,a.clientHeight-40);t.style.left=(Math.random()*maxX)+'px';t.style.top=(Math.random()*maxY)+'px'}
$('#target').onclick=()=>{if(!gameTimer)return;score++;$('#score').textContent='SCORE '+score;moveTarget()};
updateCross();
