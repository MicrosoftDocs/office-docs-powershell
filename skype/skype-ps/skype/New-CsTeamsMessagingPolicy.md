---
external help file: 
applicable: Skype for Business Online
title: New-CsTeamsMessagingPolicy
schema: 2.0.0
---

# New-CsTeamsMessagingPolicy

## SYNOPSIS
Specifies a Teams messaging policy, which designates what features a user is allowed to use within the messaging space. 

New-CsTeamsMessagingPolicy \[-Identity\] \<XdsIdentity\> \[-Tenant \<guid\>\] \[-Description \<string\>\] \[-AllowOwnerDeleteMessage \<bool\>\] \[-AllowUserEditMessage \<bool\>\] \[-AllowUserDeleteMessage \<bool\>\] \[-AllowUserChat \<bool\>\] \[-AllowGiphy \<bool\>\] \[-GiphyRatingType \<string\>\] \[-AllowMemes \<bool\>\] \[-AllowStickers \<bool\>\] \[-InMemory\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

## SYNTAX

```
New-CsTeamsMessagingPolicy [-WhatIf] [-Description <Object>] [-AllowMemes <Object>] [-AllowGiphy <Object>]
 [-AllowStickers <Object>] [-AllowUserEditMessage <Object>] [-AllowOwnerDeleteMessage <Object>]
 [-AllowUserDeleteMessage <Object>] [[-Identity] <Object>] [-Tenant <Object>] [-InMemory]
 [-AllowUserChat <Object>] [-GiphyRatingType <Object>] [-Confirm] [-Force] [-AsJob]
```

## DESCRIPTION
Specifies a Teams messaging policy, which designates what features a user is allowed to use within the messaging space.  Once a messaging policy has been created, the policy can be assigned to users using the Grant-CsTeamsMessagingPolicy cmdlet.

## EXAMPLES

### Example 1
```
powershell
PS C:\> New-CsTeamsMessagingPolicy -Identity StudentMessagingPolicy -AllowGiphy $false -AllowMemes $false
```

In this example two different property values are configured: AllowGiphy is set to false and AllowMemes is set to False.
All other policy properties will use the default values.


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
Unique identifier for the teams messaging policy to be created.

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

### -InMemory

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

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
