---
external help file: 
applicable: Skype for Business Online
title: Set-CsTeamsGuestMessagingConfiguration
schema: 2.0.0
---

# Set-CsTeamsGuestMessagingConfiguration

## SYNOPSIS
TeamsGuestMessagingConfiguration determines the messaging settings for the guest users.

Set-CsTeamsGuestMessagingConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-AllowUserEditMessage \<bool\>\] \[-AllowUserDeleteMessage \<bool\>\] \[-AllowUserChat \<bool\>\] \[-AllowGiphy \<bool\>\] \[-GiphyRatingType \<string\>\] \[-AllowMemes \<bool\>\] \[-AllowStickers \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsTeamsGuestMessagingConfiguration \[-Tenant \<guid\>\] \[-AllowUserEditMessage \<bool\>\] \[-AllowUserDeleteMessage \<bool\>\] \[-AllowUserChat \<bool\>\] \[-AllowGiphy \<bool\>\] \[-GiphyRatingType \<string\>\] \[-AllowMemes \<bool\>\] \[-AllowStickers \<bool\>\] \[-Instance \<psobject\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Set-CsTeamsGuestMessagingConfiguration [-AllowMemes <Object>] [-WhatIf] [-AllowGiphy <Object>]
 [-AllowStickers <Object>] [-AllowUserEditMessage <Object>] [-AllowUserDeleteMessage <Object>]
 [[-Identity] <Object>] [-Tenant <Object>] [-AllowUserChat <Object>] [-GiphyRatingType <Object>] [-Confirm]
 [-Force] [-Instance <Object>] [-AsJob]
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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
Type: Object
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

### -AsJob

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

## INPUTS

### System.Management.Automation.PSObject


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

