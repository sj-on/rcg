const h1 = document.getElementById('trashgoeshere');

note = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
accidental = ['#', '♭', '']
thirdfifth = ['min', 'maj', 'dim', 'aug']
seventh = ['maj7', 'min7']
sussybois = ['sus2', 'sus4']
inv = ['a', 'b', 'c', 'd']

n = note[Math.floor(Math.random()*note.length)]
tf = thirdfifth[Math.floor(Math.random()*thirdfifth.length)]
sev = seventh[Math.floor(Math.random()*seventh.length)]
sus = sussybois[Math.floor(Math.random()*sussybois.length)]
invert = inv[Math.floor(Math.random()*inv.length)]
acc = accidental[Math.floor(Math.random()*accidental.length)]

// console.log(n+tf+invert);
coinflip = Math.floor(Math.random()*3);

// console.log(coinflip);
if(!coinflip){
    // seventh chord chosen
    h1.innerHTML = `${n}${acc}<span>${tf}</span>${sev}<span>${invert}</span>`;
}
else if(coinflip == 1){
    h1.innerHTML = `${n}${acc}<span>${tf}</span>${invert}`;
}
else{
    // a sus chord
    h1.innerHTML = `${n}${acc}<span>${sus}</span>${invert}`;
}

// console.log(n+tf+sev);

// console.log('what hte heck?');