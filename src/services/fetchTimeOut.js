export function fetchTimeOut(secs) {
  return new Promise((_, reject) => {
    setTimeout(
      () => reject(new Error("Request took too long, check your internet")),
      secs * 1000
    );
  });
}
