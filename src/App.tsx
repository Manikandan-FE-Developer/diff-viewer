import React from 'react';
import DiffViewer from './DiffViewer';

function App() {
    const oldText = 'This is the old text.\nIt has some lines.';
    const newText = 'This is the new text.\nIt has some additional lines.';

    return (
        <div>
            <h1>Diff Viewer Test</h1>
            <DiffViewer oldText={oldText} newText={newText} />
        </div>
    );
}

export default App;