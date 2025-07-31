---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/new-cscallinglineidentity
schema: 2.0.0
title: New-CsCallingLineIdentity
---

# New-CsCallingLineIdentity

## SYNOPSIS
Use the New-CsCallingLineIdentity cmdlet to create a new Caller ID policy for your organization.

## SYNTAX

```
New-CsCallingLineIdentity [-Identity] <string> [-BlockIncomingPstnCallerID <bool>] [-CallingIDSubstitute <string>] [-CompanyName <string>]
[-Description <string>] [-EnableUserOverride <bool>] [-ResourceAccount <string>]
[-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
You can either change or block the Caller ID (also called a Calling Line ID) for a user. By default, the Teams or Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create a Caller ID policy to provide an alternate displayed number, or to block any number from being displayed.

Note:
- Identity must be unique.
- If CallerIdSubstitute is given as "Resource", then ResourceAccount cannot be empty.

## EXAMPLES

### Example 1
```
New-CsCallingLineIdentity -Identity Anonymous -Description "anonymous policy" -CallingIDSubstitute Anonymous -EnableUserOverride $false
```

This example creates a new Caller ID policy that sets the Caller ID to Anonymous.

### Example 2
```
New-CsCallingLineIdentity -Identity BlockIncomingCLID -BlockIncomingPstnCallerID $true
```

This example creates a new Caller ID policy that blocks the incoming Caller ID.

### Example 3
```
$ObjId = (Get-CsOnlineApplicationInstance -Identity dkcq@contoso.com).ObjectId
New-CsCallingLineIdentity -Identity DKCQ -CallingIDSubstitute Resource -EnableUserOverride $false -ResourceAccount $ObjId -CompanyName "Contoso"
```

This example creates a new Caller ID policy that sets the Caller ID to the phone number of the specified resource account and sets the Calling party name to Contoso

### Example 4
```
New-CsCallingLineIdentity -Identity AllowAnonymousForUsers -EnableUserOverride $true
```

This example creates a new Caller ID policy that allows Teams users to make anonymous calls.

## PARAMETERS

### -BlockIncomingPstnCallerID
The BlockIncomingPstnCallerID switch determines whether to block the incoming Caller ID. The default value is false.

The BlockIncomingPstnCallerID switch is specific to incoming calls from a PSTN caller to a user. If this is set to True and if this policy is assigned to a user, then Caller ID for incoming calls is suppressed/anonymous.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallingIDSubstitute
The CallingIDSubstitute parameter lets you specify an alternate Caller ID. The default value is LineUri. Supported values are Anonymous, LineUri, and Resource.

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

### -CompanyName
This parameter sets the Calling party name (typically referred to as CNAM) on the outgoing PSTN call.

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

### -Description
The Description parameter briefly describes the Caller ID policy.

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

### -EnableUserOverride
The EnableUserOverride parameter gives Microsoft Teams users the option under Settings and Calls to hide their phone number when making outgoing calls. The CallerID will be Anonymous.

If CallingIDSubstitute is set to Anonymous, the EnableUserOverride parameter has no effect, and the caller ID is always set to Anonymous.

EnableUserOverride has precedence over other settings in the policy unless substitution is set to Anonymous. For example, assume the policy instance has substitution using a resource account and EnableUserOverride is set and enabled by the user. In this case, the outbound caller ID will be blocked and Anonymous will be used.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The Identity parameter identifies the Caller ID policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceAccount
This parameter specifies the ObjectId of a resource account/online application instance used for Teams Auto Attendant or Call Queue. The outgoing PSTN call will use the phone number defined on the resource account as caller id. For more information about resource accounts please see https://learn.microsoft.com/microsoftteams/manage-resource-accounts

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

### -WhatIf
The WhatIf switch causes the command to simulate its results. By using this switch, you can view what changes would occur without having to commit those changes.

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

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/get-cscallinglineidentity)

[Grant-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/grant-cscallinglineidentity)

[Remove-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/remove-cscallinglineidentity)

[Set-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/set-cscallinglineidentity)
