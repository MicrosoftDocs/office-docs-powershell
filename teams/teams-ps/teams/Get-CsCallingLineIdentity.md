---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-cscallinglineidentity
applicable: Microsoft Teams
title: Get-CsCallingLineIdentity
schema: 2.0.0
manager: bulenteg
author: serdarsoysal
ms.author: serdars
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

###  Example 1
```
PS C:\> Get-CsCallingLineIdentity
```

The example gets and displays the Caller ID policies for your organization.

###  Example 2
```
PS C:\> Get-CsCallingLineIdentity -Filter "tag:Sales*"
```

The example gets and displays the Caller ID policies with Identity starting with Sales.

## PARAMETERS

### -Identity
The Identity parameter identifies the Caller ID policy.

```yaml
Type: String
Parameter Sets: (Identity)
Aliases:
applicable: Microsoft Teams

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter lets you insert a string through which your search results are filtered.

```yaml
Type: String
Parameter Sets: (Filter)
Aliases:
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

## NOTES

## RELATED LINKS

[Grant-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/grant-cscallinglineidentity)

[Set-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/set-cscallinglineidentity)

[New-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/new-cscallinglineidentity)

[Remove-CsCallingLineIdentity](https://learn.microsoft.com/powershell/module/teams/remove-cscallinglineidentity)
