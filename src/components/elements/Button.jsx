import clsx from "clsx";

const sizes = {
    small: 'px-4 py-3',
    medium: 'px-6 py-4',
    large: 'w-full px-4 py-3',
};

const variants = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600',
};

function getClassName({ className, variant }) {
    return clsx(
        'text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50',
        variants[variant],
        className
    );
}

const Button = ({ 
    children,
    className,
    size = 'small',
    variant = 'primary',
    ...rest
 }) => {
    return (
        <button className={clsx(
            sizes[size],
            getClassName({ className, variant })
        )}
        {...rest}
        >
            {children}
        </button>
    )
}

export default Button;