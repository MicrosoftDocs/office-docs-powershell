---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml 
online version: https://docs.microsoft.com/powershell/module/skype/remove-csteamsunassignednumbertreatment
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

> [!NOTE]
> **Preview** The use of this cmdlet is in Preview.
  
## SYNTAX

```powershell
Remove-CsTeamsUnassignedNumberTreatment -Identity <string>
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


## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 2.5.0 or later.

## RELATED LINKS
- [Get-CsTeamsUnassignedNumberTreatment](Get-CsTeamsUnassignedNumberTreatment.md)
- [New-CsTeamsUnassignedNumberTreatment](New-CsTeamsUnassignedNumberTreatment.md)
- [Set-CsTeamsUnassignedNumberTreatment](Set-CsTeamsUnassignedNumberTreatment.md)

