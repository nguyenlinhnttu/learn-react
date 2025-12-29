import { useState } from "react"

const orders = [100, 200, 300];

function DemoHookType() {
    // Demo useState 
    const [count, setCount] = useState<number>(() =>{
        // init value 1 lần duy nhất bằng arrow function
        // Nếu để total bên ngoài thì mỗi lần component re-render sẽ tính toán lại
        const total = orders.reduce((total, cur) => total + cur);
        return total;
    });

    const handleCounterIncrement = ({ value }) => {
        setCount(count + value);
        // Trả lại state mới nhất khi cập nhật state dựa trên state trước đó
        setCount(preCount => preCount + value);
    }

    // return (
    //        // Lưu ý với việc truyền tham số cho hàm xử lý sự kiện cần bọc lại bằng arrow function
    //        // Nếu không có tham số ko cần bọc
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={() => handleCounterIncrement({ value: 2 })}>Increment</button>
    //     </div>
    // )


    //     const handleCounterIncrement = () =>{
    //     setCount(count + 1);
    // }

    // return (
    //     <div>
    //         <p>Count: {count}</p>
    //         <button onClick={ handleCounterIncrement}>Increment</button>
    //     </div>
    // )

    const [user, updateUser] = useState<{ name: string; age: number }>({
        name: 'John',
        age: 20
    });

    const handleUpdateUser = () => {
        // Cách 1: Không giữ nguyên thuộc tính cũ tạo user data mới
        // updateUser({ name: 'Jane' } as { name: string; age: number });

        // Cách 2: Giữ nguyên thuộc tính cũ cập nhật và thêm thuộc tính mới
         updateUser({ ...user, age: 40, bio : 'Developer' });
    }   

    return(
        <div>
            <p>User Name: {user.name}</p>
            <p>User Age: {user.age}</p>
            {user.age > 25 && <p>Age is greater than 25</p>}
            {user.bio && <p>Bio: {user.bio}</p>}
            <button onClick={handleUpdateUser}>Update User</button>
        </div>
    )

}

export default DemoHookType