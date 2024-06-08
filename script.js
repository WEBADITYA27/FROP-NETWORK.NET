document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .jumbotron a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 56, // Adjusting for fixed navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Modal functionality for product buttons
    const productButtons = document.querySelectorAll('.card .btn');
    const modalContainer = document.createElement('div');

    modalContainer.innerHTML = `
        <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="productModalLabel">Paket WiFi</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-description">Deskripsi paket akan muncul di sini.</p>
                        <p class="modal-price"><strong>Harga: </strong><span id="modalPrice"></span></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Pesan Sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document