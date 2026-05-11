/**
 * Accessibility Widget for China Dragon Restaurant
 * Provides accessibility controls for users with different needs
 */

(function() {
    'use strict';

    // Accessibility state
    const accessibilityState = {
        highContrast: false,
        grayscale: false,
        invertColors: false,
        largeText: false,
        readableFont: false,
        highlightLinks: false,
        reduceAnimations: false
    };

    // Load saved preferences from localStorage
    function loadPreferences() {
        const saved = localStorage.getItem('accessibilityPreferences');
        if (saved) {
            try {
                const preferences = JSON.parse(saved);
                Object.assign(accessibilityState, preferences);
                applyAllSettings();
            } catch (e) {
                console.error('Error loading accessibility preferences:', e);
            }
        }
    }

    // Save preferences to localStorage
    function savePreferences() {
        localStorage.setItem('accessibilityPreferences', JSON.stringify(accessibilityState));
    }

    // Apply all settings based on current state
    function applyAllSettings() {
        const body = document.body;
        
        // Apply or remove each class based on state
        body.classList.toggle('high-contrast', accessibilityState.highContrast);
        body.classList.toggle('grayscale', accessibilityState.grayscale);
        body.classList.toggle('invert-colors', accessibilityState.invertColors);
        body.classList.toggle('large-text', accessibilityState.largeText);
        body.classList.toggle('readable-font', accessibilityState.readableFont);
        body.classList.toggle('highlight-links', accessibilityState.highlightLinks);
        body.classList.toggle('reduce-animations', accessibilityState.reduceAnimations);

        // Update button states
        updateButtonStates();
    }

    // Update button active states
    function updateButtonStates() {
        document.querySelectorAll('.accessibility-control').forEach(button => {
            const feature = button.dataset.feature;
            if (feature && accessibilityState[feature]) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            } else {
                button.classList.remove('active');
                button.setAttribute('aria-pressed', 'false');
            }
        });
    }

    // Toggle a specific accessibility feature
    function toggleFeature(feature) {
        if (accessibilityState.hasOwnProperty(feature)) {
            accessibilityState[feature] = !accessibilityState[feature];
            applyAllSettings();
            savePreferences();
        }
    }

    // Reset all accessibility settings
    function resetAll() {
        Object.keys(accessibilityState).forEach(key => {
            accessibilityState[key] = false;
        });
        applyAllSettings();
        savePreferences();
    }

    // Toggle panel visibility
    function togglePanel() {
        const panel = document.getElementById('accessibility-panel');
        const button = document.getElementById('accessibility-button');
        const isActive = panel.classList.contains('active');
        
        if (isActive) {
            panel.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
        } else {
            panel.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            // Focus first control when opening
            setTimeout(() => {
                const firstControl = panel.querySelector('.accessibility-control');
                if (firstControl) firstControl.focus();
            }, 100);
        }
    }

    // Close panel
    function closePanel() {
        const panel = document.getElementById('accessibility-panel');
        const button = document.getElementById('accessibility-button');
        panel.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
        button.focus();
    }

    // Initialize the accessibility widget
    function init() {
        // Load saved preferences
        loadPreferences();

        // Set up event listeners
        const button = document.getElementById('accessibility-button');
        if (button) {
            button.addEventListener('click', togglePanel);
        }

        const closeBtn = document.getElementById('accessibility-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closePanel);
        }

        // Control buttons
        document.querySelectorAll('.accessibility-control').forEach(control => {
            control.addEventListener('click', function() {
                const feature = this.dataset.feature;
                if (feature) {
                    toggleFeature(feature);
                }
            });

            // Keyboard support
            control.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });

        // Reset button
        const resetBtn = document.getElementById('accessibility-reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetAll);
        }

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            const panel = document.getElementById('accessibility-panel');
            const button = document.getElementById('accessibility-button');
            
            if (panel.classList.contains('active') && 
                !panel.contains(e.target) && 
                !button.contains(e.target)) {
                closePanel();
            }
        });

        // Close panel with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const panel = document.getElementById('accessibility-panel');
                if (panel.classList.contains('active')) {
                    closePanel();
                }
            }
        });

        // Check for prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            accessibilityState.reduceAnimations = true;
            applyAllSettings();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// Made with Bob
