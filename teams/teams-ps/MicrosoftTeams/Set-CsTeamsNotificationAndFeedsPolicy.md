---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsnotificationandfeedspolicy
schema: 2.0.0
title: Set-CsTeamsNotificationAndFeedsPolicy
---

# Set-CsTeamsNotificationAndFeedsPolicy

## SYNOPSIS

Modifies an existing Teams Notifications and Feeds Policy

## SYNTAX

```powershell
Set-CsTeamsNotificationAndFeedsPolicy [-Description <String>] [[-Identity] <String>]
 [-SuggestedFeedsEnabledType <String>] [-TrendingFeedsEnabledType <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Microsoft Teams notifications and feeds policy allows administrators to manage how notifications and activity feeds are handled within Teams. This policy includes settings that control the types of notifications users receive, how they are delivered, and which activities are highlighted in their feeds.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsNotificationAndFeedsPolicy Global -SuggestedFeedsEnabledType EnabledUserOverride
```

Change settings on an existing Notifications and Feeds Policy.

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

### -Description

Free format text

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

### -Identity

Unique identifier assigned to the policy when it was created.

```yaml
Type: String
Parameter Sets: (All)
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

### -SuggestedFeedsEnabledType

The SuggestedFeedsEnabledType parameter in the Microsoft Teams notifications and feeds policy controls whether users receive notifications about suggested activities and content within their Teams environment. When enabled, this parameter ensures that users are notified about recommended or relevant activities, helping them stay informed and engaged with important updates and interactions.

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

### -TrendingFeedsEnabledType

The TrendingFeedsEnabledType parameter in the Microsoft Teams notifications and feeds policy controls whether users receive notifications about trending activities within their Teams environment. When enabled, this parameter ensures that users are notified about popular or important activities, helping them stay informed about significant updates and interactions.

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

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
