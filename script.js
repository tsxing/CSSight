const neumorphismCard = document.getElementById("neumorphismCard");
const glassmorphismCard = document.getElementById("glassmorphismCard");




function applyGlassmorphismStylesToCard(element) {
    element.style.borderLeft = '0px solid white';
    element.style.borderBottom = '1px solid white';
    element.style.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.249) 0%, rgba(255, 255, 255, 0.215) 100%)';
    element.style.backdropFilter = 'blur(2px)';
    element.style.boxShadow = '-5px 1px 5px rgba(74, 106, 150, 0.8)';
    element.style.transformStyle = 'preserve-3d'; // Enable 3D transformations
    element.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
    element.style.transform = 'rotateY(5deg) rotateX(5deg) translate3d(20px, -5px, 35px)';
    element.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1)'; // Example box shadow

    

}



function removeGlassmorphismStylesFromCard(element) {
    element.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
    element.style.background = ''; // Reset background
    element.style.backdropFilter = ''; // Remove blur effect
    element.style.boxShadow = ''; // Reset box-shadow
    element.style.borderLeft = ''; // Reset left border
    element.style.borderBottom = ''; // Reset bottom border
    element.style.transformStyle = ''; // Reset 3D transform style
    element.style.transform = ''; // Reset 3D transformation
}


function removeSiteBodyAndSidebarStyles() {
    const siteBody = document.querySelector('.site-body');
    siteBody.style.borderLeft = ''; // Reset left border
    siteBody.style.borderBottom = ''; // Reset bottom border
    siteBody.style.background = ''; // Reset background
    siteBody.style.backdropFilter = ''; // Remove blur effect
    siteBody.style.boxShadow = ''; // Reset box-shadow
    siteBody.style.transformStyle='';
    siteBody.style.transform = '';

    const sidebar = document.querySelector('.sidebar');
    sidebar.style.background = ''; // Reset background
    sidebar.style.backdropFilter = ''; // Remove blur effect
    sidebar.style.boxShadow = ''; // Reset box-shadow
    sidebar.style.transformStyle='';
    sidebar.style.transform = '';
}

function addGlassStyletoSiteBodyandSideBar(element) {
    // Apply the glassmorphism style to the provided element
    element.style.background = 'linear-gradient(220deg, rgba(4, 163, 255, 0.35) 0%, rgba(255, 255, 255, 0.515) 80%)';
    element.style.backdropFilter = 'blur(5px)';
    element.style.boxShadow = 'none';
    element.style.transform = 'rotateY(5deg) rotateX(5deg) translate3d(10px, -3px, 5px)';
    element.style.transformStyle = 'preserve-3d'; // Enable 3D transformations
    element.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
    element.style.borderBottom = '0.5px solid white';
}

function removeGlassEffectFromText() {
    // Reset body perspective
    document.body.style.perspective = '';

    // Reset span styles
    const span = document.querySelector('span');
    span.style.display = 'inline-block'; // Reset display property
    span.style.color = ''; // Reset color
    span.style.textShadow = ''; // Reset text shadow
    span.style.transformStyle = ''; // Reset 3D transform style
    span.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
    span.style.transform = ''; // Reset transformation
    span.style.opacity = ''; // Reset opacity

    // Reset h2 styles
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.style.color = ''; // Reset color
        h2.style.textShadow = ''; // Reset text shadow
        h2.style.transformStyle = ''; // Reset 3D transform style
        h2.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
        h2.style.transform = ''; // Reset transformation
        h2.style.opacity = ''; // Reset opacity
    });

    // Reset p styles
    const pElements = document.querySelectorAll('p');
    pElements.forEach(p => {
        p.style.color = ''; // Reset color
        p.style.textShadow = ''; // Reset text shadow
        p.style.transformStyle = ''; // Reset 3D transform style
        p.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
        p.style.transform = ''; // Reset transformation
        p.style.opacity = ''; // Reset opacity
    });
}

