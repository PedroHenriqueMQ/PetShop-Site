function ProductCard({ title, price, img }) {
  return (
    <div className="shadow rounded-md flex justify-center items-center flex-col w-64">
      <div className="bg-meuBackground">
        <img src={img} alt={title} className="h-64" />
      </div>
      <div className="flex flex-col p-2">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 font-semibold">R$ {price}</p>
        <button className="bg-meuAzul text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-500">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
