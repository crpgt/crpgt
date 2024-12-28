const hoverTarget = document.getElementById('nodisponible');
const tooltipText = 'No disponible';

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
tooltip.textContent = tooltipText;
hoverTarget.appendChild(tooltip);

hoverTarget.addEventListener('mouseenter', () => {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
});

hoverTarget.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
});
