// Can ham luu vao local storage
export async function CartLocal(Products, remove) {
  const Arrcart = [];
  const save = JSON.parse(localStorage.getItem("CartUser")); // một obj

  // Lấy tài khoản cùng tên trong local để cập nhật lại mảng dữ liệu cũ chứ không thêm mới, điều kiện là không có dữ liệu từ JSON, và có dữ liệu từ hàm add gửi về
  if (save && Products) {
    const FindUserCart = save.find((e) => e.nameTK === Products.nameTK);
    // Trung ten thi them vao items
    if (FindUserCart) {
      if (remove) {
        Arrcart.push(Products);
        localStorage.setItem("CartUser", JSON.stringify(Arrcart));
      }
      // Cập nhật cart ở tài khoản hiện tại, product là gì thì nó sẽ cập nhật mới cái đó
      if (!remove) {
        for (const key in Products.items) {
          const newData = {
            // Product chứa 2 object do redux cũng chứa các object đấy
            ...Products.items[key],
          };
          // Thêm items cũ
          FindUserCart.items.push(newData);
        }
        // Thêm items mới
        // Nếu độ dài của mảng tổng hơn 2 thì sao chép toàn dữ liệu cũ
        if (save.length >= 2) {
          for (const key in save) {
            const oldData = {
              ...save[key],
            };
            // Sao chép lại cart ở các tài khoản khác, để tránh lúc thêm cart ở tài khoản hiện tại thì cart ở tài khoản khác không bị mất
            Arrcart.push(oldData);
          }
          localStorage.setItem("CartUser", JSON.stringify(Arrcart));
        } else {
          Arrcart.push(FindUserCart);
          localStorage.setItem("CartUser", JSON.stringify(Arrcart));
        }
      }
    } else {
      // Nếu app không tìm được dữ liệu về tài khoản hiện tại thì nó sẽ sao chép cart tài khoản cũ và tạo tài khoản cart mới
      // Sao chép dữ liệu cũ
      for (const key in save) {
        const oldData = {
          ...save[key],
        };
        // Sao chép lại cart ở các tài khoản khác, để tránh lúc thêm cart ở tài khoản hiện tại thì cart ở tài khoản khác không bị mất
        Arrcart.push(oldData);
      }
      // Tạo hàm mới nếu chưa có tài khoản
      Arrcart.push(Products);
      localStorage.setItem("CartUser", JSON.stringify(Arrcart));
    }
    // Ham nay dang lam moi moi khi reset lai
  }
  // Nếu local rỗng, người dùng đăng kí thêm mới lần đầu
  if (!save && Products) {
    Arrcart.push(Products);
    localStorage.setItem("CartUser", JSON.stringify(Arrcart));
  }
  return Arrcart;
}

// Hàm đăng kí tài khoản, đầu vào là các input từ form
export async function SaveLocal(Namelocal, PW, Email, Phone) {
  // Mảng chứa dữ liệu về các tài khoản
  const useArr = [];
  const save = JSON.parse(localStorage.getItem("AccountClient")); // một obj
  // Lặp qua từng phân tử mảng để trả về giá trị cũ
  for (const key in save) {
    const oldData = {
      ...save[key],
    };
    useArr.push(oldData);
  }
  const localAccount = {
    name: Namelocal,
    Password: PW,
    Email: Email,
    Phone: Phone,
  };
  // Chia làm 2 lần push để dữ liệu không bị lặp lại
  useArr.push(localAccount); // Ham nay tao moi
  localStorage.setItem("AccountClient", JSON.stringify(useArr)); // một JSON
  return useArr;
}

/*

name: Jaykiby Minh Dung
email: doan@gmail.com
pw: 321413243214324
phone: 83943294792
*/
