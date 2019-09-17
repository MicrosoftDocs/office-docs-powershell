---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Online
title: Get-CsTeamsAppSetupPolicy
schema: 2.0.0
ms.reviewer:
manager: bulenteg
ms.author: tomkau
author: tomkau
---

# Get-CsTeamsAppSetupPolicy

## SYNOPSIS

As an admin, you can use app setup policies to customize Microsoft Teams to highlight the apps that are most important for your users. You choose the apps to pin and set the order that they appear. App setup policies let you showcase apps that users in your organization need, including ones built by third parties or by developers in your organization. You can also use app setup policies to manage how built-in features appear.
Apps are pinned to the app bar. This is the bar on the side of the Teams desktop client and at the bottom of the Teams mobile clients (iOS and Android).  Learn more about the App Setup Policies: https://docs.microsoft.com/MicrosoftTeams/teams-app-setup-policies

The existence of this cmdlet is being documented for completeness, but do not use this cmdlet.  **We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.**

## SYNTAX

### Identity (Default)
```
Get-CsTeamsAppSetupPolicy [-Tenant <System.Guid>] [[-Identity] <XdsIdentity>] [-LocalStore]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsAppSetupPolicy [-Tenant <System.Guid>] [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
As an admin, you can use app setup policies to customize Microsoft Teams to highlight the apps that are most important for your users. You choose the apps to pin and set the order that they appear. App setup policies let you showcase apps that users in your organization need, including ones built by third parties or by developers in your organization. You can also use app setup policies to manage how built-in features appear.
Apps are pinned to the app bar. This is the bar on the side of the Teams desktop client and at the bottom of the Teams mobile clients (iOS and Android).  Learn more about the App Setup Policies: https://docs.microsoft.com/MicrosoftTeams/teams-app-setup-policies

The existence of this cmdlet is being documented for completeness, but do not use this cmdlet.  **We require that all creation and modification of app setup polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center to ensure that the policy matches your expectations for the end user experience.**

## EXAMPLES

### Example 1
Intentionally not provided

## PARAMETERS

### -Filter
Do not use.

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
Do not use.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Do not use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Do not use.

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
