const data = [
  {
    id: 1,
    name: "Home list",
    description: "buy this stuff for home",
    items: [
      { id: 1, title: "milk", status: false },
      { id: 2, title: "egg", status: false },
    ],
  },
  {
    id: 2,
    name: "Work list",
    description: "buy this stuff for Wordk",
    items: [
      { id: 1, title: "notebook", status: false },
      { id: 2, title: "pen", status: false },
    ],
  },
  
];
export const makeUniqId=()=>{
  return parseInt(Math.random()*1000)
}
export default data;
