import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-1 text-stone-600  focus:border-stone-900 focus:outline-none";
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="font-bold text-gray-700 ">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
