// Tiny test program: Fibonacci sequence, served as a Cloudflare Worker.
export function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

export default {
  async fetch(request) {
    const sequence = Array.from({ length: 15 }, (_, i) => fib(i));
    return new Response(`Fibonacci: ${sequence.join(', ')}\n`, {
      headers: { 'content-type': 'text/plain; charset=utf-8' },
    });
  },
};
