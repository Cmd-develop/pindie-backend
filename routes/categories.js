// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require('../middlewares/categories');
const { sendCategoryCreated, sendCategoryById, sendcategoryUpdated, sendCategoryDeleted, sendAllCategories } = require('../controllers/categories');
const checkAuth = require('../middlewares/auth');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCategoryCreated);

categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.put("/categories/:id", findCategoryById, checkEmptyName, updateCategory, sendcategoryUpdated);

categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
