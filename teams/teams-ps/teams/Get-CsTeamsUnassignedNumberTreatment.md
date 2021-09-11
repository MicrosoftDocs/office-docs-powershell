---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsunassignednumbertreatment
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Get-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Displays a specific or all treatments for how calls to an unassigned number range should be routed.

> [!NOTE]
> **Preview** The use of this cmdlet is in Preview.
  
## SYNTAX

```powershell
Get-CsTeamsUnassignedNumberTreatment [-Identity <string>]
```

## DESCRIPTION
This cmdlet displays a specific or all treatments for how calls to an unassigned number range should be routed.

## EXAMPLES

### Example 1
```powershell
Get-CsTeamsUnassignedNumberTreatment -Identity MainAA
```
This example displays the treatment MainAA.

### Example 2
```powershell
Get-CsTeamsUnassignedNumberTreatment
```
This example displays all configured treatments.


## PARAMETERS

### -Identity
The Id of the specific treatment to remove.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```


## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.5.0 or later.

## RELATED LINKS
- [Remove-CsTeamsUnassignedNumberTreatment](Remove-CsTeamsUnassignedNumberTreatment.md)
- [New-CsTeamsUnassignedNumberTreatment](New-CsTeamsUnassignedNumberTreatment.md)
- [Set-CsTeamsUnassignedNumberTreatment](Set-CsTeamsUnassignedNumberTreatment.md)
