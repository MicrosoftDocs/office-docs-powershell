---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/new-cscallinglineidentity
applicable: Skype for Business Online
title: New-CsCallingLineIdentity
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsCallingLineIdentity

## SYNOPSIS
Use the New-CsCallingLineIdentity cmdlet to create a new Caller ID policy for your organization.

## SYNTAX

```
New-CsCallingLineIdentity [-Tenant <Guid>] [-Description <String>] [-EnableUserOverride <Boolean>]
 [-ServiceNumber <String>] [-CallingIDSubstitute <CallingIDSubstituteType>]
 [-BlockIncomingPstnCallerID <Boolean>] [-Identity] <XdsIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
You can either change or block the Caller ID (also called a Calling Line ID) for a user. By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create a Caller ID policy to provide an alternate displayed number, or to block any number from being displayed.

Note:  
- Identity must be unique.
- ServiceNumber must be a valid Service Number in the Skype for Business Online online telephone number inventory.
- If CallerIdSubstitute is given as "Service", then ServiceNumber cannot be empty.
 


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-CsCallingLineIdentity -Identity Anonymous -Description "anonymous policy" -CallingIDSubstitute Anonymous -EnableUserOverride $false
```

This example creates a new Caller ID policy that sets the Caller ID to Anonymous.

### -------------------------- Example 2 --------------------------
```
New-CsCallingLineIdentity -Identity "UKOrgAA" -CallingIdSubstitute "Service" -ServiceNumber "14258828080" -EnableUserOverride $false -Verbose 
```

This example creates a new Caller ID policy that sets the Caller ID to a specified service number.

### -------------------------- Example 3 --------------------------
```
New-CsCallingLineIdentity  -Identity Anonymous -Description "anonymous policy" -CallingIDSubstitute Anonymous -EnableUserOverride $false -BlockIncomingPstnCallerID $true
```

This example creates a new Caller ID policy that blocks the incoming Caller ID.

## PARAMETERS

### -Identity
The Identity parameter identifies the Caller ID policy.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BlockIncomingPstnCallerID
The BlockIncomingPstnCallerID switch determines whether to block the incoming Caller ID. The default value is false.

The BlockIncomingPstnCallerID switch is specific to incoming calls from a PSTN caller to a user. If this is set to True and if this policy is assigned to a Lync user, then Caller ID for incoming calls is suppressed/anonymous. 


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallingIDSubstitute
PARAMVALUE: Anonymous | Service | LineUri

The CallingIDSubstitute parameter lets you specify an alternate Caller ID. The default value is LineUri.

```yaml
Type: CallingIDSubstituteType
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch causes the command to pause processing, and requires confirmation to proceed. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableUserOverride
The EnableUserOverride switch lets the user override the Caller ID policy.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required. 

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change. If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-<cmdlet>.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceNumber
The ServiceNumber parameter lets you add any valid service number for the CallingIdSubstitute. 

Note: Do not add '+' to the Service number. For example, if the Service number is +1425-xxx-xxxx then valid input is 1425xxxxxxx

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None

## OUTPUTS

### None

## NOTES

## RELATED LINKS

[Get-CsCallingLineIdentity](Get-CsCallingLineIdentity.md)

[Grant-CsCallingLineIdentity](Grant-CsCallingLineIdentity.md)

[Remove-CsCallingLineIdentity](Remove-CsCallingLineIdentity.md) 

[Set-CsCallingLineIdentity](Set-CsCallingLineIdentity.md)

