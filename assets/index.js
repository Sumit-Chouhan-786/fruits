        // Product data from the content provided
        const products = [
            { 
                name: "Broccoli", 
                category: "vegetables", 
                subcategory: "organic",
                image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Fresh, crisp broccoli with deep green florets, packed with nutrients and flavor.",
               
            },
            { 
                name: "Tomatoes", 
                category: "vegetables", 
                subcategory: "organic",
                image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Vine-ripened tomatoes with rich flavor and perfect texture for salads and sauces.",
                
            },
            { 
                name: "Apples", 
                category: "fruits", 
                subcategory: "organic",
                image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Crisp, juicy apples in multiple varieties including Fuji, Gala, and Honeycrisp.",
               
            },
            { 
                name: "Oranges", 
                category: "fruits", 
                subcategory: "",
                image: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Sweet, juicy oranges bursting with Vitamin C, perfect for juices or fresh eating.",
                
            },
            { 
                name: "Strawberries", 
                category: "fruits", 
                subcategory: "organic",
                image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Plump, sweet strawberries with bright red color and intense flavor.",
               
            },
            { 
                name: "Grapes", 
                category: "fruits", 
                subcategory: "",
                image: "https://images.unsplash.com/photo-1604425009198-26ab86fc4f8b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Sweet seedless grapes in red, green, and black varieties, perfect for snacking.",
                
            },
            { 
                name: "Avocados", 
                category: "fruits", 
                subcategory: "exotic",
                image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Creamy Hass avocados, perfectly ripe and ready for guacamole or toast.",
               
            },
            { 
                name: "Mangoes", 
                category: "fruits", 
                subcategory: "exotic",
                image: "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Sweet, fragrant mangoes with vibrant orange flesh, the king of tropical fruits.",
                
            },
        ];

        // Initialize on page load
        $(document).ready(function() {
            // Generate product cards
            generateProductCards('all');
            
            // Initialize Slick slider for testimonials
         $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,          // show center + sides
    slidesToScroll: 1,
    centerMode: true,          // enable center mode
    centerPadding: '40px',     // space on sides of center slide
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                centerPadding: '30px',
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }
    ]
});

            
            // Filter products
            $('.filter-btn').on('click', function() {
                const filter = $(this).data('filter');
                
                // Update active button
                $('.filter-btn').removeClass('active');
                $(this).addClass('active');
                
                // Generate filtered products
                generateProductCards(filter);
            });
            
            // Add animation classes on scroll
            function animateOnScroll() {
                $('.product-card, .feature-box').each(function() {
                    const elementTop = $(this).offset().top;
                    const elementBottom = elementTop + $(this).outerHeight();
                    const viewportTop = $(window).scrollTop();
                    const viewportBottom = viewportTop + $(window).height();
                    
                    if (elementBottom > viewportTop && elementTop < viewportBottom) {
                        $(this).addClass('animated');
                    }
                });
            }
            
            // Trigger scroll animation on page load and scroll
            $(window).on('load scroll', animateOnScroll);
            
            // Smooth scrolling for navigation links
            $('a[href^="#"]').on('click', function(event) {
                if (this.hash !== "") {
                    event.preventDefault();
                    const hash = this.hash;
                    
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                }
            });
            
            // Form submission
            $('#contactForm').on('submit', function(e) {
                e.preventDefault();
                // Show success message
                $('<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">Thank you for your message! We will get back to you soon.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>').insertBefore('#contactForm button[type="submit"]');
                // Reset form
                this.reset();
                // Remove alert after 5 seconds
                setTimeout(() => {
                    $('.alert').alert('close');
                }, 5000);
            });
            
            // Navbar background on scroll
            $(window).scroll(function() {
                if ($(window).scrollTop() > 50) {
                    $('.navbar').addClass('scrolled');
                } else {
                    $('.navbar').removeClass('scrolled');
                }
            });
            
            // Initialize counter animation
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
            
            // Add animation to feature boxes on load
            setTimeout(() => {
                $('.feature-box').each(function(index) {
                    $(this).css('animation-delay', `${index * 0.2}s`);
                });
            }, 500);
            
            // Animate form labels on focus
            $('.form-control').on('focus blur', function() {
                $(this).next('.form-label').toggleClass('focused', this.value || this === document.activeElement);
            });
            
            // Infinite animation for hero section
            setInterval(() => {
                $('.infinite-animation').each(function() {
                    const randomX = Math.random() * 100;
                    const randomY = Math.random() * 100;
                    $(this).animate({
                        left: `${randomX}%`,
                        top: `${randomY}%`
                    }, 10000);
                });
            }, 10000);
        });
        
        // Generate product cards based on filter
        function generateProductCards(filter) {
            const productsRow = $('#product-container');
            productsRow.empty();
            
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => 
                    product.category === filter || 
                    product.subcategory === filter
                );
            
            filteredProducts.forEach((product, index) => {
                const productCard = `
                    <div class="col-lg-3 col-sm-6 mt-4">
                        <div class="product-card h-100" data-category="${product.category} ${product.subcategory}" style="animation-delay: ${index * 0.1}s">
                            <div class="product-img">
                                <img src="${product.image}" alt="${product.name}">
                                ${product.subcategory ? `<div class="product-badge">${product.subcategory}</div>` : ''}
                            </div>
                            <div class="product-content">
                                <h4 class="product-title">${product.name}</h4>
                                <p class="product-description mb-0">${product.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                productsRow.append(productCard);
            });
            
            // Add click event to view details buttons
            $('.view-details').on('click', function() {
                const productName = $(this).closest('.product-card').find('.product-title').text();
                alert(`Details for ${productName}:\n\nWe can provide detailed specifications, packaging options, and pricing for bulk orders. Contact us for more information.`);
            });
        }


  document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.getElementById('navbarNav');
      const bsCollapse = bootstrap.Collapse.getInstance(navbar)
        || new bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    });
  });

  $(document).ready(function(){
  $('.blog-slider').slick({
    slidesToShow: 2,   
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992, 

        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

 document.addEventListener('DOMContentLoaded', function () {

    // AOS Init
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  });

