const getUserProducts = async () => {
    try {
        const userToken = localStorage.getItem('UserToken');
        const response = await fetch('https://demo-api.ideabridge.lt/api/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const postUserProducts = async (addProduct) => {
    try {
        const userToken = localStorage.getItem('UserToken');
        const formData = new FormData();
        formData.append('title', addProduct.title);
        formData.append('description', addProduct.description);
        formData.append('price', addProduct.price);
        formData.append('image', addProduct.image);
        
        const response = await fetch('https://demo-api.ideabridge.lt/api/products', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error:", errorData);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
};



const deleteUserProduct = async (productId) => {
    try {
      const userToken = localStorage.getItem('UserToken');
      const response = await fetch(`https://demo-api.ideabridge.lt/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};

const updateUserProduct = async (productId, updatedProductData) => {
    try {
        const userToken = localStorage.getItem('UserToken');
        const formData = new FormData();
        formData.append('title', updatedProductData.title);
        formData.append('description', updatedProductData.description);
        formData.append('price', updatedProductData.price);
        formData.append('image', updatedProductData.image);
        const response = await fetch(`https://demo-api.ideabridge.lt/api/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
            body: formData,
        });
        const updatedProduct = await response.json();
        return updatedProduct;
    } catch (err) {
        console.error(err);
    }
};

export { getUserProducts, postUserProducts, deleteUserProduct, updateUserProduct }
