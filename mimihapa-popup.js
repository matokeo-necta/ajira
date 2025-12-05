
// MimiHapa MEDICINE WhatsApp Promotion Popup
// Copy and paste this entire code into an HTML/JavaScript widget

(function() {
  'use strict';
  
  // Configuration - Customize these values
  const config = {
    whatsappNumber: '255XXXXXXXXX', // Replace with your WhatsApp number
    phoneNumber: '+255 XXX XXX XXX', // Replace with your phone number
    price: 'Tsh 5000/=',
    delayTime: 1000, // Show popup after 1 second
    showOnExit: true, // Show when user tries to leave
    cookieExpiry: 1 // Days to remember closed popup
  };
  
  // Create CSS Styles
  const styles = `
    /* MimiHapa Popup Styles */
    .mimihapa-popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 999999;
      display: none;
      justify-content: center;
      align-items: center;
      animation: mimihapaFadeIn 0.3s ease;
      padding: 20px;
    }
    
    .mimihapa-popup-overlay.active {
      display: flex !important;
    }
    
    .mimihapa-popup-container {
      background: white;
      border-radius: 12px;
      width: 100%;
      max-width: 480px;
      position: relative;
      animation: mimihapaSlideUp 0.4s ease;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      border: 3px solid #25D366;
      overflow: hidden;
    }
    
    .mimihapa-popup-close {
      position: absolute;
      top: 12px;
      right: 12px;
      background: #ff4444;
      color: white;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 22px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: all 0.2s;
      line-height: 1;
    }
    
    .mimihapa-popup-close:hover {
      background: #ff0000;
      transform: scale(1.1);
    }
    
    .mimihapa-popup-header {
      background: linear-gradient(135deg, #075E54, #128C7E);
      color: white;
      padding: 20px;
      text-align: center;
    }
    
    .mimihapa-popup-title {
      font-size: 22px;
      margin: 0 0 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    
    .mimihapa-popup-price {
      background: #FFD700;
      color: #333;
      padding: 8px 15px;
      border-radius: 6px;
      font-weight: bold;
      font-size: 18px;
      display: inline-block;
      border: 2px solid #FF9800;
    }
    
    .mimihapa-popup-body {
      padding: 20px;
    }
    
    .mimihapa-benefits-title {
      color: #075E54;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .mimihapa-benefits-list {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;
    }
    
    .mimihapa-benefits-list li {
      padding: 8px 0;
      padding-left: 28px;
      position: relative;
      font-size: 14px;
    }
    
    .mimihapa-benefits-list li:before {
      content: "✓";
      color: #25D366;
      font-weight: bold;
      font-size: 16px;
      position: absolute;
      left: 0;
      top: 8px;
    }
    
    .mimihapa-offer-box {
      background: #E3F2FD;
      border-left: 4px solid #2196F3;
      padding: 12px 15px;
      border-radius: 6px;
      margin: 15px 0;
      font-size: 14px;
    }
    
    .mimihapa-contact-box {
      text-align: center;
      margin-top: 20px;
      padding-top: 15px;
      border-top: 2px dashed #ddd;
    }
    
    .mimihapa-contact-title {
      color: #D32F2F;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 15px;
    }
    
    .mimihapa-whatsapp-btn {
      display: inline-block;
      background: #25D366;
      color: white;
      text-decoration: none;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      margin: 10px 0;
      transition: all 0.3s;
      animation: mimihapaPulse 2s infinite;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
    
    .mimihapa-whatsapp-btn:hover {
      background: #128C7E;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
    }
    
    .mimihapa-phone {
      color: #666;
      font-size: 13px;
      margin-top: 8px;
    }
    
    /* Animations */
    @keyframes mimihapaFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes mimihapaSlideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes mimihapaPulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
      70% { box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
      100% { boxShadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    
    /* Mobile Responsive */
    @media (max-width: 480px) {
      .mimihapa-popup-container {
        max-width: 95%;
      }
      
      .mimihapa-popup-title {
        font-size: 18px;
      }
      
      .mimihapa-popup-price {
        font-size: 16px;
        padding: 6px 12px;
      }
      
      .mimihapa-whatsapp-btn {
        font-size: 14px;
        padding: 10px 15px;
      }
    }
  `;
  
  // Create HTML Structure
  const createPopupHTML = () => {
    return `
      <div class="mimihapa-popup-overlay" id="mimihapaPopup">
        <div class="mimihapa-popup-container">
          <button class="mimihapa-popup-close" id="mimihapaCloseBtn">&times;</button>
          
          <div class="mimihapa-popup-header">
            <h2 class="mimihapa-popup-title">
              <span>📢</span> MimiHapa MEDICINE
            </h2>
            <div class="mimihapa-popup-price">Lipia Hela Ya Bando ${config.price}</div>
          </div>
          
          <div class="mimihapa-popup-body">
            <p class="mimihapa-benefits-title">
              Upate Materials Yote Unayotaka Kupitia WhatsApp/Telegram Yako:
            </p>
            
            <ul class="mimihapa-benefits-list">
              <li>Past papers</li>
              <li>CAT1, CAT2 & End Of Semister</li>
              <li>NACTVECT Past Papers (Semister 2)</li>
              <li>Medical Books</li>
              <li>Mitihani Kutoka Vyuo Mbalimbali</li>
            </ul>
            
            <div class="mimihapa-offer-box">
              💡 Utapata Na Usaidizi Shida Zako Za Masomo, Msaada Moja Kwa Moja Kutoka <strong>MimiHapa MEDICINE</strong>
            </div>
            
            <div class="mimihapa-contact-box">
              <p class="mimihapa-contact-title">🔴 Wasiliana Nasi Kupitia WhatsApp Au Piga:</p>
              
              <a href="https://wa.me/${config.whatsappNumber}?text=Nataka%20kupata%20materials%20ya%20MimiHapa%20MEDICINE" 
                 class="mimihapa-whatsapp-btn" 
                 target="_blank" 
                 rel="noopener noreferrer">
                📱 Click Hapa Kutuma Ujumbe WhatsApp
              </a>
              
              <p class="mimihapa-phone">Au piga: <strong>${config.phoneNumber}</strong></p>
            </div>
          </div>
        </div>
      </div>
    `;
  };
  
  // Cookie/Storage Functions
  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };
  
  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  
  // Show Popup
  const showPopup = () => {
    const popup = document.getElementById('mimihapaPopup');
    if (popup) {
      // Check if user closed popup recently
      const popupClosed = getCookie('mimihapa_closed');
      if (popupClosed === 'true') {
        return;
      }
      
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };
  
  // Hide Popup
  const hidePopup = () => {
    const popup = document.getElementById('mimihapaPopup');
    if (popup) {
      popup.classList.remove('active');
      document.body.style.overflow = '';
      setCookie('mimihapa_closed', 'true', config.cookieExpiry);
    }
  };
  
  // Initialize Popup
  const initPopup = () => {
    // Add styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    // Add popup HTML
    const popupDiv = document.createElement('div');
    popupDiv.innerHTML = createPopupHTML();
    document.body.appendChild(popupDiv.firstElementChild);
    
    // Get elements
    const closeBtn = document.getElementById('mimihapaCloseBtn');
    const popup = document.getElementById('mimihapaPopup');
    
    // Add event listeners
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hidePopup();
      });
    }
    
    if (popup) {
      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          hidePopup();
        }
      });
    }
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popup.classList.contains('active')) {
        hidePopup();
      }
    });
    
    // Show popup after delay
    setTimeout(showPopup, config.delayTime);
    
    // Show on exit intent
    if (config.showOnExit) {
      let mouseLeft = false;
      document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 10 && !mouseLeft) {
          mouseLeft = true;
          showPopup();
        }
      });
    }
  };
  
  // Wait for page to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPopup);
  } else {
    initPopup();
  }
  
  // Make functions available globally (optional)
  window.MimiHapaPopup = {
    show: showPopup,
    hide: hidePopup,
    config: config
  };
  
})();

