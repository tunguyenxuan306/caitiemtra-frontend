import { useEffect, useState } from "react";
import api from "../services/api";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  const addEmployee = async () => {
    await api.post("/employees", { name, role });
    setName("");
    setRole("");
    fetchEmployees();
  };

  const deleteEmployee = async (id: string) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">👥 Quản lý Nhân viên</h2>
      <div className="flex space-x-2 mb-4">
        <input className="input input-bordered" placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input input-bordered" placeholder="Vai trò" value={role} onChange={(e) => setRole(e.target.value)} />
        <button className="btn btn-success" onClick={addEmployee}>Thêm</button>
      </div>
      <ul className="space-y-2">
        {employees.map((emp: any) => (
          <li key={emp.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{emp.name} - {emp.role}</span>
            <button className="btn btn-sm btn-error" onClick={() => deleteEmployee(emp.id)}>Xoá</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
