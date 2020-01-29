---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/set-csteamsguestmessagingconfiguration
applicable: Skype for Business Online
title: Set-CsTeamsGuestMessagingConfiguration
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Set-CsTeamsGuestMessagingConfiguration

## SYNOPSIS
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.

## SYNTAX

### Identity (Default)
```
Set-CsTeamsGuestMessagingConfiguration [-Tenant <Guid>] [-AllowUserEditMessage <Boolean>]
 [-AllowUserDeleteMessage <Boolean>] [-AllowUserChat <Boolean>] [-AllowGiphy <Boolean>]
 [-GiphyRatingType <String>] [-AllowMemes <Boolean>] [-AllowStickers <Boolean>] [[-Identity] <XdsIdentity>]
 [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsTeamsGuestMessagingConfiguration [-Tenant <Guid>] [-AllowUserEditMessage <Boolean>]
 [-AllowUserDeleteMessage <Boolean>] [-AllowUserChat <Boolean>] [-AllowGiphy <Boolean>]
 [-GiphyRatingType <String>] [-AllowMemes <Boolean>] [-AllowStickers <Boolean>] [-Instance <PSObject>] [-Force]
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

### -GiphyRatingType
Determines Giphy content restrictions. Default value is "Moderate", other option is "Strict"

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

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

