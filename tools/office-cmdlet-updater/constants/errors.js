module.exports.general = {
	TOOL_PLATFORM_TYPE: "The Cmdlet Updater is only supported on x64 architecture. X86 is not supported."
};

module.exports.powerShellErrors = {
	PS_GALLERY_INSTALL_ERROR: "You should use x64 version of PowerShell",
	DOC_PATH_DOESNT_EXIST: "Path to documentation folder doesn't exist",
	INSTALL_PLATYPS_ERROR: "Can't install 'platyPS' module",
	IMPORT_PLATYPS_ERROR: "Cant't import 'platyPS' module",
	INSTALL_MICROSOFT_TEAM_ERROR: "Can't install 'Microsoft team' module",
	AUTH_MICROSOFT_TEAM_ERROR: "Can't auth into 'Microsoft team'",
	EMPTY_CONFIG_CREDENTIALS: "Empty credentials fields in a config file. Please, fill 'platyPS.credentials' section into a config file",
	SKYPE_INSTALL_ERROR: "The Skype PowerShell module does not appear to be installed. Please review the README to install the Skype module and try again.",
	EXCHANGE_INSTALL_ERROR: "The Exchange PowerShell module does not appear to be installed. Please review the README to install the Exchange module and try again.",
};

module.exports.markdownErrors = {
	CANT_CREATE_TEMP_FOLDER: "Can't create temp folder",
	CANT_COPY_MD_FILE: "Can't copy markdown file into temp folder",
	CANT_OPEN_LOG_FILE: "Can't open log file"
};

module.exports.mailErrors = {
	CANT_GET_SENDGRID_API_KEY: 'Sendgrid api key is empty',
	CANT_GET_MAIL_TO: 'Mail to is empty in config file',
	CANT_GET_MAIL_FROM: 'Mail from is empty in config file',
	CANT_GET_MAIL_SUBJECT: 'Mail subject is empty in config file'
};
