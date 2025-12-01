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
    let isInitialized = false;

    // Reduced smoothing - higher value = less smooth, more responsive
    const ease = 0.35; // Changed from typical 0.15 to 0.35 for less smoothing

    // Hide cursor initially
    cursor.style.opacity = '0';

    // Update mouse position and initialize cursor position on first move
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Initialize cursor at mouse position on first movement
        if (!isInitialized) {
            cursorX = mouseX;
            cursorY = mouseY;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            cursor.style.opacity = '1';
            isInitialized = true;
        }
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
    // Exclude .teacher_arrow links since they're inside .teachers_wrap where cursor is hidden
    const interactiveElements = document.querySelectorAll('a:not(.teacher_arrow), button, [role="button"], input, textarea, select, .day_row');

    interactiveElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('is-hovering');
        });

        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('is-hovering');
        });
    });

    // Hide cursor on fullscreen menu links (they have pink circles)
    // Link box is constrained to fit content with CSS width: fit-content
    const fullscreenMenuLinks = document.querySelectorAll('.menu-fullscreen_link');

    fullscreenMenuLinks.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.style.opacity = '0';
        });

        element.addEventListener('mouseleave', function() {
            cursor.style.opacity = '1';
        });
    });

    // Hide cursor on navigation menu links (same behavior as fullscreen menu)
    const navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            cursor.style.opacity = '0';
        });

        element.addEventListener('mouseleave', function() {
            cursor.style.opacity = '1';
        });
    });

    // Hide cursor when pink badge appears (on teacher item hover or hero image hover)
    // Use instant hide/show with no transition to prevent jumps
    const teacherItems = document.querySelectorAll('.teacher_item');
    const heroImageWrap = document.querySelector('.teachers_image-wrap');
    let isOverTeacher = false;
    let hideTimeout = null;

    teacherItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            isOverTeacher = true;
            // Clear any pending show timeout
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
            // Instant hide with no transition
            cursor.style.transition = 'none';
            cursor.style.opacity = '0';
        });

        item.addEventListener('mouseleave', function() {
            isOverTeacher = false;
            // Tiny delay to prevent flicker when moving between items
            hideTimeout = setTimeout(function() {
                if (!isOverTeacher) {
                    cursor.style.transition = 'none';
                    cursor.style.opacity = '1';
                }
            }, 16); // One frame at 60fps
        });
    });

    // Also hide cursor on hero image hover
    if (heroImageWrap) {
        heroImageWrap.addEventListener('mouseenter', function() {
            isOverTeacher = true;
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
            cursor.style.transition = 'none';
            cursor.style.opacity = '0';
        });

        heroImageWrap.addEventListener('mouseleave', function() {
            isOverTeacher = false;
            hideTimeout = setTimeout(function() {
                if (!isOverTeacher) {
                    cursor.style.transition = 'none';
                    cursor.style.opacity = '1';
                }
            }, 16);
        });
    }

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
    });

})();
