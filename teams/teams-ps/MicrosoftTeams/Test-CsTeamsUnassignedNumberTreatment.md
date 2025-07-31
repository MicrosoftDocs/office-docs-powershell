---
author: firatakandere
external help file: Microsoft.TeamsCmdlets.Powershell.Custom.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: osakande
online version: https://learn.microsoft.com/powershell/module/teams/test-csteamsunassignednumbertreatment
schema: 2.0.0
title: Test-CsTeamsUnassignedNumberTreatment
---

# Test-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
This cmdlet tests the given number against the created (by using New-CsTeamsUnassignedNumberTreatment cmdlet) unassigned number treatment configurations.

## SYNTAX

```
Test-CsTeamsUnassignedNumberTreatment -PhoneNumber <string> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet tests the given number against the created (by using New-CsTeamsUnassignedNumberTreatment cmdlet) unassigned number treatment configurations. If a match is found, the matching treatment is displayed.

## EXAMPLES

### Example 1
```powershell
PS C:\> Test-CsTeamsUnassignedNumberTreatment -PhoneNumber "321321321"
```

Tests the "321321321" number to check if there is a matching unassigned number treatment.

## PARAMETERS

### -PhoneNumber
The phone number to be tested.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default Value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 3.2.0-preview or later.

## RELATED LINKS

[New-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/new-csteamsunassignednumbertreatment)

[Get-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/get-csteamsunassignednumbertreatment)

[Set-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/set-csteamsunassignednumbertreatment)

[Remove-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/remove-csteamsunassignednumbertreatment)
