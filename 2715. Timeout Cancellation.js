let cancellable = function (fn, args, t) {
    let timeout = setTimeout(() =>
        fn(...args), t)
    return () => clearTimeout(timeout);
};
