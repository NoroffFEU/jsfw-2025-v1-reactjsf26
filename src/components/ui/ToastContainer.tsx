const ToastContainer = ({
  item,
  header = 'Added to Cart',
  onClose,
}: {
  item: { title: string; price: number };
  header?: string;
  onClose: () => void;
}) => {
  return (
    <div
      className="toast show position-fixed"
      style={{ right: '0', top: '30%' }}
      role="alert"
    >
      <div className="toast-header d-flex justify-content-between">
        <strong>{header}</strong>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">
        <p>{item.title}</p>
        <p>Price: {item.price}</p>
      </div>
    </div>
  );
};
export default ToastContainer;
