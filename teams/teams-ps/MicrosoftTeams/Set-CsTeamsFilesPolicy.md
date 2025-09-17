---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsfilespolicy
schema: 2.0.0
title: Set-CsTeamsFilesPolicy
---

# Set-CsTeamsFilesPolicy

## SYNOPSIS
Creates a new teams files policy.
 Teams files policies determine whether or not files entry points to SharePoint enabled for a user.
The policies also specify third-party app ID to allow file storage (e.g., Box).

## SYNTAX

```powershell
Set-CsTeamsFilesPolicy [-NativeFileEntryPoints <String>] [-SPChannelFilesTab <String>]
 [-DefaultFileUploadAppId <String>] [-FileSharingInChatswithExternalUsers <String>]
 [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
If your organization chooses a third-party for content storage, you can turn off the NativeFileEntryPoints parameter in the Teams Files policy. This parameter is enabled by default, which shows option to attach OneDrive / SharePoint content from Teams chats or channels. When this parameter is disabled, users won't see access points for OneDrive and SharePoint in Teams. Please note that OneDrive app in the left navigation pane in Teams isn't affected by this policy.
Teams administrators can also choose which file service will be used by default when users upload files from their local devices by dragging and dropping them in a chat or channel. OneDrive and SharePoint are the existing defaults, but admins can now change it to a third-party app.
Teams administrators would be able to create a customized teams files policy to match the organization's requirements.

## EXAMPLES

### Example 1
```
Set-CsTeamsFilesPolicy -Identity "CustomOnlineVoicemailPolicy" -NativeFileEntryPoints Disabled/Enabled
```

The command shown in Example 1 changes the teams files policy CustomTeamsFilesPolicy with NativeFileEntryPoints set to Disabled/Enabled.

### Example 2
```
Set-CsTeamsFilesPolicy -DefaultFileUploadAppId GUID_appId
```

The command shown in Example 2 changes the DefaultFileUploadAppId to AppId_GUID for tenant level global teams files policy when calling without Identity parameter.

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultFileUploadAppId
This can be used by the 3p apps to configure their app, so when the files will be dragged and dropped in compose, it will get uploaded in that 3P app.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FileSharingInChatswithExternalUsers

Indicates if file sharing in chats with external users is enabled. It is by default enabled, to disable admins can run following command.
```powershell
Set-CsTeamsFilesPolicy -Identity Global -FileSharingInChatswithExternalUsers Disabled 
```

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Suppresses the display of any non-fatal error message that might arise when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
A unique identifier specifying the scope, and in some cases the name, of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NativeFileEntryPoints
This parameter is enabled by default, which shows the option to upload content from ODSP to Teams chats or channels. .
Possible values are Enabled or Disabled.
```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False

```
### -SPChannelFilesTab

Indicates whether Iframe channel files tab is enabled, if not, integrated channel files tab will be enabled.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsfilespolicy)

