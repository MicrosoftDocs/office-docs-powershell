---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsVoiceRoute
schema: 2.0.0
---

# Remove-CsVoiceRoute

## SYNOPSIS
Removes a voice route.
Voice routes contain instructions that tell Skype for Business Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsVoiceRoute [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to remove an existing voice route.
Voice routes are associated with voice policies through PSTN usages, so removing a voice route does not change any values relating to a voice policy, it simply changes the routing for the numbers that had matched the pattern for the deleted voice route.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsVoiceRoute -Identity Route1
```

Removes the settings for the voice route with the identity Route1.


### -------------------------- Example 2 --------------------------
```
Get-CsVoiceRoute | Remove-CsVoiceRoute
```

This command removes all voice routes from the organization.
First all voice routes are retrieved by the `Get-CsVoiceRoute` cmdlet.
These voice routes are then piped to the `Remove-CsVoiceRoute` cmdlet, which removes each one.


### -------------------------- Example 3 --------------------------
```
Get-CsVoiceRoute -Filter *Redmond* | Remove-CsVoiceRoute
```

This command removes all voice routes with an identity that includes the string "Redmond." First the `Get-CsVoiceRoute` cmdlet is called with the Filter parameter.
The value of the Filter parameter is the string Redmond surrounded by wildcard characters (*), which specifies that the string can be anywhere within the Identity.
After all of the voice routes with identities that include the string Redmond are retrieved, these voice routes are piped to the `Remove-CsVoiceRoute` cmdlet, which removes each one.


## PARAMETERS

### -Identity
A string that uniquely identifies the voice route you want to delete.
(If the route name contains a space, such as Test Route, you must enclose the full string in double quotes.)

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route object.
Accepts pipelined input of voice route objects.

## OUTPUTS

###  
Removes an object of type Microsoft.Rtc.Management.WritableConfig.Policy.Voice.Route.

## NOTES

## RELATED LINKS

[New-CsVoiceRoute](New-CsVoiceRoute.md)

[Set-CsVoiceRoute](Set-CsVoiceRoute.md)

[Get-CsVoiceRoute](Get-CsVoiceRoute.md)

[Test-CsVoiceRoute](Test-CsVoiceRoute.md)
