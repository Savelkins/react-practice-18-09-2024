import UserProfile from "./components/UserProfile/UserProfile";
import Image from "./components/Image/Image";
import Product from "./components/Product/Product";
function App() {
  return (
    <>
      <UserProfile name="Olena" age="46" email="olena@gmail.com" />
      <UserProfile name="Tom" age="23" email="tom@gmail.com" />
      <UserProfile name="Alex" age="35" email="alex@gmail.com" />
      <Image src="https://kor.ill.in.ua/m/610x385/2722809.jpg" alt="cat" />
      <table>
        <th>title</th>
        <th>price</th>
        <th>quality</th>
        <Product title="Хліб" count={1} price={30} />
      </table>
    </>
  );
}

export default App;
