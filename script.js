function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagePreview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
}

// Sample blog posts data
let blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        excerpt: "Learn the fundamentals of HTML, CSS, and JavaScript to begin your web development journey.",
        content: `
            <p>Web development is an exciting field that allows you to create interactive and dynamic websites. Here's what you need to know to get started:</p>
            
            <h3>1. HTML - The Building Blocks</h3>
            <img src="images/html.jpeg" alt="HTML Code Example" style="width:100%; margin: 1rem 0;">
            <p>HTML provides the structure of your web pages. It's the foundation of web development.</p>
            
            <h3>2. CSS - Making it Beautiful</h3>
            <img src="images/css.jpeg" alt="CSS Styling" style="width:100%; margin: 1rem 0;">
            <p>CSS helps you style your HTML elements and create responsive layouts.</p>
            
            <h3>3. JavaScript - Adding Interactivity</h3>
            <img src="images/javascript.png" alt="JavaScript Code" style="width:100%; margin: 1rem 0;">
            <p>JavaScript makes your websites interactive and dynamic.</p>
        `,
        author: "John Doe",
        date: "March 15, 2024",
        category: "technology",
        image: "images/les-metiers-de-la-techjpeg.jpeg",
        comments: []
    },
    {
        id: 2,
        title: "Top 10 Travel Destinations for 2024",
        excerpt: "Discover the most beautiful and exciting places to visit this year.",
        content: `
            <p>Planning your next vacation? Here are the top destinations you shouldn't miss in 2024:</p>
            
            <h3>1. Santorini, Greece</h3>
            <img src="images/santarini.jpeg" alt="Santorini" style="width:100%; margin: 1rem 0;">
            <p>Famous for its stunning sunsets and white-washed buildings.</p>
            
            <h3>2. Bali, Indonesia</h3>
            <img src="images/bali.jpeg" alt="Bali" style="width:100%; margin: 1rem 0;">
            <p>A paradise with beautiful beaches and rich culture.</p>
            
            <h3>3. Tokyo, Japan</h3>
            <img src="images/tokyo.jpeg" alt="Tokyo" style="width:100%; margin: 1rem 0;">
            <p>A perfect blend of modern technology and traditional culture.</p>
            
            <h3>4. Machu Picchu, Peru</h3>
            <img src="images/macchu pichhu.jpeg" alt="Machu Picchu" style="width:100%; margin: 1rem 0;">
            <p>Ancient Incan city with breathtaking mountain views.</p>
        `,
        author: "Sarah Smith",
        date: "March 14, 2024",
        category: "travel",
        image: "images/travel-and-tourism.jpg",
        comments: []
    },
    {
        id: 3,
        title: "Healthy Breakfast Recipes",
        excerpt: "Start your day with these nutritious and delicious breakfast ideas.",
        content: `
            <p>Start your day right with these healthy and delicious breakfast recipes:</p>
            
            <h3>1. Overnight Oats with Berries</h3>
            <img src="images/overnight.jpeg" alt="Overnight Oats" style="width:100%; margin: 1rem 0;">
            <p>A perfect make-ahead breakfast packed with nutrients.</p>
            
            <h3>2. Avocado Toast with Poached Egg</h3>
            <img src="images/avocado.jpeg" alt="Avocado Toast" style="width:100%; margin: 1rem 0;">
            <p>Creamy avocado and protein-rich eggs on whole grain toast.</p>
            
            <h3>3. Greek Yogurt Parfait</h3>
            <img src="images/greek yogurt.jpeg" alt="Yogurt Parfait" style="width:100%; margin: 1rem 0;">
            <p>Layers of yogurt, granola, and fresh fruits.</p>
        `,
        author: "Mike Johnson",
        date: "March 13, 2024",
        category: "food",
        image: "images/healthy-breakfast.jpeg",
        comments: []
    },{
        id: 'tech-3',
        title: 'The Future of Artificial Intelligence',
        excerpt: 'Exploring how AI is shaping our tomorrow and revolutionizing industries.',
        content: 'Artificial Intelligence is rapidly evolving...',
        author: 'Sarah Johnson',
        date: '2024-02-15',
        category: 'technology',
        image: 'images/AI.jpeg',
        comments: []
    },
    {
        id: 'tech-4',
        title: 'Cybersecurity Best Practices 2024',
        excerpt: 'Essential security measures to protect your digital assets.',
        content: 'In today\'s digital age, cybersecurity is more important than ever...',
        author: 'Mike Chen',
        date: '2024-02-10',
        category: 'technology',
        image: 'images/cybersecurity.jpeg',
        comments: []
    },

    // Travel Posts
    {
        id: 'travel-2',
        title: 'Hidden Gems of Southeast Asia',
        excerpt: 'Discover lesser-known but breathtaking destinations in Southeast Asia.',
        content: 'Beyond the popular tourist spots...',
        author: 'Emma Wilson',
        date: '2024-02-08',
        category: 'travel',
        image: 'images/south asia.jpeg',
        comments: []
    },
    {
        id: 'travel-3',
        title: 'Budget Travel Tips for Europe',
        excerpt: 'How to explore Europe without breaking the bank.',
        content: 'Traveling through Europe on a budget is possible...',
        author: 'David Miller',
        date: '2024-02-05',
        category: 'travel',
        image: 'images/europe.jpeg',
        comments: []
    },

    // Food Posts
    {
        id: 'food-2',
        title: 'Traditional Japanese Cooking',
        excerpt: 'Master the art of authentic Japanese cuisine at home.',
        content: 'Japanese cooking is all about precision and respect for ingredients...',
        author: 'Yuki Tanaka',
        date: '2024-02-12',
        category: 'food',
        image: 'images/japanese cooking.jpeg',
        comments: []
    },
    {
        id: 'food-3',
        title: 'Healthy Mediterranean Recipes',
        excerpt: 'Nutritious and delicious Mediterranean dishes for everyday cooking.',
        content: 'The Mediterranean diet is known for its health benefits...',
        author: 'Maria Garcia',
        date: '2024-02-01',
        category: 'food',
        image: 'images/meditarrian.jpeg',
        comments: []
    },

    // Lifestyle Posts
    {
        id: 'lifestyle-2',
        title: 'Minimalist Living Guide',
        excerpt: 'Simplify your life with minimalist principles and practices.',
        content: 'Minimalism isn\'t just about owning less...',
        author: 'Alex Brown',
        date: '2024-02-14',
        category: 'lifestyle',
        image: 'images/minimalistic life guid.jpeg',
        comments: []
    },
    {
        id: 'lifestyle-3',
        title: 'Morning Routines for Success',
        excerpt: 'Start your day right with these proven morning habits.',
        content: 'Your morning routine sets the tone for the entire day...',
        author: 'Rachel Lee',
        date: '2024-02-03',
        category: 'lifestyle',
        image: 'images/morning routine.jpeg',
        comments: []
    }
];

