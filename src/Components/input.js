export const InputField = ({
  index,
  type,
  name,
  className,
  id,
  placeholder,
  setActivity,
  setHour,
  actValue,
  hrValue,
}) => {
  //   console.log(index);

  if (index === 0) {
    return (
      <input
        type={type}
        name={name}
        className={className}
        id={id}
        placeholder={placeholder}
        onChange={setActivity}
        value={actValue}
        required
      />
    );
  }
  return (
    <input
      type={type}
      name={name}
      className={className}
      id={id}
      placeholder={placeholder}
      value={hrValue}
      onChange={setHour}
      required
    />
  );
};
