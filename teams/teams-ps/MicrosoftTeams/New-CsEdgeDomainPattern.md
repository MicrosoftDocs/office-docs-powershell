---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
ms.reviewer: williamlooney
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csedgedomainpattern
schema: 2.0.0
title: New-CsEdgeDomainPattern
---

# New-CsEdgeDomainPattern

## SYNOPSIS
Used to specify a domain that will be added or removed from the set of domains enabled for federation or the set of domains disabled for federation.

## SYNTAX

```
New-CsEdgeDomainPattern -Domain <String> [<CommonParameters>]
```

## DESCRIPTION
You must use the New-CsEdgeDomainPattern cmdlet when modifying the allowed or blocked domain lists.
String values (such as "fabrikam.com") cannot be directly passed to the cmdlets used to manage either of these lists.

Federation is a service that enables users to exchange IM and presence information with users from other domains.
With Skype for Business Online, administrators can use the federation configuration settings to govern:

Whether or not users can communicate with people from other domains and, if so, which domains they are allowed to communicate with.

Whether or not users can communicate with people who have accounts on public IM and presence providers such as Windows Live, AOL, and Yahoo.

Federation is managed, in part, by using allowed domain and blocked domain lists.
The allowed domain list specifies the domains that users are allowed to communicate with; the blocked domain list specifies the domains that users are not allowed to communicate with.
By default, users can communicate with any domain that does not appear on the blocked list.
However, administrators can modify this default setting and limit communication to domains that are on the allowed domains list. 

**Important:** The `AllowFederatedUsers` property must be set to `True` for the `AllowedDomains` list to take effect. If `AllowFederatedUsers` is set to `False`, users will be blocked from communicating with all external domains regardless of the values in `AllowedDomains` or any `ExternalAccessPolicy` instance.

Skype for Business Online does not allow you to directly modify the allowed list or the blocked list; for example, you cannot use a command similar to this one, which passes a string value representing a domain name to the blocked domains list:

`Set-CsTenantFederationConfiguration -BlockedDomains "fabrikam.com"`

Instead, you must create a domain object by using the New-CsEdgeDomainPattern cmdlet, store that domain object in a variable (in this example, $x), then pass the variable name to the blocked domains list:

`$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"`

`Set-CsTenantFederationConfiguration -BlockedDomains $x`

## EXAMPLES

### Example 1
```
$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

Set-CsTenantFederationConfiguration -BlockedDomains $x
```

Example 1 demonstrates how you can assign a single domain to the blocked domains list for a specified tenant.
To do this, the first command in the example creates a domain object for the domain fabrikam.com; this is done by calling the `New-CsEdgeDomainPattern` cmdlet and by saving the resulting domain object in a variable named $x.
The second command then uses the `Set-CsTenantFederationConfiguration` cmdlet and the `BlockedDomains` parameter to configure fabrikam.com as the only domain blocked by the current tenant. Please note that `AllowFederatedUsers` should be `True` for this to work.

### Example 2
```
$x = New-CsEdgeDomainPattern -Domain "fabrikam.com"

Set-CsTenantFederationConfiguration -AllowedDomains $x
```

Example 2 demonstrates how you can assign a single domain to the allowed domains list for a specified tenant.
To do this, the first command in the example creates a domain object for the domain fabrikam.com; this is done by calling the `New-CsEdgeDomainPattern` cmdlet and by saving the resulting domain object in a variable named $x.
The second command then uses the `Set-CsTenantFederationConfiguration` cmdlet and the `AllowedDomains` parameter to configure fabrikam.com as the only domain allowed by the current tenant. Please note that `AllowFederatedUsers` should be `True` for this to work.

### Example 3
```
$x = New-CsEdgeDomainPattern -Domain ""

Set-CsTenantFederationConfiguration -AllowedDomains $x
```

Example 3 demonstrates how you can block a specified tenant from any external federation.
To do this, the first command in the example creates an empty domain object; this is done by calling the `New-CsEdgeDomainPattern` cmdlet and by saving the resulting domain object in a variable named $x.
The second command then uses the `Set-CsTenantFederationConfiguration` cmdlet and the `AllowedDomains` parameter to configure the current tenant with a Block-All setting. Please note that `AllowFederatedUsers` should be `True` in case you want to allow specific users to be able to communicate externally via `ExternalAccessPolicy` instances.

## PARAMETERS

### -Domain

> Applicable: Microsoft Teams

Fully qualified domain name of the domain to be added to the allow list.
For example:

`-Domain "fabrikam.com"`

Note that you cannot use wildcards when specifying a domain name.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Input types
None.
The New-CsEdgeDomainPattern cmdlet does not accept pipelined input.

## OUTPUTS

### Output types
The New-CsEdgeDomainPattern cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Edge.DomainPattern object.

## NOTES

## RELATED LINKS

[Set-CsTenantFederationConfiguration](https://learn.microsoft.com/powershell/module/microsoftteams/set-cstenantfederationconfiguration)
