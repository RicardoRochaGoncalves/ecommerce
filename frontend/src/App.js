import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductSreen from "./screens/ProductSreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
    return (
        <Router>
            <Header></Header>
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" exact element={<HomeScreen/>} />
                        <Route path="/login" exact element={<LoginScreen/>} />
                        <Route path="/register" exact element={<RegisterScreen/>} />
                        <Route path="/profile" exact element={<ProfileScreen/>} />
                        <Route path="/product/:id" element={<ProductSreen/>}/>
                        <Route path="/cart/:id?" element={<CartScreen/>} />
                    </Routes>
                </Container>
            </main>
            <Footer></Footer>
        </Router>
    );
}

export default App;
