var toggle_bt = document.getElementById('bt');
var skill = document.getElementById('os');
toggle_bt.addEventListener('click', function () {
    if (skill.style.display === 'none') {
        skill.style.display = 'block';
    }
    else {
        skill.style.display = 'none';
    }
});
