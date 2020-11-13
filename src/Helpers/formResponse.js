const formResponse = {
    succes: (res, data) => {
      const responseObject = {
        success: true,
        status: 200,
        data: data,
      };
      res.json(responseObject);
    },
    error: (res, error) => {
      const responseObject = {
        success: false,
        status: 500,
        error: error,
      };
      res.json(responseObject);
    },
    pagination: ({ query }, res, data) => {
      const page = parseInt(query.page);
      const limit = parseInt(query.limit);
      const prevPage =
        page === 1 ? "" : `/page=${page - 1}&limit=${limit}`;
      const nextPage = `/page=${page + 1}&limit=${limit}`;
  
      const responseObject = {
        success: true,
        status: 200,
        data,
        pageInfo: {
          currentPage: query.page,
          limit: query.limit,
          prevPage,
          nextPage,
        },
      };
      res.json(responseObject);
    },
  };
  
  module.exports = formResponse;
  