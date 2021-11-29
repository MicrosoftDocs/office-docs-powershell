---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
title: Get-CsTeamsShiftsConnectionOperation
author: rkeury
ma.author: rkeury
manager: stepfitz
online version: https://docs.microsoft.com/powershell/module/teams/get-csteamsshiftsconnectionoperation
schema: 2.0.0
---

# Get-CsTeamsShiftsConnectionOperation

## SYNOPSIS

**Note:** This cmdlet is currently in private preview.

This cmdlet is used to retrieve the details of a specific connection operation.

## SYNTAXNew-CsTeamsShiftsConnectionBatchTeamMap

```
Get-CsTeamsShiftsConnectionOperation [[-OperationId] <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet is used to retrieve the details of a specific connection operation.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsConnectionOperation -OperationId "e640a5c9-c74f-4df7-b62e-4b01ae878bdc"
```
```output
OperationId                               Type             TenantId                                  WfmConnectorInstanceId                    CreatedDateTime           LastActionDateTime      Status
-----------                               ----             --------                                  ----------------------                    ---------------           ------------------      ------     
e640a5c9-c74f-4df7-b62e-4b01ae878bdc      TeamMapping      1d004f54-0000-0400-0000-60ce37120000      537c234c-7418-4426-9179-4180aee4544a      1/30/2020 3:21:07 PM      3/25/2020 4:31:07 PM    NotStarted                
```

Returns the operation with ID `e640a5c9-c74f-4df7-b62e-4b01ae878bdc`.

## PARAMETERS

### -OperationId

The ID of the operation.

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
