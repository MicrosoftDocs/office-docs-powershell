---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlinevoiceroute
schema: 2.0.0
title: Remove-CsOnlineVoiceRoute
---

# Remove-CsOnlineVoiceRoute

## SYNOPSIS
Removes an online voice route. Online voice routes contain instructions that tell Skype for Business Online how to route calls from Office 365 users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

## SYNTAX
```
Remove-CsOnlineVoiceRoute [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to remove an existing online voice route. Online voice routes are associated with online voice policies through online PSTN usages, so removing an online voice route does not change any values relating to an online voice policy, it simply changes the routing for the numbers that had matched the pattern for the deleted online voice route.

This cmdlet is used when configuring Microsoft Phone System Direct Routing.

## EXAMPLES

### Example 1
```
PS C:\> Remove-CsOnlineVoiceRoute -Identity Route1
```

Removes the settings for the online voice route with the identity Route1.

### Example 2
```
PS C:\ Get-CsOnlineVoiceRoute | Remove-CsOnlineVoiceRoute
```

This command removes all online voice routes from the organization. First all online voice routes are retrieved by the `Get-CsOnlineVoiceRoute` cmdlet. These online voice routes are then piped to the `Remove-CsOnlineVoiceRoute` cmdlet, which removes each one.

### Example 3
```
PS C:\ Get-CsOnlineVoiceRoute -Filter *Redmond* | Remove-CsOnlineVoiceRoute
```

This command removes all online voice routes with an identity that includes the string "Redmond". First the `Get-CsOnlineVoiceRoute` cmdlet is called with the Filter parameter. The value of the Filter parameter is the string Redmond surrounded by wildcard characters (\*), which specifies that the string can be anywhere within the Identity. After all of the online voice routes with identities that include the string Redmond are retrieved, these online voice routes are piped to the `Remove-CsOnlineVoiceRoute` cmdlet, which removes each one.

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

### -Identity
The unique identity of the online voice route. (If the route name contains a space, such as Test Route, you must enclose the full string in parentheses.)

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: ByPropertyName
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

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[Get-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/get-csonlinevoiceroute)

[New-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/new-csonlinevoiceroute)

[Set-CsOnlineVoiceRoute](https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceroute)
