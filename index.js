

javascript:(function() {
    // Check if the button already exists to prevent duplicates
    if (document.getElementById('bw-floating-btn')) return;

    // Create the button element
    const btn = document.createElement('button');
    btn.id = 'bw-floating-btn';
    btn.innerHTML = 'B&W';

    // Style the button
    btn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #000;
        color: #fff;
        border: 2px solid #fff;
        font-weight: bold;
        cursor: pointer;
        z-index: 1000000;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: transform 0.2s;
    `;

    // Create the style for the grayscale effect
    const styleId = 'bw-toggle-effect';
    let isGray = false;

    btn.onclick = function() {
        let styleTag = document.getElementById(styleId);
        if (!isGray) {
            styleTag = document.createElement('style');
            styleTag.id = styleId;
            styleTag.innerHTML = 'html { filter: grayscale(100%) !important; }';
            document.head.appendChild(styleTag);
            btn.style.background = '#fff';
            btn.style.color = '#000';
            btn.style.border = '2px solid #000';
            isGray = true;
        } else {
            styleTag.remove();
            btn.style.background = '#000';
            btn.style.color = '#fff';
            btn.style.border = '2px solid #fff';
            isGray = false;
        }
    };

    // Hover effect
    btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
    btn.onmouseout = () => btn.style.transform = 'scale(1.0)';

    document.body.appendChild(btn);
})();