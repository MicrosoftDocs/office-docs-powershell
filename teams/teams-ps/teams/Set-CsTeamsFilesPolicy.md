---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsfilespolicy
schema: 2.0.0
---

# Set-CsTeamsFilesPolicy

## SYNOPSIS
Creates a new teams files policy.
teams files policies determine whether or not files entry points to sharepoint enabled for a user.
The policies also specify third party app id to allow file storage(eg. Box).

## SYNTAX

```
Set-CsTeamsFilesPolicy [-NativeFileEntryPoints <String>] [-DefaultFileUploadAppId <String>]
 [-Identity] <String> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Modifies an existing teams files policy.
Teams files provides organizations with different files capabilities.

Microsoft Teams uses OneDrive and SharePoint (ODSP) to store and share content, but some organizations and users might prefer to use third-party storage providers.  

If your organization chooses a third-party for content storage, you need to turn off the ``NativeFileEntryPoints`` parameter in the Teams Files policy. This parameter is enabled by default, which shows the option to upload content from ODSP to Teams chats or channels. 
Tenant admin would be able to create a customized teams files policy to match the organization's requirements.

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

### -Description
{{ Fill Description Description }}

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

### -Force
{{ Fill Force Description }}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

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

[Get-CsTeamsFilesPolicy]()

[New-CsTeamsFilesPolicy]()

[Remove-CsTeamsFilesPolicy]()

[Grant-CsTeamsFilesPolicy]()

