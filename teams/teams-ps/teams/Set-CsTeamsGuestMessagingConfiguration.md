---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsguestmessagingconfiguration
applicable: Microsoft Teams
title: Set-CsTeamsGuestMessagingConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Set-CsTeamsGuestMessagingConfiguration

## SYNOPSIS
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsGuestMessagingConfiguration [-Tenant <Guid>] [-AllowUserEditMessage <Boolean>]
 [-AllowImmersiveReader <Boolean>] [-AllowUserDeleteMessage <Boolean>] [-AllowUserChat <Boolean>] [-AllowGiphy <Boolean>]
 [-AllowUserDeleteChat <Boolean>] [-GiphyRatingType <String>] [-AllowMemes <Boolean>] [-AllowStickers <Boolean>] [-UsersCanDeleteBotMessages <Boolean>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsGuestMessagingConfiguration [-Tenant <Guid>] [-AllowUserEditMessage <Boolean>]
 [-AllowImmersiveReader <Boolean>] [-AllowUserDeleteMessage <Boolean>] [-AllowUserChat <Boolean>] [-AllowGiphy <Boolean>]
 [-AllowUserDeleteChat <Boolean>] [-GiphyRatingType <String>] [-AllowMemes <Boolean>] [-AllowStickers <Boolean>] [-UsersCanDeleteBotMessages <Boolean>] [-Instance <PSObject>] [-Force]
 [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.  This cmdlet lets you update the guest messaging options you'd like to enable in your organization.

## EXAMPLES

### Example 1
```
Set-CsTeamsGuestMessagingConfiguration -AllowMemes $False
```

The command shown in Example 1 disables memes usage by guests within Teams.

## PARAMETERS

### -AllowGiphy
Determines if Giphy images are available.

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

### -AllowMemes
Determines if memes are available for use.

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

### -AllowStickers
Determines if stickers are available for use.

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

### -AllowUserChat
Determines if a user is allowed to chat.

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

### -AllowUserDeleteMessage
Determines if a user is allowed to delete their own messages.

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

### -AllowUserEditMessage
Determines if a user is allowed to edit their own messages.

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

### -UsersCanDeleteBotMessages
Determines if a user is allowed to delete messages sent by bots.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -Force

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

### -AllowUserDeleteChat
Turn this setting on to allow users to permanently delete their one-on-one chat, group chat, and meeting chat as participants (this deletes the chat only for them, not other users in the chat). Set this to TRUE to allow. Set this to FALSE to prohibit.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: TRUE
Accept pipeline input: False
Accept wildcard characters: False
```

### -GiphyRatingType
Determines Giphy content restrictions. Default value is "Moderate", other options are "NoRestriction" and "Strict"

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

### -AllowImmersiveReader
Determines if immersive reader for viewing messages is enabled.

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

### -Identity

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
