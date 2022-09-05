export const StatusSelector = ({ activity }) => {
  return (
    <select id="status">
      <option value="default">0</option>

      <option value="red">1</option>
      <option value="yellow">2</option>
      <option value="green">3</option>
    </select>
  );
};
