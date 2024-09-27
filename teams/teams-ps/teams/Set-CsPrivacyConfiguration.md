---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
applicable: Microsoft Teams
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsPrivacyConfiguration
schema: 2.0.0
---

# Set-CsPrivacyConfiguration

## SYNOPSIS

Modifies an existing set of privacy configuration settings.
Privacy configuration settings help determine how much information users make available to other users.
This cmdlet was introduced in Lync Server 2010.

## SYNTAX

```powershell
Set-CsPrivacyConfiguration [-AutoInitiateContacts <Boolean>] [-DisplayPublishedPhotoDefault <Boolean>]
 [-EnablePrivacyMode <Boolean>] [[-Identity] <String>] [-PublishLocationDataDefault <Boolean>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

Privacy configuration settings can be applied at the global scope, the site scope, and at the service scope (albeit only for the User Server service).
The Set-CsPrivacyConfiguration cmdlet enables you to modify any of the privacy configuration settings currently in use in your organization.

## EXAMPLES

### Example 1

```powershell
Set-CsPrivacyConfiguration -Identity site:Redmond -EnablePrivacyMode $False -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True
```

The command shown in Example 1 modifies three property values for the privacy configuration settings with the Identity site:Redmond.
The three property values modified are AutoInitiateContacts, PublishLocationDataDefault and DisplayPublishedPhotoDefault.

### Example 2

```powershell
Get-CsPrivacyConfiguration | Set-CsPrivacyConfiguration -EnablePrivacyMode $True
```

Example 2 enables privacy mode for all the privacy configuration settings currently in use in the organization.
To do this, the command first calls the \`Get-CsPrivacyConfiguration\` cmdlet without any parameters; this returns the complete collection of privacy settings.
This collection is then piped to the \`Set-CsPrivacyConfiguration\` cmdlet, which takes each item in the collection and sets the EnablePrivacyMode property to True.

### Example 3

```powershell
Get-CsPrivacyConfiguration | Where-Object {$_.EnablePrivacyMode -eq $False} | Set-CsPrivacyConfiguration -AutoInitiateContacts $True -PublishLocationDataDefault $True -DisplayPublishedPhotoDefault $True
```

In Example 3, modifications are made to all the privacy configuration settings that are not currently using privacy mode.
To carry out this task, the \`Get-CsPrivacyConfiguration\` cmdlet is first used in order to return a collection of all the privacy configuration settings.
This collection is piped to the \`Where-Object\` cmdlet, which selects only those settings where the EnablePrivacyMode property is equal to False.
The filtered collection is then piped to the \`Set-CsPrivacyConfiguration\` cmdlet, which assigns values to the AutoInitiateContacts, PublishLocationDataDefault, and DisplayPublishedPhotoDefault properties for each item in the collection.

## PARAMETERS

### -Identity

Unique identifier for the privacy configuration settings to be modified.
To modify the global settings, use this syntax:

\`-Identity global\`

To modify settings configured at the site scope, use syntax similar to this:

\`-Identity site:Redmond\`

To modify settings at the service level, use syntax like this:

\`-Identity service:Redmond-UserServices-1\`

Note that privacy settings can only be applied to the User Server service.
An error will occur if you try to apply these settings to any other service.

If this parameter is not specified then the global settings will be updated when you call the \`Set-CsPrivacyConfiguration\` cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutoInitiateContacts

If True, Skype for Business will automatically add your manager and your direct reports to your Contacts list.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayPublishedPhotoDefault

If True, the user's photo will automatically be published in Skype for Business.
If False, the user's photo will not be available unless he or she explicitly selects the option Let others see my photo.
The default value is True.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnablePrivacyMode

If True, gives users the opportunity to enable the advanced privacy mode.
In advanced privacy mode, only people on your Contacts list will be allowed to view your presence information.
If False, your presence information will be available to anyone in your organization.
The default value is False.

For information about privacy mode in Microsoft Teams, see User presence in Teams (/microsoftteams/presence-admins).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishLocationDataDefault

If True, location data will automatically be published in Skype for Business.
If False, location data will not be available unless the user explicitly selects the option Show Contacts My Location.
The default value is True.

```yaml
Type: Boolean
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

### -MsftInternalProcessingMode

For internal use only.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsPrivacyConfiguration](Get-CsPrivacyConfiguration.md)
