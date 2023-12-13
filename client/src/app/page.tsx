"use client";
import Image from "next/image";
import { confert } from "./action";
import { ChangeEvent, useEffect, useState } from "react";
import debounce from "lodash.debounce";

export default function Home() {
  type uco = {
    uco: number;
  };
  const [query, setQuery] = useState<uco>({ uco: 0 });
  const [rupiah, setRupiah] = useState<number>();

  const updateQuery = (e: ChangeEvent<HTMLInputElement> | null) => {
    if (e) {
      const data = e?.target?.value;
      setQuery({
        ...query,
        uco: +data,
      });
      // onSearch(query);
      // console.log(query);
    }
  };

  // useEffect(() => {
  //   const confert = () => {
  //     console.log(query.uco, "========= uco");
  //     const Rp = query.uco * 3500;
  //     console.log(Rp, "=========== rp");
  //     setRupiah(Rp);
  //   };
  //   confert();
  // }, [setRupiah]);
  const debounceOnChange = debounce(updateQuery, 300);
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="input uco periter"
          onChange={(e) => debounceOnChange(e)}
        />
        <p className=" text-blue-400">Rp {query.uco * 3500}</p>
      </form>
    </>
  );
}
