function Filtro() {
  return (
    <div className="flex justify-between py-12">
      {/* IZQUIERDA */}
      <div className="flex gap-6 flex-wrap">
        <select
          className="py-2 px-2 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          name="Tipo"
          id=""
        >
          <option>Tipo</option>
          <option value="cana">Caña</option>
          <option value="reel">Reel</option>
        </select>
        <input
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          type="number"
          name="min"
          placeholder="precio min."
        />
        <input
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          type="number"
          name="max"
          placeholder="precio max."
        />
      </div>
    </div>
  );
}

export default Filtro;
