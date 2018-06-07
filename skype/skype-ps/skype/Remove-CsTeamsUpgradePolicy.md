---
external help file: Microsoft.Rtc.Management.dll-Help.xml
Module Name: SkypeForBusiness
online version:
applicable: Skype for Business Server 2019
title: Remove-CsTeamsUpgradePolicy
schema: 2.0.0
---

# Remove-CsTeamsUpgradePolicy

## SYNOPSIS
n on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables adminstrators to control whether user see a notification in their Skype for Business client of a pending upgrade to Teams. In addition, when this policy is assigned to a user, administrators can optionally have Win32 versions of Skype for Business clients silently download Teams based on the value of CsTeamsUpgradeConfiguration.

## SYNTAX

```
Remove-CsTeamsUpgradePolicy  [-Identity] <XdsIdentity>
```

## DESCRIPTION
In on-premises deployments of Skype for Business Server, TeamsUpgradePolicy enables adminstrators to control whether users see a notification of a pending upgrade to Teams in their Skype for Business client. The Remove-CsTeamsUpgradePolicy lets the adminstrator remove instances of TeamsUpgradePolicy that were previously created by the administrator.

Instances of TeamsUpgradePolicy created  on-premises will not apply to any users that are already homed online. This cmdlet cannot be used to remove the built-in instances of TeamsUpgradePolicy provided in Skype for Business Online. There is no Remove-CsTeamsUpgradePolicy cmdlet for the online environment by design.

## EXAMPLES

### Example 1
```powershell
PS C:\> Remove-CsTeamsUpgradePolicy -Identity Site:Redmond1
```

This removes the TeamsUpgradePolicy for site named Redmond1.

## PARAMETERS




### -Identity
The identity of the policy. To specify the global policy for the organization, use "global". To specify a specific site, use "site:" where is the name of the site. To specfy a policy that can be assigned as needed to any users, simply specify a name of your choosing.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Server 2019
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

[Migration and interoperability guidance for organizations using Teams together with Skype for Business](https://docs.microsoft.com/en-us/MicrosoftTeams/migration-interop-guidance-for-teams-with-skype)

[Grant-CsTeamsUpgradePolicy](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/Grant-CsTeamsUpgradePolicy.md)

[Get-CsTeamsUpgradePolicy](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/Get-CsTeamsUpgradePolicy.md)

[New-CsTeamsUpgradePolicy](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/New-CsTeamsUpgradePolicy.md)

[Remove-CsTeamsUpgradePolicy](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/Remove-CsTeamsUpgradePolicy.md)

[Set-CsTeamsUpgradePolicy](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/Set-CsTeamsUpgradePolicy.md)

[Get-CsTeamsUpgradeConfiguration](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/Get-CsTeamsUpgradeConfiguration.md)

[Set-CsTeamsUpgradeConfiguration](https://github.com/MicrosoftDocs/office-docs-powershell/blob/master/skype/skype-ps/skype/Set-CsTeamsUpgradeConfiguration.md)
