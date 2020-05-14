const shell = require('./functions')

module.exports = async (vscode) => {
    let NEXT_TERM_ID = 1;
    const answ_refresh    = await vscode.window.showQuickPick(['Yes', 'No'], {
        placeHolder: "Also Refresh Migrate ?",
    });
    if (answ_refresh == "Yes") {
        const terminal  = vscode.window.createTerminal(`Lumen Migrate #${NEXT_TERM_ID++}`);
        terminal.sendText("php artisan migrate:fresh");
        vscode.window.showInformationMessage('Successfuly Refresh Migrate')
        setTimeout(function(){shell.closeTerminal(terminal)},12000)
    }else{
        const terminal  = vscode.window.createTerminal(`Lumen Migrate #${NEXT_TERM_ID++}`);
        terminal.sendText("php artisan migrate");
        vscode.window.showInformationMessage('Successfuly Migrate')
        setTimeout(function(){shell.closeTerminal(terminal)},12000)
    }
    
}