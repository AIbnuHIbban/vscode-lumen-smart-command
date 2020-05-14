const vscode 	= require('vscode');
const fs	 	= require('fs')
const path	 	= require('path');
const migration	= require('./commands/migration');
const controller= require('./commands/controller');
const model		= require('./commands/model');
const migrate	= require('./commands/migrate');
const rollback	= require('./commands/rollback');
const serve		= require('./commands/serve');
const seeder	= require('./commands/seeder');
const router	= require('./commands/route');

let pathwork = vscode.workspace.workspaceFolders[0].uri.fsPath;

function activate(context) {

	let lumen_migration 	= vscode.commands.registerCommand('lumen.migration', function () {
		migration(vscode, fs, pathwork, path)
	});
	let lumen_controller 	= vscode.commands.registerCommand('lumen.controller', function () {
		controller(vscode, fs,pathwork, path)
	});
	let lumen_model 		= vscode.commands.registerCommand('lumen.model', function () {
		model(vscode, fs,pathwork, path)
	});
	let lumen_migrate		= vscode.commands.registerCommand('lumen.migrate', function () {
		migrate(vscode)
	})
	let lumen_migrate_roll	= vscode.commands.registerCommand('lumen.migrate.rollback', function () {
		rollback(vscode)
	})
	let lumen_start_serve	= vscode.commands.registerCommand('lumen.serve.start', function () {
		serve.start(vscode)
	})
	let lumen_stop_serve	= vscode.commands.registerCommand('lumen.serve.stop', function () {
		serve.stop(vscode)
	})
	let lumen_restart_serve	= vscode.commands.registerCommand('lumen.serve.restart', function () {
		serve.restart(vscode)
	})
	let lumen_seeder		= vscode.commands.registerCommand('lumen.seeder', function () {
		seeder(vscode,fs,pathwork,path)
	})
	let lumen_router		= vscode.commands.registerCommand('lumen.router', function () {
		router(vscode,fs,pathwork,path)
	})
	
	context.subscriptions.push(lumen_migration);
	context.subscriptions.push(lumen_controller);
	context.subscriptions.push(lumen_model);
	context.subscriptions.push(lumen_migrate);
	context.subscriptions.push(lumen_migrate_roll);
	context.subscriptions.push(lumen_start_serve);
	context.subscriptions.push(lumen_stop_serve);
	context.subscriptions.push(lumen_restart_serve);
	context.subscriptions.push(lumen_seeder);
	context.subscriptions.push(lumen_router);

}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
