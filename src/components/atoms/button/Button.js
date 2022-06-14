const Button = ({ children, className, id, onClick, title }) => (
  <button className={className} id={id} onClick={onClick} title={title}>
    {children}
  </button>
);

export default Button;
