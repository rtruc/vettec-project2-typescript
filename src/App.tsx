import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { All, Completed, Todo } from "./pages";


function App() {
    return (
        <>
            <BrowserRouter>

                <NavBar />

                <Routes>
                    <Route path="/vettec-project2-typescript/" element={<Todo />} />
                    <Route path="/vettec-project2-typescript/completed" element={<Completed />} />
                    <Route path="/vettec-project2-typescript/all" element={<All />} />
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                </Routes>

                <Footer />

            </BrowserRouter>
        </>
    );
}

export default App;
