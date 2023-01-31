export const success = (message = 'success', data = {}) => {
  return {
    success: 1,
    message: message,
    data,
  };
};

export const error = (message = 'error', data = {},) => {
  return {
    success: 0,
    message: message,
    data,

  };
};

export function pagination<T>(
  list: T[],
  total: number,
  current = 1,
  pageSize = 15,
) {
  return {
    list,
    pageSize,
    total,
    totalPage: Math.ceil(total / pageSize),
    current,
  };
}

export const _RES = (success = 1, message = 'success', data = {}) => {
  return {
    success: success,
    message: message,
    data:data,
  };
};

export function _PAGINATION<T>(
  list: T[],
  total: number,
  current = 1,
  pageSize = 15
) {
  return {
    list,
    pageSize,
    total,
    totalPage: Math.ceil(total / pageSize),
    current
  };
}

