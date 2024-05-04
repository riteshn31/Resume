class PortfolioNavigator {
    constructor(data) {
        this.data = data;
        this.keys = Object.keys(data);
        this.currentPortfolioIndex = this.getCurrentPortfolioIndex();
        this.previousButton = document.querySelector('.previous-page');
        this.nextButton = document.querySelector('.next-page');

        this.init();
    }

    getCurrentPortfolioIndex() {
        const queryParams = new URLSearchParams(window.location.search);
        const currentPortfolio = queryParams.get('name');
        return this.keys.indexOf(currentPortfolio);
    }

    updateButtonVisibility() {
        if (this.currentPortfolioIndex === 0) {
            this.previousButton.style.display = 'none';
        } else {
            this.previousButton.style.display = 'block';
        }

        if (this.currentPortfolioIndex === this.keys.length - 1) {
            this.nextButton.style.display = 'none';
        } else {
            this.nextButton.style.display = 'block';
        }
    }

    navigateToPortfolio(portfolioName) {
        window.location.search = `?name=${portfolioName}`;
    }

    init() {
        this.updateButtonVisibility();

        this.previousButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.currentPortfolioIndex > 0) {
                const previousPortfolio = this.keys[this.currentPortfolioIndex - 1];
                this.navigateToPortfolio(previousPortfolio);
            }
        });

        this.nextButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.currentPortfolioIndex < this.keys.length - 1) {
                const nextPortfolio = this.keys[this.currentPortfolioIndex + 1];
                this.navigateToPortfolio(nextPortfolio);
            }
        });
    }
}