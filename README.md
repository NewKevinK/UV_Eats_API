# UV_Eats_API

//Rama main "CommonJS"
//Rama Module "Module"

npm run dev


---
## app.use("/api/producto/",productoRoutes);

routes.post("/", validateToken, pro.addProducto);

routes.get("/", validateToken, pro.getProducto);

routes.get("/:idProducto", validateToken, pro.getProductoID);

routes.delete("/:idProducto", validateToken, pro.deleteProducto);

routes.patch("/:idProducto", validateToken, pro.updateProducto);

routes.patch("/like/:idProducto", validateToken, pro.updateProductoLike);

routes.patch("/dislike/:idProducto", validateToken, pro.updateProductoDislike);

routes.post("/addFav", validateToken, pro.addProductoFav);

routes.delete("/quitFav", validateToken, pro.deleteProductoFav);


---
## app.use("/api/usuario/",usuarioRoutes);

routes.post("/",  usuario.addUsuario);

routes.get("/", validateToken, usuario.getUsuario);

routes.get("/:idUsuario", validateToken, usuario.getUsuarioID);

routes.delete("/idUsuario", validateToken, usuario.deleteUsuario);

routes.patch("/:idUsuario", validateToken, usuario.updateUsuario);

routes.patch("/password/:idUsuario", validateToken, usuario.updateUsuarioPassword);


---
## app.use("/api/auth",authRoutes);

routes.post("/", auth.loginAuth);


---
## app.use("/api/categoria", categoriaRoutes);

routes.post("/", validateToken,  categoria.addCategoria);

routes.get("/", validateToken, categoria.getCategoria);

routes.get("/:idCategoria", validateToken, categoria.getCategoriaID);

routes.delete("/:idCategoria", validateToken, categoria.deleteCategoria);

routes.patch("/:idCategoria", validateToken,  categoria.updateCategoria);


---
## app.use("/api/menu/",menuRoutes);

routes.post("/", validateToken,  menu.addMenu);

routes.get("/", validateToken, menu.getMenu);

routes.get("/:idMenu", validateToken, menu.getMenuID);

routes.delete("/:idMenu", validateToken, menu.deleteMenu);

routes.patch("/:idMenu", validateToken,  menu.updateMenu);


---
## app.use("/api/carro/",carroRoutes);

routes.get("/", validateToken, carroCompra.getCarroCompra);

routes.get("/:idCarro", validateToken,  carroCompra.getCarroCompraID);

routes.delete("/:iCarro", validateToken, carroCompra.deleteCarroCompra);

routes.post("/addCar", validateToken, carroCompra.addCarroProducto);

routes.post("/quitCar", validateToken, carroCompra.quitCarroProducto);

routes.get("/carroProducto/:idCarro", validateToken, carroCompra.getCarroProductoID);


---
## app.use("/api/orden/",ordenRoutes); 
 
routes.post("/", validateToken, orden.addOrden);

routes.get("/", validateToken, orden.getOrden);

routes.get("/:idOrden", validateToken, orden.getOrdenID);


---
## app.use("/api/archivo/", archivoRoutes);  

routes.get("/getCategoria", archivo.getImagenCategoria);

routes.get("/getMenu", archivo.getImagenMenu);

routes.get("/getProducto", archivo.getImagenProducto);


---
V0.1


