// Select all chat items
const chatItems = document.querySelectorAll('.chat-item');
        
// Default chat
let currentChat = 1;

// Update the main chat based on the clicked chat
chatItems.forEach(item => {
    item.addEventListener('click', function() {
        const chatId = item.getAttribute('data-chat');
        currentChat = chatId;

        // Update chat header
        const chatHeader = document.querySelector('.chat-header');
        const chatName = chatHeader.querySelector('span');
        const chatImage = chatHeader.querySelector('img'); // Select the header image
        const selectedImage = item.querySelector('img');  // Get the image of the selected chat
        
        chatName.textContent = `Contact ${chatId}`;
        chatImage.src = selectedImage.src; // Update the chat header image

        // Update chat body with messages (this is just a sample, you can load different messages for each contact)
        const chatBody = document.querySelector('.chat-body');
        chatBody.innerHTML = '';  // Clear current messages

        // Example of different messages for each chat
        if (chatId === '1') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello, how are you?</div>
                </div>
                <div class="chat-message">
                    <div class="message sender">I'm good, how about you?</div>
                </div>
            `;
        } else if (chatId === '2') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '3') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
        else if (chatId === '4') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '5') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
        else if (chatId === '6') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '7') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
        else if (chatId === '8') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '9') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
        else if (chatId === '10') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '11') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
        else if (chatId === '12') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '13') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
        else if (chatId === '14') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Hello!</div>
                </div>
            `;
        } else if (chatId === '15') {
            chatBody.innerHTML = `
                <div class="chat-message">
                    <div class="message receiver">Good morning!</div>
                </div>
            `;
        }
    });
});

// Send message functionality
document.addEventListener("DOMContentLoaded", function () {
    const communityIcon = document.getElementById("communityIcon");
    const communitySection = document.getElementById("communitySection");
    const chatList = document.querySelector(".chat-list");
    const searchBar = document.querySelector(".search-bar");
    const newSection = document.querySelector(".new-section");
    const statusIcon = document.querySelector(".fa-circle-o-notch");
    const statusSection = document.getElementById("statusSection");
    const searchContainer=document.getElementById("searchContainer");

    // Show only the Community Section
    communityIcon.addEventListener("click", () => {
        // Set visibility explicitly
        communitySection.style.display = "block"; // Always show Community Section
        chatList.style.display = "none";         // Hide Chat List
        searchBar.style.display = "none";        // Hide Search Bar
        newSection.style.display = "none";       // Hide New Section
        statusSection.style.display = "none"; 
        searchContainer.style.display="none";   // Hide Status Section
    });

    // Show only the Status Section
    statusIcon.addEventListener("click", () => {
        // Set visibility explicitly
        statusSection.style.display = "block";   // Always show Status Section
        chatList.style.display = "none";        // Hide Chat List
        searchBar.style.display = "none";       // Hide Search Bar
        newSection.style.display = "none";      // Hide New Section
        communitySection.style.display = "none";
        searchContainer.style.display="none"; // Hide Community Section
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const firstPageIcon = document.getElementById("firstpage");
    const sidebarHeader = document.querySelector(".sidebar-header");
    const searchBar = document.querySelector(".search-bar");
    const newSection = document.querySelector(".new-section");
    const chatList = document.querySelector(".chat-list");
    const communitySection = document.getElementById("communitySection");
    const statusSection = document.getElementById("statusSection");
    const searchContainer=document.getElementById("searchContainer");
    // Show only the First Page sections
    firstPageIcon.addEventListener("click", () => {
        // Display the First Page sections
        sidebarHeader.style.display = "block";
        searchBar.style.display = "flex";
        newSection.style.display = "flex";
        chatList.style.display = "block";
        searchContainer.style.display="none";
        // Hide other sections
        communitySection.style.display = "none";
        statusSection.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const addIcon = document.getElementById("addIcon");
    const sidebarHeader = document.querySelector(".sidebar-header");
    const searchContainer = document.getElementById("searchContainer");
    const contactsContainer = document.getElementById("contacts");
    const searchBar = document.querySelector(".search-bar");
    const newSection = document.querySelector(".new-section");
    const chatList = document.querySelector(".chat-list");
    const communitySection = document.getElementById("communitySection");
    const statusSection = document.getElementById("statusSection");

    // Example Contact Data
    const contacts = [
        { name: "John Doe", profilePic: "Contact1.jfif" },
        { name: "Jane Smith", profilePic: "Contact2.jpg" },
        { name: "Alice Johnson", profilePic: "Contact3.jfif" },
        { name: "John Doe", profilePic: "Contact4.jfif" },
        { name: "Jane Smith", profilePic: "Contact5.jpg" },
        { name: "Alice Johnson", profilePic: "Contact6.jfif" },
        { name: "John Doe", profilePic: "Contact7.jfif" },
        { name: "Jane Smith", profilePic: "Contact8.jfif" },
        { name: "Alice Johnson", profilePic: "Contact9.jfif" },
        { name: "John Doe", profilePic: "Contact10.avif" },
        { name: "Jane Smith", profilePic: "Contact11.jfif" },
        { name: "Alice Johnson", profilePic: "Contact12.jfif" },
        { name: "Jane Smith", profilePic: "Contact13.jfif" },
        { name: "Alice Johnson", profilePic: "Contact14.jfif" },

    ];

    // Populate Contacts Function
    function loadContacts() {
        contacts.forEach(contact => {
            const contactDiv = document.createElement("div");
            contactDiv.classList.add("contact-item");

            contactDiv.innerHTML = `
                <img src="${contact.profilePic}" alt="${contact.name}'s profile picture" />
                <span>${contact.name}</span>
            `;

            contactsContainer.appendChild(contactDiv);
        });
    }

    // Show Sidebar Header and Search Container, Hide Others on Add Icon Click
    addIcon.addEventListener("click", function () {
        sidebarHeader.style.display = "block"; // Show sidebar header
        searchContainer.style.display = "block"; // Show search container

        // Hide unwanted sections
        searchBar.style.display = "none"; // Hide search bar
        newSection.style.display = "none"; // Hide new section
        chatList.style.display = "none"; // Hide chat list
        communitySection.style.display = "none"; // Hide community section
        statusSection.style.display = "none"; // Hide status section

        // Ensure contacts are loaded only once
        if (contactsContainer.children.length === 0) {
            loadContacts(); // Populate contacts
        }
    });
});
    

document.addEventListener("DOMContentLoaded", () => {
    const videoIcon = document.getElementById("videoIcon");
    const callPopup = document.getElementById("callPopup");
    const callStatus = document.getElementById("callStatus");
    const videoElement = document.getElementById("videoElement");
    const endCallButton = document.getElementById("endCallButton");

    let stream = null;

    videoIcon.addEventListener("click", () => {
        callPopup.style.display = "block";
        callStatus.textContent = "Calling...";

        setTimeout(async () => {
            callStatus.textContent = ""; // Clear the calling message
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                videoElement.srcObject = stream;
                videoElement.play();
            } catch (error) {
                console.error("Error accessing camera:", error);
                callStatus.textContent = "Camera access failed.";
            }
        }, 2000);
    });

    endCallButton.addEventListener("click", () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop()); // Stop all tracks
        }
        videoElement.srcObject = null;
        callPopup.style.display = "none";
    });
});