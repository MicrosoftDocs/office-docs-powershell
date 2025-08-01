---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-cshybridtelephonenumber
applicable: Microsoft Teams
title: Get-CsHybridTelephoneNumber
schema: 2.0.0
author: serdarsoysal
ms.author: serdars
ms.reviewer:
manager:

---

# Get-CsHybridTelephoneNumber

## SYNOPSIS
This cmdlet displays information about one or more hybrid telephone numbers.

> [!IMPORTANT]	
> This cmdlet is being deprecated. Use the **Get-CsPhoneNumberAssignment** cmdlet to display information about one or more phone numbers. Detailed instructions on how to use the new cmdlet can be found at [Get-CsPhoneNumberAssignment](/powershell/module/teams/get-csphonenumberassignment?view=teams-ps)

## SYNTAX

### Assignment (Default)
```powershell
Get-CsHybridTelephoneNumber [-TelephoneNumber <string>] -InputObject <IConfigApiBasedCmdletsIdentity> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet displays information about one or more hybrid telephone numbers used for Audio Conferencing with Direct Routing for GCC High and DoD clouds.

Returned results are sorted by telephone number in ascending order.

## EXAMPLES

### Example 1
```powershell
Get-CsHybridTelephoneNumber -TelephoneNumber 14025551234
```
```output
Id              O365Region SourceType TargetType TelephoneNumber UserId
--              ---------- ---------- ---------- --------------- ------
14025551234    NOAM       Hybrid                14025551234     00000000-0000-0000-0000-000000000000
```
This example displays information about the phone number +1 (402) 555-1234.

### Example 2
```powershell
Get-CsHybridTelephoneNumber
```
```output
Id              O365Region SourceType TargetType TelephoneNumber UserId
--              ---------- ---------- ---------- --------------- ------
14025551234                Hybrid                14025551234
14025551235                Hybrid                14025551235
```
This example displays information about all hybrid telephone numbers in the tenant. Note that O365Region, TargetType, and UserId will not be populated.

## PARAMETERS

### -TelephoneNumber
Filters the returned results to a specific phone number. The number should be specified without a prefixed "+". The phone number can't have "tel:" prefixed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputObject
The identity parameter.

```yaml
Type: IConfigApiBasedCmdletsIdentity
Parameter Sets: GetViaIdentity
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### None

## NOTES
The cmdlet is available in Teams PowerShell module 4.5.0 or later.

The cmdlet is only available in GCC High and DoD cloud instances.

## RELATED LINKS
[New-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/new-cshybridtelephonenumber)

[Remove-CsHybridTelephoneNumber](https://learn.microsoft.com/powershell/module/teams/remove-cshybridtelephonenumber)
