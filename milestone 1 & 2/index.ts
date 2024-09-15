const toggle_bt=document.getElementById('bt') as HTMLButtonElement;
const skill=document.getElementById('os') as HTMLElement;

toggle_bt.addEventListener('click', () => {
   if(skill.style.display === 'none'){
    skill.style.display = 'block';
   }
   else{
    skill.style.display = 'none';
   }  
});

