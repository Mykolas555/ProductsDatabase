const getAllDataForHomePage = async () => {
    try {
        const response = await fetch('https://demo-api.ideabridge.lt/api/products/view/all');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log('Error fetching data:', err);
        throw err;
    }
};

const getAllDataForProductsPage = async (page) => {
    try {
        const url = page ? `https://demo-api.ideabridge.lt/api/products/view/all?page=${page}` : 'https://demo-api.ideabridge.lt/api/products/view/all';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};


export { getAllDataForHomePage, getAllDataForProductsPage };