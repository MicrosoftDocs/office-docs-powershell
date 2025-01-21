---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csonlinevoiceuser
applicable: Microsoft Teams
title: Set-CsOnlineVoiceUser
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: serdars
ms.reviewer:
---

# Set-CsOnlineVoiceUser

## SYNOPSIS
Use the `Set-CsOnlineVoiceUser` cmdlet to set the PSTN specific parameters (like telephone numbers and emergency response locations.)

**Note**: This cmdlet has been deprecated. Use the new
[Set-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/set-csphonenumberassignment) and
[Remove-CsPhoneNumberAssignment](https://learn.microsoft.com/powershell/module/teams/remove-csphonenumberassignment) cmdlets instead.

## SYNTAX

```
Set-CsOnlineVoiceUser [-Identity] <UserIdParameter> [-Tenant <Guid>] [-TelephoneNumber <String>]
 [-LocationID <Guid>] [-DomainController <Fqdn>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsOnlineVoiceUser -Identity 3c37e1c7-78f9-4703-82ee-a6b68516794e -TelephoneNumber +14255037311 -LocationID c7c5a17f-00d7-47c0-9ddb-3383229d606b
```

This example sets the telephone number and location for a user identified by the user ObjectID.

### -------------------------- Example 2 --------------------------
```
Set-CsOnlineVoiceUser -Identity user@domain.com -TelephoneNumber $null
```

This example removes the telephone number for a user identified by the user's SIP address.

## PARAMETERS

### -Identity
Specifies the identity of the target user.
Acceptable values include:

Example: jphillips@contoso.com

Example: sip:jphillips@contoso.com

Example: 98403f08-577c-46dd-851a-f0460a13b03d

You can use the `Get-CsOnlineUser` cmdlet to identify the users you want to modify.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing and requires confirmation to proceed.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: DC
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationID
Specifies the unique identifier of the emergency location to assign to the user.
Location identities can be discovered by using the `Get-CsOnlineLisLocation` cmdlet.

This parameter is required for users based in the US.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TelephoneNumber
Specifies the telephone number to be assigned to the user.
The value must be in E.164 format: +14255043920.
Setting the value to $Null clears the user's telephone number.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf parameter is not implemented for this cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
applicable: Microsoft Teams

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

## NOTES

## RELATED LINKS