// Function to create blog post card
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="post-card-content">
            <span class="category-tag ${post.category}">${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="post-meta">
                <span class="author">By ${post.author}</span>
                <span class="date">${post.date}</span>
            </div>
            <button onclick="openBlogPost(${post.id})" class="read-more">Read More</button>
        </div>
    `;
    return card;
}

// Function to open blog post in modal
function openBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button" onclick="closeModal()">&times;</span>
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span class="author">By ${post.author}</span>
                    <span class="date">${post.date}</span>
                    <span class="category">${post.category}</span>
                </div>
                <div class="post-content">${post.content}</div>
                <div class="comments-section">
                    <h3>Comments (${post.comments.length})</h3>
                    <div class="comments-list">
                        ${post.comments.map(comment => `
                            <div class="comment">
                                <p>${comment.text}</p>
                                <small>By ${comment.author} on ${comment.date}</small>
                            </div>
                        `).join('')}
                    </div>
                    <form class="comment-form" onsubmit="addComment(event, ${post.id})">
                        <h4>Add a Comment</h4>
                        <input type="text" placeholder="Your name" required id="commentAuthor">
                        <textarea placeholder="Your comment" required id="commentText"></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

// Function to close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Function to add comment
function addComment(event, postId) {
    event.preventDefault();
    const author = document.getElementById('commentAuthor').value;
    const text = document.getElementById('commentText').value;
    
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        post.comments.push({
            author,
            text,
            date: new Date().toLocaleDateString()
        });
        openBlogPost(postId); // Refresh the modal to show new comment
    }
}

// Function to filter posts by category
function filterPosts(category, event) {
    showLoading();
    
    // Get category from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    
    // Use URL category if available, otherwise use clicked category
    const selectedCategory = urlCategory || category;
    
    setTimeout(() => {
        const buttons = document.querySelectorAll('.filter-button');
        buttons.forEach(btn => {
            // Set active state based on selected category
            if (btn.textContent.toLowerCase() === selectedCategory.toLowerCase()) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        const blogPostsContainer = document.getElementById('blog-posts');
        blogPostsContainer.innerHTML = '';

        const filteredPosts = selectedCategory === 'all' 
            ? blogPosts 
            : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

        if (filteredPosts.length === 0) {
            blogPostsContainer.innerHTML = `
                <div class="no-posts">
                    <i class="fas fa-folder-open"></i>
                    <p>No posts found in this category.</p>
                </div>
            `;
        } else {
            filteredPosts.forEach(post => {
                const postCard = createPostCard(post);
                blogPostsContainer.appendChild(postCard);
            });
        }
    }, 500);
}

function showLoading() {
    const container = document.getElementById('blog-posts');
    container.innerHTML = '<div class="loading"></div>';
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.post-card, .category-card').forEach((el) => {
        observer.observe(el);
    });
});

// Search functionality
function searchPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.excerpt.toLowerCase().includes(searchTerm)
    );
    
    window.location.href = `blog-list.html?search=${encodeURIComponent(searchTerm)}`;
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>Thank you for your message! We'll get back to you soon.</p>
    `;
    
    form.innerHTML = '';
    form.appendChild(successMessage);
}

// Function to filter by category and redirect to blog list page
function filterByCategory(category) {
    // Save the selected category to localStorage (optional)
    localStorage.setItem('selectedCategory', category);
    
    // Redirect to blog-list.html with category parameter
    window.location.href = `blog-list.html?category=${encodeURIComponent(category)}`;
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Check for category parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
        const filterButtons = document.querySelectorAll('.filter-button');
        const targetButton = Array.from(filterButtons)
            .find(btn => btn.textContent.toLowerCase() === category.toLowerCase());
            
        if (targetButton) {
            targetButton.click();
        }
    }
});

// Add particles to hero section
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particles.appendChild(particle);
    }
    
    document.querySelector('.hero').appendChild(particles);
}

// Call this in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    // ... other initialization code ...
});