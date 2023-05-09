---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionOperation
author: gucsun
ms.author: gucsun
manager: navinth
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionoperation
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionOperation

## SYNOPSIS

This cmdlet gets the requested batch mapping operation. The batch mapping operation can be submitted by running [New-CsTeamsShiftsConnectionBatchTeamMap](New-CsTeamsShiftsConnectionBatchTeamMap.md).

## SYNTAX

```
Get-CsTeamsShiftsConnectionOperation -OperationId <String> [<CommonParameters>]
```

## DESCRIPTION

This cmdlet returns the details of a specific batch team mapping operation.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionOperation -OperationId c79131b7-9ecb-484b-a8df-2959c7c1e5f2
```
```output
CreatedDateTime      LastActionDateTime   Id                                     Status     TenantId                             Type                  WfmConnectorInstanceId
---------------      ------------------   -----------                                     ------     --------                             ----                  ----------------------
12/6/2021 7:28:51 PM 12/6/2021 7:28:51 PM c79131b7-9ecb-484b-a8df-2959c7c1e5f2            NotStarted dfd24b34-ccb0-47e1-bdb7-e49db9c7c14a TeamsMappingOperation WCI-2afeb8ec-a0f6-4580-8f1e-85fd4a113e01
```

Returns the details of batch mapping operation with ID `c79131b7-9ecb-484b-a8df-2959c7c1e5f2`.

## PARAMETERS

### -Id

The ID of the batch mapping operation.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Microsoft Teams
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[New-CsTeamsShiftsConnectionBatchTeamMap](New-CsTeamsShiftsConnectionBatchTeamMap.md)
