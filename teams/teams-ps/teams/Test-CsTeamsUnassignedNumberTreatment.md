---
external help file: Microsoft.TeamsCmdlets.Powershell.Custom.dll-Help.xml
online version: https://docs.microsoft.com/powershell/module/teams/test-csteamsunassignednumbertreatment
Module Name: MicrosoftTeams
title: Test-CsTeamsUnassignedNumberTreatment
author: firatakandere
ms.author: osakande
schema: 2.0.0
---

# Test-CsTeamsUnassignedNumberTreatment

## SYNOPSIS
This cmdlet tests the given number against the created (by using New-CsTeamsUnassignedNumberTreatment cmdlet) unassigned number treatment configurations.

## SYNTAX

```
Test-CsTeamsUnassignedNumberTreatment -PhoneNumber <String> [-TenantId <Guid>] [-WhatIf]
[-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet tests the given number against the created (by using New-CsTeamsUnassignedNumberTreatment cmdlet) unassigned number treatment configurations.

## EXAMPLES

### Example 1
```powershell
PS C:\> Test-CsTeamsUnassignedNumberTreatment -PhoneNumber "321321321"
```

Tests the "321321321" number to check if there is a matching unassigned number treatment.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -TenantId
This parameter is reserved for internal Microsoft use.

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Names
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

### System.Guid

## OUTPUTS

### System.Object

## NOTES
The cmdlet is available in Teams PS module 3.2.0-preview or later.

## RELATED LINKS

[New-CsTeamsUnassignedNumberTreatment](/powershell/module/teams/new-csteamsunassignednumbertreatment?view=teams-ps)