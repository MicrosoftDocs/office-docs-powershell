---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsnotificationandfeedspolicy
schema: 2.0.0
title: Get-CsTeamsNotificationAndFeedsPolicy
---

# Get-CsTeamsNotificationAndFeedsPolicy

## SYNOPSIS
Retrieves information about the Teams Notification and Feeds policy configured for use in the tenant.

## SYNTAX

### Identity (Default)
```powershell
Get-CsTeamsNotificationAndFeedsPolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter
```powershell
Get-CsTeamsNotificationAndFeedsPolicy [-MsftInternalProcessingMode <String>] [-Filter <String>]
 [<CommonParameters>]
```

## DESCRIPTION
The Microsoft Teams notifications and feeds policy allows administrators to manage how notifications and activity feeds are handled within Teams. This policy includes settings that control the types of notifications users receive, how they are delivered, and which activities are highlighted in their feeds.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsNotificationAndFeedsPolicy
```

The command shown above returns information of all Teams NotificationAndFeedsPolicy that have been configured for use in the tenant.

## PARAMETERS

### -Filter
A filter that is not expressed in the standard wildcard language.

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
Unique identifier assigned to the policy when it was created.

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

### -MsftInternalProcessingMode
For internal use only.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
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

## RELATED LINKS
