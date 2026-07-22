// ===========================================================
// CONFIGURACIÓN — cambiá el número acá y se actualiza en TODOS
// los botones de WhatsApp de la página automáticamente.
// ===========================================================
const WHATSAPP_NUMBER = "5493511234567"; // código de país + número, sin +, sin espacios
const WHATSAPP_MESSAGE = "Hola, quiero más información";

// ===========================================================
// No hace falta tocar nada de acá para abajo.
// ===========================================================
(() => {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    (WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}` : "");

  document.querySelectorAll("[data-whatsapp-btn]").forEach((btn) => {
    btn.setAttribute("href", url);

    // Pequeña vibración táctil en dispositivos compatibles (Android).
    // No afecta el funcionamiento del enlace si la API no existe.
    btn.addEventListener("click", () => {
      if ("vibrate" in navigator) {
        navigator.vibrate(12);
      }
    });
  });
})();

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector("[data-whatsapp-btn]");

    if (whatsappBtn) {
        whatsappBtn.addEventListener("click", function () {

            if (typeof fbq === "function") {
                fbq("trackCustom", "WhatsAppClick");
            }
            if (typeof gtag === "function") {
                gtag("event", "whatsapp_click", {
                    event_category: "Contacto",
                    event_label: "Botón WhatsApp"
                });
            }
        });
    }
});