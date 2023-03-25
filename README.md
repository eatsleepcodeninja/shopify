# An exploration on NestJs and Shopify

### Setup
`yarn install`

### Development
`yarn start:dev`

### Postman
<details>
  <summary>Click to toggle</summary>
  <code>{"info": {"_postman_id": "fa645a9f-d004-4dbc-8ea6-2d649e143823","name": "Shopify","schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json","_exporter_id": "330020"},"item": [{"name": "Analytics","item": [{"name": "Reports","request": {"method": "GET","header": [],"url": {"raw": "{{base_url}}/analytics","host": ["{{base_url}}"],"path": ["analytics"]}},"response": []}]},{"name": "Products","item": [{"name": "List","request": {"method": "GET","header": [],"url": {"raw": "{{base_url}}/products","host": ["{{base_url}}"],"path": ["products"]}},"response": []},{"name": "Get Product","request": {"method": "GET","header": [],"url": {"raw": "{{base_url}}/products/:id","host": ["{{base_url}}"],"path": ["products",":id"],"variable": [{"key": "id","value": "8176500736278"}]}},"response": []},{"name": "Delete Product","request": {"method": "DELETE","header": [],"url": {"raw": "{{base_url}}/products/:id","host": ["{{base_url}}"],"path": ["products",":id"],"query": [{"key": "id","value": null,"disabled": true}],"variable": [{"key": "id","value": "8147115442454"}]}},"response": []},{"name": "Create Product","request": {"method": "POST","header": [],"body": {"mode": "raw","raw": "{\n    \"title\": \"{{$randomProductName}}\",\n    \"body_html\": \"{{$randomProduct}}\",\n    \"vendor\": \"{{$randomBsBuzz}}\",\n    \"product_type\": \"{{$randomProductAdjective}}\",\n    \"status\": \"active\"\n}","options": {"raw": {"language": "json"}}},"url": {"raw": "{{base_url}}/products","host": ["{{base_url}}"],"path": ["products"]}},"response": []},{"name": "Update Product","request": {"method": "PATCH","header": [],"body": {"mode": "raw","raw": "{\n    \"title\": \"New Apple Ipod\",\n    \"body_html\": \"This is the best Ipod ever!\",\n    \"vendor\": \"Apple\",\n    \"product_type\":\"Electronics\",\n    \"status\": \"draft\"\n}","options": {"raw": {"language": "json"}}},"url": {"raw": "{{base_url}}/products/:id","host": ["{{base_url}}"],"path": ["products",":id"],"variable": [{"key": "id","value": "8176500310294"}]}},"response": []}]}]}</code>
</details>
