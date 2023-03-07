// Strict mode
import { CartLocal } from "../Login_Resgister/InformationDatabase";

// Biến ban đầu chứa dữ liệu
const initialStateCart = { nameTK: "", items: [], totalPrice: 0 };

// Quản lý trạng thái của modal
const listCart = (state = initialStateCart, action) => {
  const Data = JSON.parse(localStorage.getItem("CartUser"));
  const NameUser = localStorage.getItem("user");
  const Arrcart = action.payload;

  // Tìm các sản phẩm trong items có tên giống với sản phầm payload gửi về: Nếu giống (true) thì update, nếu không có (false) thì add
  const confirmNameTK = Data ? Data.find((e) => e.nameTK === NameUser) : "";

  // Trạng thái ban đầu của items && !confirmProduct
  if (action.type === "ADD_CART") {
    // Xóa toàn bộ mảng để tránh re-render lại mỗi lần sài spread operator
    state.items.length = 0;
    // Push thêm chứ không tạo mới mảng
    state.items.push(Arrcart);
    // console.log("dang ADD_CART ");
    // console.log(Arrcart);
    const object1 = {
      nameTK: NameUser,
      items: [...state.items],
      totalPrice: Arrcart
        ? state.totalPrice + new Number(Arrcart.price * Arrcart.amount)
        : state.totalPrice,
    };
    CartLocal(object1);
    return object1;
  }
  if (action.type === "UPDATE_CART") {
    // Xóa các mảng đã lưu ở state.items, vì bên dưới có hàm in ra từng phần tử trong mảng
    state.items.length = 0;
    // Nếu có dữ liệu truyền về thì sẽ cập nhật sản phẩm
    if (Arrcart) {
      // Xóa các mảng đã lưu ở state.items lần 2 nếu có sản phẩm đã được update, vì bên dưới có hàm in ra từng phần tử trong mảng
      // state.items.pop();
      const StorageAllData = [...Data];
      // Tìm object chứa tên sản phẩm mà payload gửi, sau đó dùng tên sản phẩm để tìm index bằng hàm indexOf, dùng hàm splice để xóa object đó khỏi mảng items, cập nhật hàm mới bằng push object payload gửi về, sau đó gửi lên local storage bằng hàm mới đó
      const confirmProduct =
        confirmNameTK && Arrcart
          ? confirmNameTK.items.find(
              (e) => e.nameproducts === Arrcart.nameproducts
            )
          : "";
      // index sản phẩm cần xóa
      const IndexProductUpdate = confirmNameTK.items.indexOf(confirmProduct);
      console.log(IndexProductUpdate);
      const ArrUpdate = confirmNameTK.items.splice(IndexProductUpdate, 1); // Trả về mảng items không chứa object vừa cập nhật
      // Thêm dữ liệu cần cập nhật, cụ thể là object mới
      state.items.push(Arrcart);
      console.log(ArrUpdate);
      const object1 = {
        nameTK: NameUser,
        items: [...state.items, ...confirmNameTK.items],
        totalPrice:
          Arrcart.TotalpriceOld + new Number(Arrcart.price * Arrcart.amount),
      };
      CartLocal(object1, true);
      return object1;
    }
    //  Nếu không có dữ liệu đầu vào thì sao chép giữ liệu từ local và in ra màn hình
    const object1 = {
      nameTK: NameUser,
      items: [...confirmNameTK.items],
      totalPrice: 0,
    };
    return object1;
  }
  if (action.type === "DELETE_CART") {
    const removeNameTK = Data ? Data.find((e) => e.nameTK === NameUser) : "";
    const findItem = removeNameTK.items.find(
      (e) => e.nameproducts === action.payload
    );
    console.log(findItem);
    const NewArrcart = removeNameTK.items.filter(
      (item) => item.nameproducts !== findItem.nameproducts
    );
    const object0 = {
      // Xóa sản phẩm khỏi hàm và giá của sản phẩm
      nameTK: NameUser,
      items: [...NewArrcart],
      totalPrice: state.items.price - new Number(action.payload.price),
    };
    CartLocal(object0, true);
    return object0;
  }
  return state;
};

export default listCart;