function removeButtonGlassEffect() {
    const sidebarButtons = document.querySelectorAll('.sidebar-buttons button');
    sidebarButtons.forEach(button => {
        button.style.background = ''; // Remove background
        button.style.color = ''; // Remove text color
        button.style.textShadow = ''; // Remove text shadow
        button.style.backgroundClip = ''; // Reset background clip
        button.style.border = ''; // Remove border
        button.style.width = ''; // Reset width

        button.style.textAlign = ''; // Reset text alignment
        button.style.textDecoration = ''; // Reset text decoration
        button.style.display = ''; // Reset display

        button.style.borderRadius = ''; // Reset border radius
        button.style.cursor = ''; // Reset cursor style
        button.style.transition = ''; // Add transition for smooth change

        button.style.transformStyle = ''; // Reset 3D transformations
        button.style.transform = ''; // Remove transformations
        button.style.opacity = ''; // Reset opacity
    });
}

glassmorphismCard.addEventListener("click", () => {
    document.body.classList.add("glass-active"); // Add class to body
    document.body.style.backgroundImage = 'url("background.jpeg")'; // Change background image
    document.body.style.backgroundSize = 'cover'; // Ensure the image covers the whole body
    document.body.style.backgroundPosition = 'center'; // Center the background image
    document.body.style.backgroundAttachment = 'fixed'; // Optional: makes the background fixed as you scroll
    
    applyGlassmorphismStylesToCard(glassmorphismCard);
    applyGlassmorphismStylesToCard(neumorphismCard);

    const siteBody = document.querySelector('.site-body');
    const sideBar = document.querySelector('.sidebar');
    addGlassStyletoSiteBodyandSideBar(siteBody);
    addGlassStyletoSiteBodyandSideBar(sideBar);

    document.body.style.perspective = '1000px';

    const span = document.querySelector('span');
    span.style.display = 'inline-block'; // Make span a block element so it supports 3D transforms
    span.style.color = 'white';
    span.style.textShadow= '-1px 1px 5px rgba(74, 106, 150, 0.9)';
    span.style.transformStyle = 'preserve-3d'; // Enable 3D transformations
    span.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
    span.style.transform = 'rotateY(10deg) rotateX(10deg) translate3d(30px, -5px, 55px)';
    span.style.opacity = '0.7';
    
    const h2Elements = document.querySelectorAll('h2');
    h2Elements.forEach(h2 => {
        h2.style.color = 'white';
        h2.style.textShadow = '-1px 1px 1px rgba(74, 106, 150, 0.8)';
        h2.style.transformStyle = 'preserve-3d'; // Enable 3D transformations
        h2.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
        h2.style.transform = 'rotateY(10deg) rotateX(10deg) translate3d(20px, -5px, 55px)';
        h2.style.opacity = '0.7';
    });
    const pElements = document.querySelectorAll('p');   

    pElements.forEach(p => {
        p.style.color = 'white';
        p.style.textShadow = '-1px 1px 0px rgba(0, 0, 0, 0.3)';
        p.style.transformStyle = 'preserve-3d'; // Enable 3D transformations
        p.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
        p.style.transform = 'rotateY(10deg) rotateX(10deg) translate3d(40px, -5px, 65px)';
        p.style.opacity = '0.8';
    });

    const sidebarButtons = document.querySelectorAll('.sidebar-buttons button');
    sidebarButtons.forEach(button => {

        button.style.background = 'linear-gradient(0deg, rgba(255, 255, 255, 0.549) 0%, rgba(255, 255, 255, 0.815) 100%)';
        button.style.color = 'white'; // White text
        button.style.textShadow = '-1px 1px 1px black';
        button.style.backgroundClip = 'padding-box';
        button.style.border = '1px solid white';
        button.style.width = '150px';

        button.style.textAlign = 'center'; // Center text
        button.style.textDecoration = 'none'; // No underline
        button.style.display = 'inline-block'; // Inline-block for layout

        button.style.transformStyle = 'preserve-3d'; // Enable 3D transformations
        button.style.transform = 'rotateY(8deg) rotateX(8deg) translate3d(20px, -10px, 40px)';
        button.style.opacity = '0.6';
        button.style.transition = 'all 0.5s ease-in-out'; // Add transition for smooth change
    });
});


neumorphismCard.addEventListener("click",() => {
    
    document.body.style.transition = 'background-color 0.3s ease'; // Transition the background color (e.g., from an image to a color)
    document.body.style.backgroundColor = '#fbfbfb'; // Set a background color for visibility
    document.body.style.backgroundImage = ''; // Reset the background image

    removeGlassmorphismStylesFromCard(glassmorphismCard);
    removeGlassmorphismStylesFromCard(neumorphismCard);
    removeSiteBodyAndSidebarStyles();
    removeGlassEffectFromText();
    removeButtonGlassEffect();
})