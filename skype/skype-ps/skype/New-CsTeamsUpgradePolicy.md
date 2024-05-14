---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version: https://learn.microsoft.com/powershell/module/skype/new-csteamsupgradepolicy
applicable: Skype for Business Server 2019
title: New-CsTeamsUpgradePolicy
schema: 2.0.0
manager: rogupta
author: hirenshah1
ms.author: hirshah
ms.reviewer:
---

# New-CsTeamsUpgradePolicy

## SYNOPSIS

In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables administrators to control whether user see a notification in their Skype for Business client of a pending upgrade to Teams. In addition, when this policy is assigned to a user, administrators can optionally have Win32 versions of Skype for Business clients silently download Teams based on the value of CsTeamsUpgradeConfiguration.

## SYNTAX

```
New-CsTeamsUpgradePolicy [-Identity] <XdsIdentity> [-NotifySfbUsers <Boolean>] [-Description <String>]
```

## DESCRIPTION

In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables administrators to control whether users see a notification of a pending upgrade to Teams in their Skype for Business client. The new-CsTeamsUpgradePolicy lets the administrator create a policy that can be assigned to users homed in Skype for Business on-premises to notify of them of a pending upgrade to Teams. Notifications are enabled by the boolean parameter NotifySfBUsers.

For users with Win32 versions of Skype for Business, if DownloadTeams=true in CsTeamsUpgradeConfiguration, users who are assigned an instance of TeamsUpgradePolicy with NotifySfBUsers=true will have Teams automatically downloaded in the background.

Notes:
* Instances of TeamsUpgradePolicy created in on-premises will not apply to any users that are already homed online.
* Skype for Business Online already provides built-in instances of TeamsUpgradePolicy, so there is no New-CsTeamsUpgradePolicy cmdlet for the online environment by design.

## EXAMPLES

### Example 1: Create a site-level policy

```powershell
PS C:\> new-CsTeamsUpgradePolicy -identity site:Redmond1 -NotifySfBUsers $true
```

This creates a policy for users in the site Redmond1.

### Example 2: Create a policy not specific to a site.

```powershell
PS C:\> new-CsTeamsUpgradePolicy -identity EnableNotifications -NotifySfBUsers $true
```

This creates a policy for users that can be granted as desired to individual users

## PARAMETERS

### -NotifySfbUsers

Determines whether users who are assigned this policy will see a notification in their Skype for Business client about a pending upgrade to Teams.  In addition, if NotifySfBUsers=true and TeamsUpgradeConfiguration has DownloadTeams=true, Win32 versions of Skype for Business will silently download the Teams client.

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

### -Description

Free form text that can be used as needed by administrators.

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

The identity of the policy. To specify the global policy for the organization, use "global". To specify a specific site, use "site:\<name>" where \<name> is the name of the site. To specify a policy that can be assigned as needed to any users, simply specify a name of your choosing.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
Required: True
Position: 1
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

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://learn.microsoft.com/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Grant-CsTeamsUpgradePolicy](Grant-CsTeamsUpgradePolicy.md)

[Get-CsTeamsUpgradePolicy](Get-CsTeamsUpgradePolicy.md)

[New-CsTeamsUpgradePolicy](New-CsTeamsUpgradePolicy.md)

[Remove-CsTeamsUpgradePolicy](Remove-CsTeamsUpgradePolicy.md)

[Set-CsTeamsUpgradePolicy](Set-CsTeamsUpgradePolicy.md)

[Get-CsTeamsUpgradeConfiguration](Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](Set-CsTeamsUpgradeConfiguration.md)
