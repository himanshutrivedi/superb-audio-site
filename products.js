<script>
  fetch('products.json')
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById('products');
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Error loading products:', err);
    });
</script>

