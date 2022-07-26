import ErrorIcon from "@mui/icons-material/Error";

export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <box>
        <ErrorIcon fontSize="large" />
        <h6>404 : 아무것도 없으니 돌아가...</h6>
      </box>
    </div>
  );
}
