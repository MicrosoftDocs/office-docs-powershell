---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/Set-CsTeamsMessagingConfiguration
schema: 2.0.0
---

# Set-CsTeamsMessagingConfiguration

## SYNOPSIS

The TeamsMessagingConfiguration determines the messaging settings for users in your tenant.

## SYNTAX

```powershell
Set-CsTeamsMessagingConfiguration [-EnableVideoMessageCaptions <Boolean>]
 [-EnableInOrganizationChatControl <Boolean>] [-CustomEmojis <Boolean>] [-Identity] <String> [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

TeamsMessagingConfiguration determines the messaging settings for the users in your tenant. This cmdlet lets you update the user messaging options you'd like to enable in your organization.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsMessagingConfiguration -CustomEmojis $False
```

The command shown in example 1 disables custom emojis within Teams.

## PARAMETERS

### -Confirm

Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomEmojis

This setting enables/disables the use of custom emojis and reactions across the whole tenant. Upon enablement, admins and/or users can define a user group that is allowed.
Possible Values: True, False

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

### -EnableInOrganizationChatControl

This setting determines if chat regulation for internal communication in tenant is allowed.
Possible Values: True, False

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

### -EnableVideoMessageCaptions

 This setting determines if closed captions will be displayed, for Teams Video Clips, during playback.
 Possible values: True, False

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

### -Force

The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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

### -Identity

Specifies the collection of tenant messaging configuration settings to be returned. Because each tenant is limited to a single, global collection of messaging settings there is no need include this parameter when calling the cmdlet. If you do choose to use the Identity parameter you must also include the Tenant parameter.

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

### None

## OUTPUTS

### System.Void

## NOTES

## RELATED LINKS

[Get-CsTeamsMeetingConfiguration](Get-CsTeamsMeetingConfiguration.md)
