export function getConf() {
  return {
    name: "my conf",
    x: 123,
    ready: true
  };
}

const conf = getConf();

// param - noImplicitAny
function a(b) {
  // noUnusedLocals
  const c = 1;
  return b * 2;
}
