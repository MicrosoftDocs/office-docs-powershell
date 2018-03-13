---
external help file: 
applicable: Skype for Business Online
schema: 2.0.0
---

# Set-CsTeamsMessagingPolicy

## SYNOPSIS
Set-CsTeamsMessagingPolicy \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-AllowOwnerDeleteMessage \<bool\>\] \[-AllowUserEditMessage \<bool\>\] \[-AllowUserDeleteMessage \<bool\>\] \[-AllowUserChat \<bool\>\] \[-AllowGiphy \<bool\>\] \[-GiphyRatingType \<string\>\] \[-AllowMemes \<bool\>\] \[-AllowStickers \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsTeamsMessagingPolicy \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-AllowOwnerDeleteMessage \<bool\>\] \[-AllowUserEditMessage \<bool\>\] \[-AllowUserDeleteMessage \<bool\>\] \[-AllowUserChat \<bool\>\] \[-AllowGiphy \<bool\>\] \[-GiphyRatingType \<string\>\] \[-AllowMemes \<bool\>\] \[-AllowStickers \<bool\>\] \[-Instance \<psobject\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
Set-CsTeamsMessagingPolicy [-WhatIf] [-Description <Object>] [-AllowMemes <Object>] [-AllowGiphy <Object>]
 [-AllowStickers <Object>] [-AllowUserEditMessage <Object>] [-AllowOwnerDeleteMessage <Object>]
 [-AllowUserDeleteMessage <Object>] [[-Identity] <Object>] [-Tenant <Object>] [-AllowUserChat <Object>]
 [-GiphyRatingType <Object>] [-Confirm] [-Force] [-Instance <Object>] [-AsJob]
```

## DESCRIPTION
Updates a Teams messaging policy, which designates what features a user is allowed to use within the messaging space.  Custom policies can be assigned to users using the Grant-CsTeamsMessagingPolicy cmdlet.


## EXAMPLES

### Example 1
```
powershell
PS C:\> Set-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy -AllowGiphy $false -AllowMemes $false
```

In this example two different property values are configured: AllowGiphy is set to false and AllowMemes is set to False.
All other policy properties will be left as previously assigned

### Example 2
```
powershell
PS C:\> Get-CsTeamsMessagingPolicy | Set-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy -AllowGiphy $false -AllowMemes $false
```

In this example two different property values are configured for all teams messaging policies in the organization: AllowGiphy is set to false and AllowMemes is set to False.
All other policy properties will be left as previously assigned


## PARAMETERS

### -AllowGiphy
Determines if Giphy images are available for use. 

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

### -AllowOwnerDeleteMessage
Determines if a user is allowed to delete all messages in the context of teams that they own.

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

### -Description
Provide a description of your policy to identify purpose of creating it.

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
Determines the Giphy content restrictions. Options are 'Moderate' or 'Strict'

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
Identity for the teams messaging policy you're modifying.  To modify the global policy, use this syntax: -Identity global. To modify a per-user policy, use syntax similar to this: -Identity TeamsMessagingPolicy.

If you do not specify an Identity the Set-CsTeamsMessagingPolicy cmdlet will automatically modify the global policy.

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

Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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
