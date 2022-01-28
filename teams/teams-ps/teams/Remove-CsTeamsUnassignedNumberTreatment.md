---
external help file: Microsoft.Open.Teams.CommonLibrary.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/remove-csteamsunassignednumbertreatment
applicable: Microsoft Teams
author: jenstrier
ms.author: jenstr
ms.reviewer: 
manager:
schema: 2.0.0
---

# Remove-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
Removes a treatment for how calls to an unassigned number range should be routed.


## SYNTAX

```powershell
Remove-CsTeamsUnassignedNumberTreatment [[-Identity] <String>] [-Force] [-WhatIf] [-Confirm]  [<CommonParameters>]
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
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
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
[Get-CsTeamsUnassignedNumberTreatment](Get-CsTeamsUnassignedNumberTreatment.md)

[New-CsTeamsUnassignedNumberTreatment](New-CsTeamsUnassignedNumberTreatment.md)

[Set-CsTeamsUnassignedNumberTreatment](Set-CsTeamsUnassignedNumberTreatment.md)
