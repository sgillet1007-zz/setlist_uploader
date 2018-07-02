export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

const grid = 8

export const getListStyle = isDraggingOver => ({
border: '1px solid lightgrey',
padding: grid,
width: '60%',
margin: 'auto'
});

export const getItemStyle = (isDragging, draggableStyle, accordion) => ({
textAlign: 'center',
fontSize: '2rem',
userSelect: 'none',
padding: grid,
margin: `0 0 ${grid}px 0`,
boxShadow: '2px 2px 2px lightgrey',
background: accordion ? 'yellow' : 'white',
...draggableStyle,
});