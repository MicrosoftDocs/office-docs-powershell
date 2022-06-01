---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/get-cscallinglineidentity
applicable: Microsoft Teams, Skype for Business Online
title: Get-CsCallingLineIdentity
schema: 2.0.0
manager: bulenteg
author: jenstrier
ms.author: jenstr
ms.reviewer:
---

# Get-CsCallingLineIdentity

## SYNOPSIS
Use the `Get-CsCallingLineIdentity` cmdlet to display the Caller ID policies for your organization.

## SYNTAX

### Identity (Default)
```
Get-CsCallingLineIdentity [[-Identity] <string>] [<CommonParameters>]
```

### Filter
```
Get-CsCallingLineIdentity [-Filter <string>] [<CommonParameters>]
```

## DESCRIPTION
Use the `Get-CsCallingLineIdentity` cmdlet to display the Caller ID policies for your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsCallingLineIdentity
```

The example gets and displays the Caller ID policies for your organization.

## PARAMETERS

### -Filter
The Filter parameter lets you insert a string through which your search results are filtered.

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


### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


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
[Grant-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/grant-cscallinglineidentity?view=skype-ps)

[New-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/new-cscallinglineidentity?view=skype-ps)

[Remove-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/remove-cscallinglineidentity?view=skype-ps)

[Set-CsCallingLineIdentity](https://docs.microsoft.com/powershell/module/skype/set-cscallinglineidentity?view=skype-ps)

