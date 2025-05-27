//Error Modal Code 
document.addEventListener('DOMContentLoaded', function() {
    const errorModal = document.querySelector('.error-modal');
    const errorMessage = document.querySelector('.error-modal-message');
    const closeModalBtn = document.querySelector('.error-modal-close');

    function showErrorModal(message) {
        errorMessage.textContent = message;
        errorModal.classList.add('active');
    }

    function closeErrorModal() {
        errorModal.classList.remove('active');
    }

    // Modal closing handlers
    closeModalBtn.addEventListener('click', closeErrorModal);
    errorModal.addEventListener('click', (e) => {
        if (e.target === errorModal) closeErrorModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeErrorModal();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    //Button handlers
    document.querySelectorAll('.nav-text, .nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showErrorModal('Sign Up / Login functionality coming soon!');
        });
    });
   
    document.querySelectorAll('.view-all').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showErrorModal('All functionality addded later!');
        });
    });

    document.querySelectorAll('.cta').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showErrorModal('Now Course purchased function is not available.');
        });
    });

    // Testimonial functionality
    document.querySelectorAll('.read-story').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const testimonialCard = button.closest('.testimonial-card');
            testimonialCard.classList.toggle('expanded');
            button.textContent = testimonialCard.classList.contains('expanded') 
                ? 'Hide Story' 
                : 'Read Full Story';
        });
    });

    // Pricing functionality
    const monthlyBtn = document.querySelector('.monthly-active');
    const yearlyBtn = document.querySelector('.yearly');

    monthlyBtn.addEventListener('click', () => {
        if (!monthlyBtn.classList.contains('active')) {
            monthlyBtn.classList.add('active');
            yearlyBtn.classList.remove('active');
            updatePrices('monthly');
        }
    });

    yearlyBtn.addEventListener('click', () => {
        if (!yearlyBtn.classList.contains('active')) {
            yearlyBtn.classList.add('active');
            monthlyBtn.classList.remove('active');
            updatePrices('yearly');
        }
    });

    function updatePrices(plan) {
        document.querySelectorAll('.plan-price .price').forEach(price => {
            if (price.closest('.pricing-card').querySelector('.plan-title').textContent === 'Pro Plan') {
                price.textContent = plan === 'yearly' 
                    ? 'BDT ' + (450 * 12 * 0.9).toFixed(0) 
                    : 'BDT 450';
            }
        });
    }

    // FAQ functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const icon = question.querySelector('i');
            
            faqItem.classList.toggle('active');
            if (faqItem.classList.contains('active')) {
                icon.classList.remove('ti-plus');
                icon.classList.add('ti-minus');
            } else {
                icon.classList.remove('ti-minus');
                icon.classList.add('ti-plus');
            }
        });
    });

    // Social media functionality
    document.querySelectorAll('.social-icons i').forEach(icon => {
        icon.addEventListener('click', () => {
            let url = '#';
            switch(icon.classList.value) {
                case 'ti ti-brand-facebook':
                    url = 'https://facebook.com';
                    break;
                case 'ti ti-brand-instagram':
                    url = 'https://instagram.com';
                    break;
                case 'ti ti-brand-twitter':
                    url = 'https://twitter.com';
                    break;
                case 'ti ti-brand-youtube':
                    url = 'https://youtube.com';
                    break;
            }
            window.open(url, '_blank');
        });
    });

    // Checkout functionality
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', () => {
            showErrorModal('Now purchased function is not available.');
        });
    });
});