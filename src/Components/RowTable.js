export const RowTable = ({
  Activity,
  HR,
  UniqueId,
  deleteItem,
  changeType,
  changeTo,
  value,
  btnSuccessColor,
  arrowDirection,
}) => {
  return (
    <tr>
      <td>{Activity}</td>
      <td>{HR}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteItem(UniqueId, value)}
        >
          <i className="fa-sharp fa-solid fa-trash"></i>
        </button>
        <button
          type="button"
          className={"btn btn-" + btnSuccessColor}
          onClick={() => changeType(UniqueId, changeTo)}
        >
          <i className={"fa-solid fa-arrow-" + arrowDirection}></i>
        </button>
      </td>
    </tr>
  );
};
