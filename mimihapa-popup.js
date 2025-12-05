// Create the popup HTML dynamically
const createPopupHTML = () => {
  return `
    <div id="whatsappPopup" class="whatsapp-popup" style="display: none;">
      <div class="popup-content">
        <button class="close-btn" id="popupCloseBtn">&times;</button>
        
        <div class="header">
          <h2>📢 MimiHapa MEDICINE</h2>
          <div class="highlight">Lipia Hela Ya Bando Tsh 5000/=</div>
        </div>
        
        <div class="benefits">
          <p>Upate Materials Yote Unayotaka Kupitia WhatsApp/Telegram Yako:</p>
          <ul>
            <li>✅ Past papers</li>
            <li>✅ CAT1, CAT2 & End Of Semister</li>
            <li>✅ NACTVECT Past Papers (Semister 2)</li>
            <li>✅ Medical Books</li>
            <li>✅ Mitihani Kutoka Vyuo Mbalimbali</li>
          </ul>
        </div>
        
        <div class="offer">
          <p>💡 Utapata Na Usaidizi Shida Zako Za Masomo, Msaada Moja Kwa Moja Kutoka <strong>MimiHapa MEDICINE</strong></p>
        </div>
        
        <div class="contact">
          <p>🔴 Wasiliana Nasi Kupitia WhatsApp Au Piga:</p>
          <a href="https://wa.me/255XXXXXXXXX?text=Nataka%20kupata%20materials%20ya%20MimiHapa%20MEDICINE" 
             class="whatsapp-btn" target="_blank">
            📱 Click Hapa Kutuma Ujumbe WhatsApp
          </a>
          <p class="phone-call">Au piga: <strong>+255 XXX XXX XXX</strong></p>
        </div>
      </div>
    </div>
  `;
};

// Create and inject CSS styles
const injectStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .whatsapp-popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 9999;
      justify-content: center;
      align-items: center;
      animation: fadeIn 0.3s ease-out;
    }
    
    .whatsapp-popup.active {
      display: flex !important;
    }
    
    .popup-content {
      background: white;
      width: 90%;
      max-width: 500px;
      border-radius: 15px;
      padding: 25px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      position: relative;
      animation: slideUp 0.4s ease-out;
      border: 3px solid #25D366;
    }
    
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #ff4444;
      color: white;
      border: none;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      z-index: 10000;
    }
    
    .close-btn:hover {
      background: #ff0000;
      transform: scale(1.1);
    }
    
    .header {
      text-align: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 2px dashed #25D366;
    }
    
    .header h2 {
      color: #075E54;
      margin: 0 0 10px 0;
      font-size: 24px;
    }
    
    .highlight {
      background: #FFEB3B;
      color: #333;
      padding: 10px 15px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 18px;
      display: inline-block;
      border: 2px solid #FF9800;
    }
    
    .benefits {
      margin: 20px 0;
    }
    
    .benefits p {
      font-weight: bold;
      color: #075E54;
      margin-bottom: 10px;
    }
    
    .benefits ul {
      list-style: none;
      padding-left: 5px;
    }
    
    .benefits li {
      padding: 8px 0;
      padding-left: 25px;
      position: relative;
    }
    
    .benefits li:before {
      content: "✓";
      color: #25D366;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    
    .offer {
      background: #E8F5E9;
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #4CAF50;
    }
    
    .offer p {
      margin: 0;
      color: #2E7D32;
    }
    
    .contact {
      text-align: center;
      margin-top: 25px;
    }
    
    .contact p {
      color: #333;
      margin-bottom: 15px;
    }
    
    .whatsapp-btn {
      display: block;
      background: #25D366;
      color: white;
      text-decoration: none;
      padding: 15px;
      border-radius: 10px;
      font-weight: bold;
      font-size: 18px;
      margin: 15px 0;
      transition: all 0.3s;
      animation: pulse 2s infinite;
    }
    
    .whatsapp-btn:hover {
      background: #128C7E;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
    }
    
    .phone-call {
      color: #666;
      font-size: 14px;
      margin-top: 10px;
    }
    
    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
      70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
    
    /* Responsive */
    @media (max-width: 600px) {
      .popup-content {
        width: 95%;
        padding: 20px;
      }
      
      .header h2 {
        font-size: 20px;
      }
      
      .highlight {
        font-size: 16px;
        padding: 8px 12px;
      }
      
      .whatsapp-btn {
        font-size: 16px;
        padding: 12px;
      }
    }
  `;
  document.head.appendChild(style);
};

// Show the popup
const showPopup = () => {
  const popup = document.getElementById('whatsappPopup');
  if (popup) {
    // Check if user has already closed the popup today
    const today = new Date().toDateString();
    const lastClosed = localStorage.getItem('whatsappPopupClosed');
    
    if (lastClosed === today) {
      return; // Don't show if closed today
    }
    
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
};

// Hide the popup
const hidePopup = () => {
  const popup = document.getElementById('whatsappPopup');
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Store close date in localStorage
    const today = new Date().toDateString();
    localStorage.setItem('whatsappPopupClosed', today);
  }
};

// Initialize the popup
const initPopup = () => {
  // Inject styles
  injectStyles();
  
  // Create popup HTML
  const popupContainer = document.createElement('div');
  popupContainer.innerHTML = createPopupHTML();
  document.body.appendChild(popupContainer.firstElementChild);
  
  // Get elements
  const closeBtn = document.getElementById('popupCloseBtn');
  const popup = document.getElementById('whatsappPopup');
  
  // Add close button event listener
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event bubbling
      hidePopup();
    });
  }
  
  // Close when clicking outside the popup content
  if (popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        hidePopup();
      }
    });
  }
  
  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hidePopup();
    }
  });
  
  // Show popup after 1 second
  setTimeout(showPopup, 1000);
  
  // Optional: Show popup when user tries to leave
  let mouseLeft = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !mouseLeft) {
      mouseLeft = true;
      showPopup();
    }
  });
};

// Start when page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPopup);
} else {
  initPopup();
}

// Optional: Add function to manually show/hide popup from console
window.MimiHapaPopup = {
  show: showPopup,
  hide: hidePopup,
  test: () => {
    console.log('Popup is working!');
    showPopup();
  }
};
