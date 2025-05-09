const Button = ({
  label,
  iconURL,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth = false,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor || ""} ${textColor || ""} ${borderColor || ""} rounded-full ${fullWidth ? "w-full" : ""}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt={`${label} icon`}
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
