---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version: https://learn.microsoft.com/powershell/module/skype/set-csteamsupgradepolicy
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsTeamsUpgradePolicy
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# Set-CsTeamsUpgradePolicy

## SYNOPSIS

In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables administrators to control whether users see a notification in their Skype for Business client of a pending upgrade to Teams. In addition, when this policy is assigned to a user, administrators can optionally have Win32 versions of Skype for Business clients silently download the Teams app based on the value of TeamsUpgradeConfiguration.

## SYNTAX

### Identity (Default)

```
Set-CsTeamsUpgradePolicy [-Tenant <Guid>] [-Description <String>] [-NotifySfbUsers <Boolean>]
 [[-Identity] <XdsIdentity>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance

```
Set-CsTeamsUpgradePolicy [-Tenant <Guid>] [-Description <String>] [-NotifySfbUsers <Boolean>]
 [-Instance <PSObject>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**NOTE**: This cmdlet is only relevant for Skype for Business Server 2019. It does not apply for Skype for Business Online.

In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables administrators to control whether users see a notification of a pending upgrade to Teams in their Skype for Business client. The Set-CsTeamsUpgradePolicy lets the administrator modify an existing instance of TeamsUpgradePolicy for users homed in Skype for Business on-premises. Notifications are enabled by the boolean parameter NotifySfBUsers.

For users with Win32 versions of Skype for Business, if DownloadTeams=true in TeamsUpgradeConfiguration, users who are assigned an instance of TeamsUpgradePolicy with NotifySfBUsers=true will have Teams automatically downloaded in the background.

Notes:

- Instances of TeamsUpgradePolicy created in on-premises will not apply to any users that are already homed online.
- Office 365 already provides built-in instances of TeamsUpgradePolicy, so there is no Set-CsTeamsUpgradePolicy cmdlet for the online environment by design.

## EXAMPLES

### Example 1

```powershell
Set-CsTeamsUpgradePolicy -Identity Site:Redmond1 -NotifySfbUsers $false
```

This disables notifications for users in the Redmond1 site.

## PARAMETERS

### -Description

Free form text that can be used by administrators as desired.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the policy. To specify the global policy for the organization, use "global". To specify a specific site, use "site:\<name>" where \<name> is the name of the site. To specify any other policy provide the name of that policy.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NotifySfbUsers

If true, users with this policy see a notification in their Skype for Business client indicating that Teams is coming soon.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

{{Fill Tenant Description}}

```yaml
Type: Guid
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://learn.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)

[New-CsTeamsUpgradePolicy](New-CsTeamsUpgradePolicy.md)

[Remove-CsTeamsUpgradePolicy](Remove-CsTeamsUpgradePolicy.md)

[Set-CsTeamsUpgradePolicy](Set-CsTeamsUpgradePolicy.md)

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)
