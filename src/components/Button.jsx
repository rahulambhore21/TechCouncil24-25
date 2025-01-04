import clsx from "clsx";

const Button = ({ id, title, containerClass }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black transition-transform duration-300 ease-in-out hover:scale-105",
        containerClass
      )}
      >
      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
      <span className="relative inline-flex font-general text-xs uppercase ">
        {title}
      </span>
    </button>
  );
};

export default Button;
