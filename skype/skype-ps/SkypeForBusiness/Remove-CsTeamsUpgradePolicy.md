---
applicable: Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-Help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/remove-csteamsupgradepolicy
schema: 2.0.0
title: Remove-CsTeamsUpgradePolicy
---

# Remove-CsTeamsUpgradePolicy

## SYNOPSIS

In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables administrators to control whether users see a notification in their Skype for Business client of a pending upgrade to Teams. In addition, when this policy is assigned to a user, administrators can optionally have Win32 versions of Skype for Business clients silently download the Teams app based on the value of TeamsUpgradeConfiguration.

## SYNTAX

```
Remove-CsTeamsUpgradePolicy  [-Identity] <XdsIdentity>
```

## DESCRIPTION

In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables administrators to control whether users see a notification of a pending upgrade to Teams in their Skype for Business client. The Remove-CsTeamsUpgradePolicy lets the administrator remove instances of TeamsUpgradePolicy that were previously created by the administrator.

Instances of TeamsUpgradePolicy created  on-premises will not apply to any users that are already homed online. This cmdlet cannot be used to remove the built-in instances of TeamsUpgradePolicy provided in Office 365. There is no Remove-CsTeamsUpgradePolicy cmdlet for the online environment by design.

## EXAMPLES

### Example 1

```powershell
PS C:\> Remove-CsTeamsUpgradePolicy -Identity Site:Redmond1
```

This removes the TeamsUpgradePolicy for site named Redmond1.

## PARAMETERS

### -Identity

> Applicable: Skype for Business Server 2019

The identity of the policy. To specify the global policy for the organization, use "global". To specify a specific site, use "site:\<name>" where "\<name>" is the name of the site. To specify a policy that can be assigned as needed to any users, simply specify a name of your choosing.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

## INPUTS

### Microsoft.Rtc.Management.Xds.XdsIdentity

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
