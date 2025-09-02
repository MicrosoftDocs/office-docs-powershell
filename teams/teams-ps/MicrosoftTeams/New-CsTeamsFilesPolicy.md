---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsfilespolicy
schema: 2.0.0
title: New-CsTeamsFilesPolicy
---

# New-CsTeamsFilesPolicy

## SYNOPSIS
Creates a new teams files policy.

## SYNTAX

```
New-CsTeamsFilesPolicy [-NativeFileEntryPoints <String>] [-SPChannelFilesTab <String>]
 [-DefaultFileUploadAppId <String>] [-FileSharingInChatswithExternalUsers <String>]
 [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
If your organization chooses a third-party for content storage, you can turn off the NativeFileEntryPoints parameter in the Teams Files policy. This parameter is enabled by default, which shows option to attach OneDrive / SharePoint content from Teams chats or channels. When this parameter is disabled, users won't see access points for OneDrive and SharePoint in Teams. Please note that OneDrive app in the left navigation pane in Teams isn't affected by this policy.
Teams administrators would be able to create a customized teams files policy to match the organization's requirements.

## EXAMPLES

### Example 1
```powershell
New-CsTeamsFilesPolicy -Identity "CustomTeamsFilesPolicy" -NativeFileEntryPoints Disabled/Enabled
```

The command shown in Example 1 creates a per-user teams files policy CustomTeamsFilesPolicy with NativeFileEntryPoints set to Disabled/Enabled and other fields set to tenant level global value.

## PARAMETERS

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

Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
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

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsfilespolicy)

[Get-CsTeamsFilesPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsfilespolicy)

