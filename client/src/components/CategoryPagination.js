import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { fetchCategories } from "../api/ItemApi";
import { observer } from "mobx-react-lite";
import { Pagination } from "react-bootstrap";

const CategoryPagination = () => {
  const { item } = useContext(Context);
  const pages = [];
  useEffect(() => {
    fetchCategories(item.page, 18).then((data) => {
      item.setCategory(data.category);
      item.setTotalCount(data.totalCount);
    });
  });
  const pageCount = Math.ceil(item.totalCount / 18);
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <>
      <div className="mt-3">
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            active={item.page === page}
            onClick={() => item.setPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
      </div>
    </>
  );
};

export default observer(CategoryPagination);
