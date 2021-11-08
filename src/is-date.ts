function isDate(value: unknown): value is Date {
  return Object.prototype.toString.call(value) === "[object Date]";
}

export default isDate;
