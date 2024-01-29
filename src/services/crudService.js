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
        console.log('FormData before request:', formData);
        const response = await fetch('https://demo-api.ideabridge.lt/api/products', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${userToken}`,
            },
            body: formData,
        });
        const sentData = await response.json()
        console.log(sentData)
        if (!response.ok) {
            const errorData = await response.json();
            console.error(errorData);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error(error);
    }
};



const deleteUserProduct = async (productId) => {
    try {
      const userToken = localStorage.getItem('UserToken');
      const response = await fetch(`https://demo-api.ideabridge.lt/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};

const updateUserProduct = async (productId, productData) => {
    try {
        const userToken = localStorage.getItem('UserToken');
        const response = await fetch(`https://demo-api.ideabridge.lt/api/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error(errorData);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error( error);
    }
}

export { getUserProducts, postUserProducts, deleteUserProduct, updateUserProduct }
