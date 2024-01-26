const getAllDataForHomePage = async () => {
    try {
        const response = await fetch('https://demo-api.ideabridge.lt/api/products/view/all');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const getAllDataForProductsPage = async (page) => {
    try {
        const url = page ? `https://demo-api.ideabridge.lt/api/products/view/all?page=${page}` : 'https://demo-api.ideabridge.lt/api/products/view/all';
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const getProductByID = async (id) => {
    try {
        const userToken = localStorage.getItem('UserToken');
        if (!userToken) {
            window.location.href = '/ProductsDatabase/login';
            return null;
        }
        const response = await fetch(`https://demo-api.ideabridge.lt/api/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export { getAllDataForHomePage, getAllDataForProductsPage, getProductByID };