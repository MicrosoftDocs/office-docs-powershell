---
external help file: Microsoft.Teams.PowerShell.TeamsCmdlets.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://docs.microsoft.com/powershell/module/teams/Update-M365UnifiedCustomPendingApp
applicable: Microsoft Teams
title: Update-M365UnifiedCustomPendingApp
author: michelle-paradis
ms.author: mparadis
manager: swmerchant
ms.date: 01/20/2025
schema: 2.0.0
---

# Update-M365UnifiedCustomPendingApp

## SYNOPSIS

This cmdlet updates the review status for a custom Microsoft Teams app that is pending review from an IT Admin. The requester to publish the custom app will not be notified when this cmdlet is completed.

## SYNTAX

```powershell
Update-M365UnifiedCustomPendingApp -Id <String> -ReviewStatus <String>
```

## DESCRIPTION

This cmdlet allows administrators to reject or publish custom Microsoft Teams apps that are pending review from an IT Admin.

## EXAMPLES

### Example 1

```powershell
PS C:\> Update-M365UnifiedCustomPendingApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -ReviewStatus Published
```
Updates the review status for the custom pending app with App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b to Published.

### Example 2

```powershell
PS C:\> Update-M365UnifiedCustomPendingApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -ReviewStatus Rejected
```
Updates the review status for the custom pending app with App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b to Rejected.

## PARAMETERS

### Id

Application ID of the Teams app.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### ReviewStatus

The review status of the Teams app.

```yaml
Type: String
Parameter Sets: (Published, Rejected)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES
