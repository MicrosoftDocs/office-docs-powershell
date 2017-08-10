---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsVoiceRoute

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Removes a voice route.
Voice routes contain instructions that tell Microsoft Lync Server 2010 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).

**Below Content Applies To:** Lync Server 2013

Removes a voice route.
Voice routes contain instructions that tell Lync Server how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Removes a voice route.
Voice routes contain instructions that tell Skype for Business Server 2015 how to route calls from Enterprise Voice users to phone numbers on the public switched telephone network (PSTN) or a private branch exchange (PBX).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsVoiceRoute [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Use this cmdlet to remove an existing voice route.
Voice routes are associated with voice policies through PSTN usages, so removing a voice route does not change any values relating to a voice policy, it simply changes the routing for the numbers that had matched the pattern for the deleted voice route.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsVoiceRoute cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsVoiceRoute"}

**Below Content Applies To:** Skype for Business Server 2015

Use this cmdlet to remove an existing voice route.
Voice routes are associated with voice policies through PSTN usages, so removing a voice route does not change any values relating to a voice policy, it simply changes the routing for the numbers that had matched the pattern for the deleted voice route.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsVoiceRoute -Identity Route1
```

Removes the settings for the voice route with the identity Route1.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Removes the settings for the voice route with the identity Route1.

Remove-CsVoiceRoute -Identity Route1

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Removes the settings for the voice route with the identity Route1.

Remove-CsVoiceRoute -Identity Route1

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsVoiceRoute | Remove-CsVoiceRoute
```

This command removes all voice routes from the organization.
First all voice routes are retrieved by the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to Remove-CsVoiceRoute, which removes each one.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This command removes all voice routes from the organization.
First all voice routes are retrieved by the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to Remove-CsVoiceRoute, which removes each one.

Get-CsVoiceRoute | Remove-CsVoiceRoute

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This command removes all voice routes from the organization.
First all voice routes are retrieved by the Get-CsVoiceRoute cmdlet.
These voice routes are then piped to the Remove-CsVoiceRoute cmdlet, which removes each one.

Get-CsVoiceRoute | Remove-CsVoiceRoute

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsVoiceRoute -Filter *Redmond* | Remove-CsVoiceRoute
```

This command removes all voice routes with an identity that includes the string "Redmond." First the Get-CsVoiceRoute cmdlet is called with the Filter parameter.
The value of the Filter parameter is the string Redmond surrounded by wildcard characters (*), which specifies that the string can be anywhere within the Identity.
After all of the voice routes with identities that include the string Redmond are retrieved, these voice routes are piped to Remove-CsVoiceRoute, which removes each one.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This command removes all voice routes with an identity that includes the string "Redmond." First the Get-CsVoiceRoute cmdlet is called with the Filter parameter.
The value of the Filter parameter is the string Redmond surrounded by wildcard characters (*), which specifies that the string can be anywhere within the Identity.
After all of the voice routes with identities that include the string Redmond are retrieved, these voice routes are piped to Remove-CsVoiceRoute, which removes each one.

Get-CsVoiceRoute -Filter *Redmond* | Remove-CsVoiceRoute

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This command removes all voice routes with an identity that includes the string "Redmond." First the Get-CsVoiceRoute cmdlet is called with the Filter parameter.
The value of the Filter parameter is the string Redmond surrounded by wildcard characters (*), which specifies that the string can be anywhere within the Identity.
After all of the voice routes with identities that include the string Redmond are retrieved, these voice routes are piped to the Remove-CsVoiceRoute cmdlet, which removes each one.

Get-CsVoiceRoute -Filter *Redmond* | Remove-CsVoiceRoute

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

[Online Version](http://technet.microsoft.com/EN-US/library/6687e538-e8f6-4bf0-b393-2c7b4a3f2f06(OCS.14).aspx)

[New-CsVoiceRoute]()

[Set-CsVoiceRoute]()

[Get-CsVoiceRoute]()

[Test-CsVoiceRoute]()

[Online Version](http://technet.microsoft.com/EN-US/library/6687e538-e8f6-4bf0-b393-2c7b4a3f2f06(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6687e538-e8f6-4bf0-b393-2c7b4a3f2f06(OCS.16).aspx)

