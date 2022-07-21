export default function get_Users(req, res) {
  res.status(200).json([
    { id: 1, name: "choihantae" },
    { id: 2, name: "jungmin" },
    { id: 3, name: "seohee" },
  ]);
}
