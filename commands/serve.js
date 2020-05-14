const shell 	= require('./functions')
var terminal 	= {}
module.exports.start = function (vscode) {
	let NEXT_TERM_ID = 1;
    terminal 	= vscode.window.createTerminal(`Lumen Serve ${NEXT_TERM_ID}`);
	terminal.sendText("xdg-open http://localhost:8000; php -S localhost:8000 -t public");
	vscode.window.showInformationMessage('Successfuly Run Lumen Server On http://localhost:8000')
}

module.exports.stop = function (vscode) {
	shell.closeTerminal(terminal)
	vscode.window.showInformationMessage('Successfuly Stop Lumen Server')
}

module.exports.restart = function (vscode) {
	if (terminal === null) {
		vscode.window.showWarningMessage("Server not running !");
	}else{
		shell.closeTerminal(terminal)
		let NEXT_TERM_ID 	= 1;
		terminal 			= vscode.window.createTerminal(`Lumen Serve ${NEXT_TERM_ID}`);
		terminal.sendText("xdg-open http://localhost:8000; php -S localhost:8000 -t public");
		vscode.window.showInformationMessage('Successfuly Restart Lumen Server')
	}
}