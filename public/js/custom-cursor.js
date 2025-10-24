/**
 * Custom Cursor
 * Smooth cursor following with hover effects
 */

(function() {
    'use strict';

    const cursor = document.querySelector('.custom-cursor');

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Reduced smoothing - higher value = less smooth, more responsive
    const ease = 0.35; // Changed from typical 0.15 to 0.35 for less smoothing

    // Update mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animate cursor with less smoothing
    function animate() {
        // Lerp (linear interpolation) with higher ease value for less smoothing
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .day_row, .teacher_item');

    interactiveElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('is-hovering');
        });

        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('is-hovering');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
    });

})();
