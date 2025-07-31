---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsnotificationandfeedspolicy
schema: 2.0.0
title: Remove-CsTeamsNotificationAndFeedsPolicy
---

# Remove-CsTeamsNotificationAndFeedsPolicy

## SYNOPSIS
Deletes an existing Teams Notification and Feeds Policy

## SYNTAX

```powershell
Remove-CsTeamsNotificationAndFeedsPolicy [-Identity] <String> [-MsftInternalProcessingMode <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The Microsoft Teams notifications and feeds policy allows administrators to manage how notifications and activity feeds are handled within Teams. This policy includes settings that control the types of notifications users receive, how they are delivered, and which activities are highlighted in their feeds.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsNotificationAndFeedsPolicy
```

Remove an existing Notifications and Feeds Policy

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

### -Identity
Unique identifier assigned to the policy when it was created.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
