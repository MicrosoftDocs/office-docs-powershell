module.exports = {
	GET_TEAM: 'Get-Team',
	INSTALL_MICROSOFT_TEAM: 'Install-Module MicrosoftTeams -SkipPublisherCheck',
	CONNECT_MICROSOFT_TEAM: 'Connect-MicrosoftTeams',
	INSTALL_PLATYPS: 'Install-Module -Name platyPS -SkipPublisherCheck -Scope CurrentUser',
	IMPORT_PLATYPS: 'Import-Module platyPS',
	UPDATE_MARKDOWN: 'Update-MarkdownHelp -Path "{}" -LogPath "{}"',
	SKYPE_SET_POLICY: 'Set-ExecutionPolicy RemoteSigned ',
	SKYPE_INSTALL_MODULE: 'Import-Module "C:\\\\Program Files\\\\Common Files\\\\Skype for Business Online\\\\Modules\\\\SkypeOnlineConnector\\\\SkypeOnlineConnector.psd1" -Force',
	SKYPE_GET_CRED: '$cred = Get-Credential',
	SKYPE_CREATE_SESSION: '$session = New-CsOnlineSession -Credential $cred -Verbose',
	SKYPE_IMPORT_SESSION: 'Import-PSSession -Session $session'
};
