import TableComponent from "../../components/TableComponent";
import { axiosInstance, tokenCurr } from "../../lib/axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [Transaksi, setTransaksi] = useState([]);

  const fetchDataTransaksi = async () => {
    const { data } = await axiosInstance.get("/bills", {
      headers: {
        Authorization: `Bearer ${tokenCurr}`,
      },
    });

    console.log(data.data[0].billDetails[0].id);
    setTransaksi(data.data);
  };

  useEffect(() => {
    fetchDataTransaksi();
    // console.log(tokenCurr);
  }, []);

  const productInfo = {
    ListTitle: ["id", "Name", "Harga", "type"],
    listname : ['id','name','phoneNumber','address'],
    state: Transaksi,
  };

  return (
    <>
      <TableComponent values={productInfo} />
      {/* <div className="container my-4">
        <h2 className="mb-4">Halaman Transaksi</h2>

        <div className="row mb-3">
          <div className="col">
            <Link color="primary">Tambah Produk</Link>
            <Button color="primary">Refresh</Button>
          </div>
          <div className="col"></div>
        </div>
        <Tables />
      </div> */}
    </>
  );
};
export default Home;
