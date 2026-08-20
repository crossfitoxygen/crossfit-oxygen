export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#facc15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: 900,
          marginBottom: "16px",
        }}
      >
        CROSSFIT OXYGEN
      </h1>

      <p
        style={{
          color: "#fff",
          fontSize: "20px",
        }}
      >
        اختبار توافق الموقع مع Safari
      </p>

      <p
        style={{
          color: "#999",
          marginTop: "12px",
        }}
      >
        إذا ظهرت هذه الصفحة على الآيفون، فالمشكلة داخل أحد مكونات الموقع.
      </p>
    </main>
  );
}