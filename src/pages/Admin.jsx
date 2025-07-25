import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useShoppingItems } from "../context/ShoppingItemsContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTags } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

export default function Admin() {
    const { products, addProduct, updateProduct, deleteProduct, categories, addCategory } = useShoppingItems();
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        imgUrl: "",
        category: ""
    });
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [newCategory, setNewCategory] = useState("");
    const { theme } = useTheme();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct({
                ...newProduct,
                price: parseFloat(newProduct.price)
            });
            setNewProduct({ name: "", price: "", imgUrl: "", category: "" });
            toast.success("Product added successfully!", {
                position: "top-right",
                theme: theme
            });
        } catch (error) {
            toast.error("Failed to add product. Please try again after some time.", {
                position: "top-right",
                theme: theme
            });
        }
    };

    const handleAddCategory = () => {
        if (newCategory.trim() && !categories.includes(newCategory.trim())) {
            addCategory(newCategory.trim());
            setNewProduct(p => ({ ...p, category: newCategory.trim() }));
            setShowCategoryModal(false);
            setNewCategory("");
            toast.success("Category added!", { position: "top-right", theme: theme });
        }
    };

    // Theme-based styles
    const containerStyle = {
        background: theme === "dark"
            ? "linear-gradient(135deg, #232F3E 0%, #161E2D 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e3f0ff 100%)",
        color: theme === "dark" ? "#fff" : "#232F3E",
        borderRadius: 18,
        boxShadow: theme === "dark"
            ? "0 4px 24px rgba(44,62,80,0.18)"
            : "0 4px 24px rgba(200,220,255,0.18)",
        maxWidth: 1100,
        margin: "2rem auto",
        padding: "2rem 1rem"
    };
    const formContainerStyle = {
        background: theme === "dark" ? "#232F3E" : "#fff",
        color: theme === "dark" ? "#fff" : "#232F3E",
        borderRadius: 12,
        boxShadow: theme === "dark"
            ? "0 2px 12px rgba(44,62,80,0.12)"
            : "0 2px 12px rgba(200,220,255,0.12)",
        marginBottom: 32
    };
    const productCardStyle = {
        background: theme === "dark" ? "#1a2233" : "#f8f9fa",
        color: theme === "dark" ? "#fff" : "#232F3E",
        borderRadius: 10,
        boxShadow: theme === "dark"
            ? "0 2px 8px rgba(44,62,80,0.10)"
            : "0 2px 8px rgba(200,220,255,0.10)"
    };

    return (
        <Container style={containerStyle}>
            <h1 className="text-primary mb-4 animate__animated animate__fadeInDown">Admin Dashboard</h1>
            <div className="admin-form-container p-4 mb-5 animate__animated animate__fadeIn" style={formContainerStyle}>
                <h2 className="mb-4">Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input
                            type="url"
                            className="form-control"
                            value={newProduct.imgUrl}
                            onChange={(e) => setNewProduct({ ...newProduct, imgUrl: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <div className="d-flex align-items-center gap-2">
                            <Form.Select
                                value={newProduct.category}
                                onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                                required
                                style={{ maxWidth: 250 }}
                            >
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </Form.Select>
                            <Button variant="outline-primary" type="button" onClick={() => setShowCategoryModal(true)} title="Add Category">
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </div>
                    </div>
                    <Button type="submit" className="btn-primary">Add Product</Button>
                </form>
            </div>

            <Modal show={showCategoryModal} onHide={() => setShowCategoryModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <FontAwesomeIcon icon={faTags} className="me-2 text-primary" />Add New Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={newCategory}
                            onChange={e => setNewCategory(e.target.value)}
                            placeholder="Enter new category"
                            autoFocus
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCategoryModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddCategory} disabled={!newCategory.trim()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <h2 className="mb-4 animate__animated animate__fadeInUp">Product List</h2>
            <Row xs={1} md={2} lg={3} className="g-4 animate__animated animate__fadeIn">
                {products.map(product => (
                    <Col key={product.id}>
                        <div className="product-card" style={productCardStyle}>
                            <img
                                src={product.imgUrl}
                                className="product-image"
                                alt={product.name}
                            />
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <div className="product-price">{formatCurrency(product.price)}</div>
                                <div className="product-category text-muted small mb-2">{product.category}</div>
                                <div className="d-flex gap-2 mt-3">
                                    <Button
                                        className="btn-outline flex-grow-1"
                                        onClick={() => updateProduct(product.id)}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        className="btn-outline btn-danger flex-grow-1"
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}