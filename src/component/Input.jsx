const Input = ({ label, textarea, ...props }) => {
  const classes =
    "w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-1 text-stone-600  focus:border-stone-900 focus:outline-none";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="font-bold text-gray-700 ">{label}</label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
};

export default Input;
