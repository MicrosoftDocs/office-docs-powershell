---
applicable: Microsoft Teams
author: serdarsoysal
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Locale: en-US
Module Name: MicrosoftTeams
ms.author: serdars
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsunassignednumbertreatment
schema: 2.0.0
title: Remove-CsTeamsUnassignedNumberTreatment
---

# Remove-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Removes a treatment for how calls to an unassigned number range should be routed.

## SYNTAX

```
Remove-CsTeamsUnassignedNumberTreatment [-Identity] <string> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a treatment for how calls to an unassigned number range should be routed.

## EXAMPLES

### Example 1
```powershell
Remove-CsTeamsUnassignedNumberTreatment -Identity MainAA
```
This example removes the treatment MainAA.

## PARAMETERS

### -Identity
The Id of the specific treatment to remove.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: ByPropertyName
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.Object

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.5.1 or later.

## RELATED LINKS
[Get-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/get-csteamsunassignednumbertreatment)

[New-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/new-csteamsunassignednumbertreatment)

[Set-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/set-csteamsunassignednumbertreatment)

[Test-CsTeamsUnassignedNumberTreatment](https://learn.microsoft.com/powershell/module/teams/test-csteamsunassignednumbertreatment)
