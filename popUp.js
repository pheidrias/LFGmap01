let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('pop1', () => {
    WA.openPopup("popupRectangle", "Vorsicht! Der Friedhoft spielt verrückt...kommst Du ins Labor?", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);
