const getInitialData = () => ([
  {
    id: 'notes-1',
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-2',
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Kenapa komponen ini disebut functional? Karena komponen ini dibubat dari fungsi JavaScript, pada umumnya memiliki satu argumen yaitu props.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-3',
    title: "Modularization",
    body: "Modularization merupakan teknik dalam pengembangan perangkat lunak di mana kode program dipecah menjadi beberapa bagian berdasarkan fungsinya. Teknik ini memudahkan kolaborasi antar developer.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-4',
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang dipanggil pada berbagai tahapan pembuatan, pembaruan, dan penghapusan component. Method lifecycle yang paling sering digunakan adalah componentDidMount, componentDidUpdate, dan componentWillUnmount.",
    archived: true,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-5',
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modul standar JavaScript yang didukung oleh browser modern. Modul ESM menggunakan kata kunci import dan export untuk mengimpor dan mengekspor nilai antar modul.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
]);

export { getInitialData };