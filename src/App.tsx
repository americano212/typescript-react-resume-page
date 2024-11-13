import "./App.css";
import { pageData } from "./assets/page.data";
import Header from "./Header";
import Page from "./pages/Page";

export default function App() {
  return (
    <div className="App">
      <Header />
      {pageData.map((page, index) => (
        <Page key={index} title={page.title} contents={page.contents} />
      ))}
    </div>
  );
}
