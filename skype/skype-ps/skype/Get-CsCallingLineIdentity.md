---
external help file: 
applicable: Skype for Business Online
title: Get-CsCallingLineIdentity
schema: 2.0.0
---

# Get-CsCallingLineIdentity

## SYNOPSIS
Use the Get-CsCallingLineIdentity cmdlet to display the Caller ID policies for your organization.

## SYNTAX

```
Get-CsCallingLineIdentity [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
By default, the Skype for Business Online user's phone number can be seen when that user makes a call to a PSTN phone, or when a call comes in. You can create Caller ID policies to change this behavior, and you can use the Get-CsCallingLineIdentity cmdlet to display the existing Caller ID policies for your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsCallingLineIdentity
```

The example gets and displays the Caller ID policies for your organization.

## PARAMETERS

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

### -Filter
The Filter parameter lets you insert a string through which your search results are filtered.

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

### -Identity
The Identity parameter identifies the Caller ID policy.

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

### -LocalStore
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

### -AsJob
{{Fill AsJob Description}}

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

### None


## OUTPUTS

### 
Identity                  : Global

Description               :

EnableUserOverride        : False

ServiceNumber             :

CallingIDSubstitute       : LineUri

BlockIncomingPstnCallerID : False


## NOTES


## RELATED LINKS

[Grant-CsCallingLineIdentity]()

[New-CsCallingLineIdentity]()

[Remove-CsCallingLineIdentity]()

[Set-CsCallingLineIdentity]()