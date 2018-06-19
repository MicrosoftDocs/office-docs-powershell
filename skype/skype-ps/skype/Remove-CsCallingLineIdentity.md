---
external help file: 
applicable: Skype for Business Online
title: Remove-CsCallingLineIdentity
schema: 2.0.0
---

# Remove-CsCallingLineIdentity

## SYNOPSIS
Use the Remove-CsCallingLineIdentity cmdlet to remove a Caller ID policy.


## SYNTAX

```
Remove-CsCallingLineIdentity [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Confirm] [-Force]
 [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
You can either change or block the Caller ID (also called a Calling Line ID) for a user. By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. Caller ID policies can provide an alternate displayed number or block a number from being displayed. 

You can remove an existing Caller ID policy from your organization by using the Remove-CsCallingLineIdentity cmdlet. When a Caller ID policy is removed, it is also removed from any user accounts to which it was granted.


## EXAMPLES

### -------------------------- Example 1 --------------------------
The following example removes the Caller ID policy "Anonymous".

```
Remove-CsCallingLineIdentity -Identity Anonymous
```



## PARAMETERS

### -Identity
PARAMVALUE: XdsIdentity

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
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
PARAMVALUE: SwitchParameter

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

### -Force
PARAMVALUE: SwitchParameter

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

### -Tenant
PARAMVALUE: Guid

```yaml
Type: Object
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
PARAMVALUE: SwitchParameter

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

### -AsJob

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS
None

## OUTPUTS
None

## NOTES

## RELATED LINKS

Get-CsCallingLineIdentity 

Grant-CsCallingLineIdentity 

New-CsCallingLineIdentity 

Set-CsCallingLineIdentity 
