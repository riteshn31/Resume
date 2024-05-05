class PortfolioNavigator {
    constructor(data) {
        this.data = data;
        this.keys = Object.keys(data);
        this.currentPortfolioIndex = this.getCurrentPortfolioIndex();
        this.previousButtons = document.querySelectorAll('.previous-page');
        this.nextButtons = document.querySelectorAll('.next-page');

        this.init();
    }

    getCurrentPortfolioIndex() {
        let queryParams = new URLSearchParams(window.location.search);
        let currentPortfolio = queryParams.get('name');
        return this.keys.indexOf(currentPortfolio);
    }

    updateButtonVisibility() {
        this.previousButtons.forEach(button => {
            if (this.currentPortfolioIndex === 0) {
                button.style.display = 'none';
            } else {
                button.style.display = 'block';
            }
        });

        this.nextButtons.forEach(button => {
            if (this.currentPortfolioIndex === this.keys.length - 1) {
                button.style.display = 'none';
            } else {
                button.style.display = 'block';
            }
        });
    }

    navigateToPortfolio(portfolioName) {
        window.location.search = `?name=${portfolioName}`;
    }

    init() {
        this.updateButtonVisibility();

        this.previousButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                if (this.currentPortfolioIndex > 0) {
                    const previousPortfolio = this.keys[this.currentPortfolioIndex - 1];
                    this.navigateToPortfolio(previousPortfolio);
                }
            });
        });

        this.nextButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                if (this.currentPortfolioIndex < this.keys.length - 1) {
                    const nextPortfolio = this.keys[this.currentPortfolioIndex + 1];
                    this.navigateToPortfolio(nextPortfolio);
                }
            });
        });
    }
}