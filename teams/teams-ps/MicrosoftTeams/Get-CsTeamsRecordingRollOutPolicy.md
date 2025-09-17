---
applicable: Microsoft Teams
author: ronwa
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Locale: en-US
manager: yujin1
Module Name: MicrosoftTeams
ms.author: ronwa
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsrecordingrolloutpolicy
schema: 2.0.0
title: Get-CsTeamsRecordingRollOutPolicy
---

# Get-CsTeamsRecordingRollOutPolicy

## SYNOPSIS

The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsRecordingRollOutPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsRecordingRollOutPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION

The CsTeamsRecordingRollOutPolicy controls roll out of the change that governs the storage for meeting recordings. This policy would be deprecated over time as this is only to allow IT admins to phase the roll out of this breaking change.

The Get-CsTeamsRecordingRollOutPolicy cmdlet enables you to return information about all the CsTeamsRecordingRollOutPolicy that have been configured for use in your organization.

This command is available from Teams powershell module 6.1.1-preview and above.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsRecordingRollOutPolicy
```

In Example 1, Get-CsTeamsRecordingRollOutPolicy is called without any additional parameters; this returns a collection of all the CsTeamsRecordingRollOutPolicy configured for use in your organization.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier of the policy to be returned. To refer to the global policy, use this syntax: -Identity global. To refer to a per-user policy, use syntax similar to this: -Identity SalesDepartmentPolicy.
If this parameter is omitted, then all the meeting policies configured for use in your organization will be returned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### TeamsRecordingRollOutPolicy.Cmdlets.TeamsRecordingRollOutPolicy

## NOTES

## RELATED LINKS
