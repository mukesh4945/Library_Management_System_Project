import AdminSidebar from "../components/sidebars/AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <main
        style={{
          marginLeft: "240px",
          padding: "20px",
          width: "100%",
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
